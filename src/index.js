import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./modules/counter";
//redux 이용위한 import 3

import { composeWithDevTools } from "redux-devtools-extension";
//dev-tool 이용위한 import
//npm install redux-devtools-extension

const store = createStore(rootReducer, composeWithDevTools());
//store 는
ReactDOM.render(
  //provider 는 컴포넌트로 , store사용가능하게함.
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    ,
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
