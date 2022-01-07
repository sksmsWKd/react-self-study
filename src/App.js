/* eslint-disable */

import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Hello from "./component/Hello";
import Header from "./component/Header";
import DayList from "./component/DayList";
function App() {
  return (
    <div className="App">
      {/* <Hello /> */}
      <Header />
      <DayList />
    </div>
  );
  //div한개필수
}

// https://www.youtube.com/watch?v=FqnAFX9lQPQ
// 데이터바인딩, 7분30

export default App;
