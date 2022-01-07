import dummy from "../db/data.json";
export default function DayList() {
  return (
    //   map은 배열을 받아서, 또다른배열 반환
    <ul className="list_day">
      {dummy.days.map((day) => (
        <li key={day.id}>Day {day.day}</li>
        //react 에서 key어떤 항목을 변경,추가 또는 삭제할지 식별하는 것을 도움, key 지정안할시 기본적으로 index를 key로 사용함. 하지만 순서가 바뀔수있는경우 key 에 인덱스 쓰는것 권장 x
      ))}
    </ul>
  );
}
