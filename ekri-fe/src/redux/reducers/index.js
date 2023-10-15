import { combineReducers } from "redux";
import userReducer from "./userReducer";
import uiReducer from "./uiReducer";

const reducer = combineReducers({
  userReducer,
  uiReducer,
});

export default reducer;
