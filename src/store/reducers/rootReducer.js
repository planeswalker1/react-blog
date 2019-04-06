import { combineReducers } from "redux";
import blogsReducer from "./blogReducer";

const rootReducer = combineReducers({
  blog: blogsReducer
});

export default rootReducer;