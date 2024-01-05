import { RouterProvider } from "react-router-dom";

import router from "./routes/route";
import GlobalStyles from "styles/global.style";
import { ThemeProvider } from "styled-components";
import theme from "styles/theme.style";
import { Provider } from "react-redux";
import { store } from "store/store";

function App() {
  return (
    /*2*/
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  );
}
export default App;
