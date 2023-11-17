import useCount from "../../hooks/use-count";

const Count2 = () => {
  const { count: 장상준, onAddCount } = useCount(100);

  return (
    <div>
      {장상준}
      <button onClick={onAddCount}>+</button>
    </div>
  );
};
export default Count2;
