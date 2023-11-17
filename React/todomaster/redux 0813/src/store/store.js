import { createStore, applyMiddleware } from "redux";
import { composeWithDevtools } from "redux-devtools-extension";
import logger from "redux-logger";
import { rootReducer } from "../reducer";

// redux(x) -> redux-tool-kit
export const store = createStore(
  rootReducer,
  // reducer (switch(action.type)) => rootReducer
  process.env.NODE_ENV === "development" &&
    composeWithDevtools(applyMiddleware(logger))
);


// 공용 냉장고를 만들고
// provider를 사용해서 덮개를 만들어 어디서든 사용할 수 있게 하는 것
