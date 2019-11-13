import { createStore, combineReducers } from "redux";
import score from "./score";

const reducer = combineReducers({
  score
});
const store = createStore(reducer);

export default store;
