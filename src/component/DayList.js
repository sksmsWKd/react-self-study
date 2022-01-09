import dummy from "../db/data.json";
import { Link } from "react-router-dom";
//1. {} 해야함 member import(named import)
//중괄호 없는것은 export default  된 것만

export default function DayList() {
  return (
    //   map은 배열을 받아서, 또다른배열 반환
    <ul className="list_day">
      {dummy.days.map((day) => (
        <li key={day.id}>
          <Link to={`/day/${day.day}`}> Day {day.day}</Link>
          {/* Link 에 변수사용시, {`  ${변수}` } */}
        </li>
        //react 에서 key어떤 항목을 변경,추가 또는 삭제할지 식별하는 것을 도움, key 지정안할시 기본적으로 index를 key로 사용함. 하지만 순서가 바뀔수있는경우 key 에 인덱스 쓰는것 권장 x
      ))}
    </ul>
  );
}
