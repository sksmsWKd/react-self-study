import { useNavigate } from "react-router";
//useNavigate 로 push 가능
import useFetch from "./hooks/useFetch";

export default function CreateDay() {
  const days = useFetch("http://localhost:3001/days");
  const navigate = useNavigate();

  function addDay(e) {
    fetch(`http://localhost:3001/days/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        //보내는데이터 type
      },
      body: JSON.stringify({
        //가지고오는 get과는 다르게 , put을 수정을위한 정보를 함께 보내야함
        day: days.length + 1,
      }),
    }).then((res) => {
      if (res.ok) {
        alert("생성완료");
        navigate("/");
        //history는  해당페이지로 이동. a태그 사용하지않고 페이지 이동시
      }
    });
  }

  return (
    <div>
      <h3>현재 일수 : {days.length}일</h3>
      <button onClick={addDay}>Day 추가</button>
    </div>
  );
}
