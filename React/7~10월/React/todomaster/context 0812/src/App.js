import "./App.css";
import Count from "./components/count";
import User from "./components/user";
import UserProvider from "./context/user";

function App() {
  return (
    <UserProvider>
      <User /> {/* children */}
    </UserProvider>
  );
}

export default App;
