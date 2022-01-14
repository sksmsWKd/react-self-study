/* eslint-disable */

import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Hello from "./component/Hello";
import Header from "./component/Header";
import DayList from "./component/DayList";
import Day from "./component/Day";
import CreateWord from "./component/CreateWord";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateDay from "./component/CreateDay";
import Sample from "./component/Sample";
import { connect } from "react-redux";
//연결위함

import { actionIncrement, actionDecrement } from "./modules/counter";

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Hello /> */}
        <Header />

        <Routes>
          {/* 여러개의 route를 감싸는 컴포넌트 */}
          <Route exact path="/" element={<DayList />} />
          {/* url 이 완전히 같을 경우만. */}
          {/* 그냥 path="/"시, 앞만 같아도 같은것으로인식 */}
          <Route path="/day/:day" element={<Day />} />
          <Route path="/create_word" element={<CreateWord />} />
          <Route path="/create_day" element={<CreateDay />} />
          {/* 다이나믹한 url 처리시, :사용 day 변수로 1을 얻을수 있다. url 변수를 얻고싶을때는 , useParams사용*/}
        </Routes>
        {/* <Route>
         아무것도 없는곳에 적으면, 앞에있는조건이 모두 만족하지않을때 표시 
        </Route> */}

        {/* Routes 내부는 url에 따라 다른 내부를 보여줄것임. 
         Routes 외부는 모든 url에 노출 

         Link태그 사용시 페이지 리프레시없이 이동가능 
         NavLink 는 ACTIVE 한 상태에서 class="active"상태가됨 원래있던 className 뒤에 active 
       react router dom 의 변수를 이용할수도있음 
        {(isActive)=> ...(true인가??)}
        */}
        <Sample
          num={props.num}
          onClickIncrease={props.onClickIncrease}
          onClickDecrease={props.onClickDecrease}
        />
      </div>
    </BrowserRouter>
    //app전체를 BrowserRouter 감싼다
  );
  //div한개필수
}

const mapStateToProps = (state) => {
  return {
    num: state.reducer.num,
  };
};
//mapStateToProps는 함수이며, connect 함수의 첫번째 인수이다.
// mapStateToProps는 store로부터 state를 가져와서, 컴포넌트의 props로 state를 보내주는 역할을 한다.

const mapDispatchToProps = (dispatch) => ({
  onClickIncrease: () => {
    dispatch(actionIncrement());
  },
  onClickDecrease: () => {
    dispatch(actionDecrement());
  },
});

//mapDispatchToProps는 connect 함수의 두번째 인자이며,
// action을 reducer 함수에게 보내는 역할을 가진 dispatch를 props로 보낼 수 있다.
//첫번째 인자 dispatch: Redux의 store.dispatch()와 같음
// 두번째 인자 ownProps: 생략가능. 컴포넌트가 현재 가지고 있는 모든 props를 보여준다

export default connect(mapStateToProps, mapDispatchToProps)(App);

//store생성은 index.js
//redux를 component 에 적용은 app.js
