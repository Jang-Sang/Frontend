import { RouterProvider } from "react-router-dom";

import router from "./routes/route";
import GlobalStyles from "styles/global.style";
import { ThemeProvider } from "styled-components";
import theme from "styles/theme.style";
import TodoProvider from "contexts/todo";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <TodoProvider>
        <GlobalStyles />
        <RouterProvider router={router} />
      </TodoProvider>
    </ThemeProvider>
  );
}
export default App;

// app.js에서 라우터를 감싸주기만 하면 되는것!!