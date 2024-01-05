const initialState = 0;

export const INCREMENT = "INCREMENT";

/** 매개변수 안에 = 이 들어가면 state에 어떠한 값도 전달되지 않으면 기본 값으로 셋팅 */
const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + action.payload;
    default:
      return state;
  }
};
export default countReducer;
/**
 * 1. countReducer -> rootReducer
 * 2. rootReducer -> store
 */
