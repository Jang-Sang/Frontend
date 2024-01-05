import { createBrowserRouter } from "react-router-dom";
import TodoPage from "../pages/Todo";

const router = createBrowserRouter([
  {
    path: "/todo",
    element: <TodoPage />,
  },
]);
export default router;
