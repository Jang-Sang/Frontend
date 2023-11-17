import logo from "./logo.svg";
import { useEffect } from "react";
import "./App.css";
import { worker } from "./__mock__/browser";

function App() {
  if (process.env.NODE_ENV === "development") {
    worker.start();
    // 개발자 환경에서만 실행하도록 제한
    /* 
      msw? -> 실제 db(x), 내가 만든 가상의 데이터, 개발 환경에서 개발 편의성
      production -> 실제 db와 소통하는 백엔드와 소통
    */
  }

  useEffect(() => {
    fetch("/api/todo")
      .then((res) => res.json())
      .then((result) => console.log(result));
  }, []);
  // 실제 서버와 소통하면 fetch안에 주소만 바꾸면 실제 개발이 끝나는 개발의 효율성을 어마어마하게 올려주는 방법이다.
  // axios를 사용하면 편하지만 사용하지 않음으로 fetch를 사용한다.
  // 실제 사용법은 8월 26일 수업으로 끝 나머지는 라이브러리에 맞춰서 사용하면 된다.
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

// 서버 실행 -> msw 실행 -> 내부데이터 작동 가능