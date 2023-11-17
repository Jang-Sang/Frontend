import { useState } from "react";

const useCount = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);
  const onAddCount = () => {
    setCount(count + 1);
  };

  return { count, onAddCount };
};
export default useCount;
