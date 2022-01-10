import { useHistory } from "react-router";
import { useRef } from "react";
import useFetch from "./hooks/useFetch";
export default function CreateWord() {
  const days = useFetch("http://localhost:3001/days");
  const history = useHistory();

  function onSubmit(e) {
    e.preventDefault();

    console.log(engRef.current.value);
    //current 속성 이용  , 해당요소 접근
    //value 는 input 에 입력된값 받음.

    //form 태그 안의 버튼을 눌러도 , 새로고침 막음

    fetch(`http://localhost:3001/words/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        //보내는데이터 type
      },
      body: JSON.stringify({
        //가지고오는 get과는 다르게 , put을 수정을위한 정보를 함께 보내야함
        day: dayRef.current.value,
        eng: engRef.current.value,
        kor: korRef.current.value,
        isDone: false,
      }),
    }).then((res) => {
      if (res.ok) {
        alert("생성완료");
        history.push(`/day/${dayRef.current.value}`);
        //history는  해당페이지로 이동. a태그 사용하지않고 페이지 이동시
      }
    });
  }
  const engRef = useRef(null);
  const korRef = useRef(null);
  const dayRef = useRef(null);
  //useRef 는 dom 에 접근가능하게함. 스크롤위치나 포커스주기나.
  //괄호 안은 초기값
  return (
    <form onSubmit={onSubmit}>
      <div className="input_area">
        <label>Eng</label>
        <input type="text" placeholder="eng" ref={engRef} />
        {/* 각 태그에 ref 연결 */}
      </div>
      <div className="input_area">
        <label>Kor</label>
        <input type="text" placeholder="kor" ref={korRef} />
      </div>
      <div className="input_area">
        <label>Day</label>
        <select ref={dayRef}>
          {days.map((day) => (
            <option value={day.day} key={day.id}>
              {day.day}
            </option>
          ))}
        </select>
      </div>
      <button>save</button>
    </form>
  );
}
