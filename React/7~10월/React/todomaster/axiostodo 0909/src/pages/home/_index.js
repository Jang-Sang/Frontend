import React from "react";
import { Link, useNavigate } from "react-router-dom";

function HomePage() {
  const name = "HOME-PAGE";
  const navagation = useNavigate();

  const onClicklocationBtn = (e) => {
    console.log(e.taget);
    window.location.href = "./todo";
  };

  const onClickBtn = () => {
    navagation("/todo?&page=3&todoId=2");
    // navagation(-1); //뒤로가기
  };
  return (
    <React.Fragment>
      <div>{name}입니다</div>;
      {/* <a href="/todo">
        <button>location</button>
      </a>
      <Link to={"/todo"}>
        <button>router</button>
      </Link> */}
      <button onClick={onClicklocationBtn}>location</button>
      <button onClick={onClickBtn}>router</button>
    </React.Fragment>
  );
}
export default HomePage;
// 기본값으로 내보내다
