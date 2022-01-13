import { createStore } from "redux";
import reducer from "./counter";

const configure = () => {
  const store = createStore(reducer);
  return store;
};

export default configure;
