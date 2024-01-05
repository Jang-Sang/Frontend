import { combineReducers } from "redux";
import count from "./count";

export const rootReducer = combineReducers({
  /**
   * ...user, todo, ... count
   * 무작정 전역 상태? => X
   */
  count,
});
