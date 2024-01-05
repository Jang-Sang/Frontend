import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Count from "./components/count";

function App() {
  console.log(process.env.NODE_ENV);
  // env => ? => 환경변수? => 경로, url
  // java => 환경변수 => 터미널에서 java 관련 명령어 입력할 때 경로를 다 써줘야함 -> 환경 변수에 담아져있기 때문에 -> 생략

  // 리엑트에서 자체적으로 등록하고 있는 환경 변수
  // 개발환경에서는 "development" (npm start)
  // 배포환경에서는 "production" (npm run build)
  // 테스트환경에서는 "test (npm run test)

  /* 
    1. redux 설치 -> npm i redux react-redux
    2. middle ware 설치 npm i redux-devtools-extension redux-logger
    3. store(전역 저장소) 생성 - app.js에 provider 씌우기
    4. 전역 저상소에 미들웨어 셋팅 composeWithDevtools, applyMiddleware, logger
    5. 최상의 컴포넌트에 react-redux의 Provider import -> property로 store를 전달하면 끝
    6. reducer -> state, logic, switch case, dispatch
    7. redux는 여러개의 reducer를 통합해서 관리 -> rootReducer
    8. dispatch({ type : ... }) useSelector(()=>...)
  */

  return (
    <Provider store={store}>
      <Count />
    </Provider>
  );
}

export default App;
