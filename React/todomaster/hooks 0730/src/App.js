import UseState from "./hooks/useState";
import UseRef from "./hooks/useRef";
import User from "./hooks/user";
import UseMemo from "./hooks/useMemo";
import UseCallback from "./hooks/useCallback";

function App() {
  return (
    <>
      <UseState />
      <hr />
      <UseRef />
      <hr />
      <User />
      <hr />
      <UseMemo />
      <hr />
      <UseCallback />
    </>
  );
}
export default App;
