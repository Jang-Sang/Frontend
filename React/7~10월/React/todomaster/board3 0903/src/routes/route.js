import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home/home";
import BoardPage from "../pages/board/board";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/board",
    element: <BoardPage />,
  },
]);
