import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import useFetch from "./hooks/useFetch";
//1. {} 해야함 member import(named import)
//중괄호 없는것은 export default  된 것만

export default function DayList() {
  // const [days, setDays] = useState([]);

  const days = useFetch("http://localhost:3001/days");
  //useFetch 는, custom hook

  // const [count, setCount] = useState(0);

  // function onClick() {
  //   setCount(count + 1);
  // }

  // useEffect(
  //   () => {
  //     fetch("http://localhost:3001/days")
  //       .then((res) => {
  //         return res.json();
  //         //response 는 http 응답
  //       })
  //       .then((data) => {
  //         setDays(data);
  //       });
  //     //api 비동기 통신을 위해 fetch 이용,
  //     //api 경로 입력 ,
  //   },
  //   []

  //   //  [count] 하면 , count 가 변경될때만 실행, 의존성 배열의 값이 바뀌는경우만.
  //   //  [] 하면 , 랜더링시 1회만 실행.
  // );

  //상태값 바뀔때 동작하는 함수 작성가능
  //첫번째 변수로 함수
  return (
    <div>
      {/* map은 배열을 받아서, 또다른배열 반환 */}
      <ul className="list_day">
        {days.map((day) => (
          <li key={day.id}>
            <Link to={`/day/${day.day}`}> Day {day.day}</Link>
            {/* Link 에 변수사용시, {`  ${변수}` } */}
          </li>
          //react 에서 key어떤 항목을 변경,추가 또는 삭제할지 식별하는 것을 도움, key 지정안할시 기본적으로 index를 key로 사용함. 하지만 순서가 바뀔수있는경우 key 에 인덱스 쓰는것 권장 x
        ))}
      </ul>
      {/* <button onClick={onClick}>{count}</button> */}
    </div>
  );
}
