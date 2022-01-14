import { createAction } from "redux-actions";
// npm install redux-actions
// action 생성 함수를 직접 안만들어도 됨.
import { combineReducers } from "redux";

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const ADD_TEXT = "ADD_TEXT";
const DELETE_TEXT = "DELETE_TEXT";

//action type 를 정의한다.
// 1. ACTION TYPE 를정의하는 이유는 무엇인가??

// export const actionIncrement = () => {
//   return {
//     type: INCREMENT,
//   };
// };

// export const actionDecrement = () => {
//   return {
//     type: DECREMENT,
//   };
// };

// export const add_text = (text) => {
//   return {
//     type: ADD_TEXT,
//   };
// };
// export const delete_text = (text) => {
//   return {
//     type: DELETE_TEXT,
//     //2. 왜 문자열 안넣고 상수로 넣는가??
//   };
// };

//or
export const actionIncrement = createAction(INCREMENT);
export const actionDecrement = createAction(DECREMENT);
export const add_text = createAction(ADD_TEXT);
export const delete_text = createAction(DELETE_TEXT);
//redux-action 의 함수를 사용하여 액션생성 함수코드 작성

// action type 를 반환하는 함수를 만든다.
// 액션을 생성하는 함수다.
// 이 함수들은 나중에 다른파일에서 불러와야하므로 export할것

// action 의 구조는 type 가 기본적으로 붙음.
// ICREMENT type 의 Action 에대한 Action Creator

//  action 은 자바스크립트 객체이다.
//  type 프로퍼티가 필수이다.
//  index 프로퍼티를 이용하는것도 좋다.

const initialState = {
  num: 0,
  comment: [],
};
// state 저장. 초기상태다.

function reducer(state = initialState, action) {
  // 3.action 을 만들었으나 이름이 다른데,
  //어떻게 action 이라고 달랑써놓고 action의 type 을 인식가능한가??

  // 리듀서 함수에서는 액션의 타입에 따라 변화된 상태를 정의하여 반환->action 과 state 를 파라미터로 받아, 처리함.
  // state = initialState 이렇게 하면 initialState 가 기본 값으로 사용.

  switch (action.type) {
    case INCREMENT:
      return { num: state.num + 1 };
    case DECREMENT:
      return { num: state.num - 1 };
    //  case ADD_TEXT:
    //    return { comment: state.comment.push(text) };
    default:
      return state;

    // 아무 일도 일어나지 않으면 현재 상태를 그대로 반환.
  }
}

//reducer 에는 state와 action 이 들어감.
//setState 와 같은 역할을 하는 액션 등록
//기존의 state 객체를 복사해와서 상태 변화후 반환

//ㅡㅡㅡㅡㅡㅡ

// import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  reducer,
});
export default rootReducer;

//reducer 가 여러개일경우, 위와같이 묶을필요가 있다.

//이후 , index.js 에 react 와 redux 를 연동하자.
