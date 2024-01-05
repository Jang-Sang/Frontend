import useCount from "../../hooks/use-count";

const Count2 = () => {
  const { count: zl존성용123, onAddCount } = useCount(100);

  return (
    <div>
      {zl존성용123}
      <button onClick={onAddCount}>+</button>
    </div>
  );
};
export default Count2;
