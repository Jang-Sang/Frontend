import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const onClickNavigateBoard = () => {
    navigate("/board");
  };

  return <button onClick={onClickNavigateBoard}>입장</button>;
};
export default HomePage;
