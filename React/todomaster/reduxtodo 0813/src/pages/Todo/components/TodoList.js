import { styled } from "styled-components";
import OneTodo from "./OneTodo";
import { useSelector } from "react-redux";

const TodoList = () => {
  const todoList = useSelector((state) => state.todo);
  return (
    <S.Content>
      {todoList.map((todo, index) => (
        /** html안에서 map의 결과 html return */
        /* react는 map으로 랜더된 요소의 순서 */
        /* 
          키를 주지 않으면 위에 것을 수정했는데 아래 것이 바뀌거나 
          의도하지 않은 요소의 변화가 생길 수 있음 -> react는 무슨 요가 무엇인지 잘 모른다
          react가 잘 알아볼 수 있도록 키를 설정하여 각 요소의 고유한 값을 부여
        */
        <OneTodo key={"todo" + index} todo={todo} />
        /* todo.id와 같이 고유한 값이 없다면 index를 이용하여 key 값 부여*/
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
