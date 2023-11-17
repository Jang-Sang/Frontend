import { createStore, applyMiddleware } from "redux";
import { composeWithDevtools } from "redux-devtools-extension";
import logger from "redux-logger";
// createstore 줄 그어진 이유 -> redux가 더이상 사용하지 않고 있으므로 redux-tool-kit을 추천해서 줄이 그어진채로 나온다.

// redux(x) -> redux-tool-kit
export const store = createStore(
  undefined,
  // reducer (switch(action.type)) => rootReducer 이것을 모아놓은 것을 넣으면 된다.
  process.env.NODE_ENV === "development" &&
    composeWithDevtools(applyMiddleware(logger))
);

//redux 초기 세팅
// app.js로 가서 Provider를 추가해준다.