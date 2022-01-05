/* eslint-disable */

import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let [like, likeChange] = useState(0);
  let [title, titleChange] = useState(["1번", "2번", "3번"]);

  function changeTitle() {
    // titleChange(["1-1번", "2번", "3번"]);
    //state 가 다같이 바뀐다.

    //따로하고싶으면 복사를 해야함

    // var newTitle = like;

    //이렇게 복사하면, 복사가 아니고 값 공유임 참조형자료형

    var newTitle = [...title];
    //object도 , 대괄호대신 중괄호, deepcopy
    newTitle[0] = "1-1번";
    titleChange(newTitle);
  }

  //ex array 안에 [10,100 ]을 변수로쓰고싶어요
  //var[a,b]=[10,100]
  //[state 데이터, state 데이터 변경 함수]

  let dataA = "리엑트데이터바인딩";

  let nav = "black-nav";
  function f() {
    return 1000;
  }
  // 함수가능
  return (
    <div className="App">
      <div className={nav}>React self study</div>

      <div className="list">
        <h3>
          {title[0]}
          <button
            onClick={changeTitle}

            //changeTitle() 하면 함수 자동실행이라 ㄴㄴ
          >
            버튼
          </button>

          <span
            onClick={() => {
              likeChange(like + 1);
            }}
            //likeChange() 가능
            //ex) likeChange(대체할데이터)  ->
          >
            💖
          </span>
          {like}
        </h3>
        <p>1일</p>
        <hr />
      </div>

      <div className="list">
        <h3>{title[1]}</h3>
        <p>2일</p>
        <hr />
      </div>

      <div className="list">
        <h3>{title[2]}</h3>
        <p>3일</p>
        <hr />
      </div>

      <Modal />
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
    //이때 주의점.이름은 대문자로
  );
}

// https://www.youtube.com/watch?v=FqnAFX9lQPQ
// 데이터바인딩, 7분30

export default App;
