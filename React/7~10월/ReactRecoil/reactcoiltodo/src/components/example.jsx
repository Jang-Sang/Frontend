import { useRecoilRoot } from "recoil";

const Example = () => {
  const isIpenAddModal = useRecoilValue(addModalAtom);
  // 오직 값만

  return <div>{isIpenAddModal ? "OPEN" : "CLOSE"}</div>;
};
export default Example;
