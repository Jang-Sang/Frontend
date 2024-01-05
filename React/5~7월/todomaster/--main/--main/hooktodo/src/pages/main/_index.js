//entry file
//폴더에서 가장 먼저 봐야 하는 파일임
import React from "react";
import { useSearchParams, Link, useNavigate } from "react-router-dom";
const MainPage = () => {
  //배열은 구조분해할당 이름 마음대로 할 수 있다.

  //현재 URL에서 쿼리 파라미터의 값을 추출하기 위해서 searchParams을 씀! 끝
  const [searchParams, setSearchParams] = useSearchParams();
  //todoId라는 키값의 파람을 찾는다.
  console.log(searchParams.get("todoId"));
  //locaiton.href는 새로고침(데이터 새롭게 받아오기) 되므로 대신
  //네비게이트를 쓴다. 똑같이 페이지 이동하는 기능을한다.
  const navigate = useNavigate();

  //만들어준 네이게이트 페이지 이동 함수 이름임
  const onClickNavigateTodo = () => {
    // window.location.href = "/todo/3";
    navigate("/todo/3"); //(이걸 사용하자!!!!!)
    //뒤로가기
    // navigate(-1);

    //localhost:3002/?todoId=3&page=4
    //밑의 코드때문에 위와 같이 url이 바뀜
    //여러개로 쿼리스트링을 붙일 수 있다.
    //useState와 비슷한 느낌이다!!
    // setSearchParams({
    //   todoId: 3,
    //   page: 4,
    // });
  };
  //한줄자리는 소괄호가 없어도되나, 두 줄이상이면 무조건 ()로 묶어야 한다.
  //리액트는 최상위의 태그 하나로 감싸져야 한다
  {
    /*아무런 태그명이 없는 태그를 fragment
    만약 해당 fragment 에 속성을 줄 경우*/
  }
  return (
    //태그명이 없는 태그를 fragment라고 부른다. 만약 해당 fragment에 속성을 줄 경우
    //<></>와 완전동일하다
    //a href은 처음부터 페이지를 렌더링하나, Link는 라우터에서 제안하는 기능으로 캐시를 파싱하여 렌더링 한다.
    //Link는 요청을 다시 하지 않는다.
    <React.Fragment>
      <div>main</div>
      <div>:/</div>
      <button onClick={onClickNavigateTodo}>TodoPage 이동</button>
      {/*해당 a태그와 Link를 클릭하면 a는 재로딩, link는 재로딩안되는 것을 알수있다,*/}
      <a href="/todo/3">TodoPage</a>
      <Link to="/todo/4">TodoPage</Link>
    </React.Fragment>
  );
};
// export default MainPage;
