import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './pages/Home';
import TodoPage from './pages/Todo';
import router from './routes/router';

function App() {

  return <RouterProvider router={router} />
  // {/** 최신방식 너희가 직접 할 필요없이 우리가 돌려줄게 라는 방식*/}
  // return <BrowserRouter>
  // {/* HTML을 지원하는 브라우저의 url path를 감지 */}
  // <Routes>
  //   {/**Route의 path와 감지한 url이 일치한 Route만 랜더링 */}
  //   <Route path="/" element={<HomePage/>}/>
  //   {/** 패스와 내가 보여줄 페이지를 매칭시켜주는 것 */}
  //     {/** url과 보여줄 요소의 매칭 */}
  //     {/** url 감지 -> 일치하는 Route 찾기 -> 해당하는 Route 랜더링 */}
  //   <Route path="/todo/:todoId " element={TodoPage}/> 
  //   {/**만약에 자동완성으로 임포트가 안되면 직접 찾아가서 반드시 임포트해야된다. */} 
  // </Routes>
  // </BrowserRouter>
  // {/** 구시대방식 */}
}

export default App;

// 리엑트 라우터 돔은 주소에 따라 다른 요소를 보여줘야하니까 위에 주소를 감지해서 그 주소에 따라 다양한 요소를 보여주게 하는 것
// 그래서 path와 보여줘야 할 것을 매칭 시켜준다.
// router dom 경로를 보면 우리가 만들었던 다른 페이지를 보여준다.
// 라이브러리는 사용법이 정해져 있으므로 적혀져 있는대로 사용하고 오류가 뜰시 라이브러리 홈페이지에 해결책이 있는 경우가 대다수
// 웬만하면 자동완성을 사용해서 오타가 나지 않도록 하자. 자동완성 안된다면 주의해서 입력할 것
