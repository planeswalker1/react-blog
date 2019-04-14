import { combineReducers } from "redux";
import blogsReducer from "./blogReducer";

// I can combine reducers with combineReducers so the state of the store has 1 property called blog that is handled by blogsReducer. I just did it for show

const rootReducer = combineReducers({
  blog: blogsReducer
});

export default rootReducer;