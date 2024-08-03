import loginReducer from "./loginReducer";
import {combineReducers} from "redux";
export const allReducers = combineReducers({
    loginReducer,
})