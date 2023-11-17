import { styled } from "styled-components";
import OneTodo from "./OneTodo";
import { useTodo } from "contexts/todo";

const TodoList = () => {
  const { todoList } = useTodo();
  return (
    <S.Content>
      {todoList.map((todo) => (
        /** html안에서 map의 결과 html return */
        <OneTodo todo={todo} />
      ))}
    </S.Content>
  );
};
export default TodoList;

const Content = styled.div`
  width: 100%;
  height: calc(100% - 32px);
  padding-bottom: 64px;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;
const S = {
  Content,
};

// 기존에 index.js안에 있던 맵을 옮겨온 것. map이 저 곳에 있으면 유지보수에 보기 좋지 않다. -> components화
// 추상화의 레벨을 갖게 한다. index.js를 완벽하게 components의 집합으로 만든다
// 이것은 개발자마다 의견이 다르다.
