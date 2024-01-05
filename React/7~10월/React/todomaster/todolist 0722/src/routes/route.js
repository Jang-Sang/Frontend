import { createBrowserRouter } from "react-router-dom";
// react-router-dom 에서 export로 내보낸 것중에 하나의 키값을 구조분해할당으로 import해서 사용하는 것
import { HomePage } from "../pages/Home";
// 중괄호하지 않으면 default한 값이 그대로 사용된다.
import TodoPage from "../pages/Todo";
/* 
export default 한다면 내보내는 기본 값이 해당 객체이기 때문에
import 시 내가 원하는 이름으로 수정 가능

export만 되어있다면, 객체로 해당 데이터를 가지고오기 때문에 key값과 일치해야하므로
import { export한 이름 }으로 가지고 와야함

export default = 고정된 이름으로 된걸 가져와야함
export = import { export한 이름 }이렇게 가져와야함
*/

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path: "/todo",
    // path: "/todo/:todoId",
    element: <TodoPage/>
  }
]);  
export default router