import React from "react";

export default function Sample2({ props }) {
  return (
    <div>
      <h2>{props.num}</h2>
      <button onClick={props.onClickIncrease}>+</button>
      <button onClick={props.onClickDecrease}>-</button>
    </div>

    //   state:  store에서 저장되어 있는 값.
    // 	action: store에 저장된 값을 변경시키는 방식을 정함.
    // 	reducer: (action, old state)를 받아서 new state로 변환시키는 함수.
  );
}
