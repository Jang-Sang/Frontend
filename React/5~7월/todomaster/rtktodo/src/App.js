import "./App.css";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyles from "./styles/global";
import { Provider } from "react-redux";
import { store } from "store/store";
import router from "routes/routing";
function App() {
  if (process.env.NODE_EVY === "development") {
    worker.start();
  }



  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  );
}
export default App;
