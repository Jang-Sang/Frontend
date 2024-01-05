import OneTodo from "./one-todo";
import { useState } from "react";
const TodoList = ({ todoList, setTodoList }) => {
  //oneTodo에서 props로 받은 것들

  const handleUpdateTodo = (id, content) => {
    //find는 기존의 것을 변경함
    //새로운 배열을 만들어야 함. 불변성을 지켜야 함..
    //기존에 있는 todoList를 깊은 복사하여 다른 메모리 주소값을 갖게 하고 수정한다.
    const _todoList = [...todoList];
    const targetTodo = todoList.find((todo) => todo.id === id);
    targetTodo.content = content;
    setTodoList(_todoList);
  };

  const handleDeleteTodo = (id) => {
    //삭제는 한번쯤 확인해 주면 좋다.
    const _todoList = [...todoList];
    if (window.confirm("정말 삭세하시겠습니까?")) {
      const _todoList = todoList.filter((todo) => todo.id !== id);
      setTodoList(_todoList);
    }
  };

  const handleCheckTodo = (id) => {
    const _todoList = [...todoList];
    const targetTodo = todoList.find((todo) => todo.id === id);
    if (targetTodo.state) {
      targetTodo.state = false;
    } else {
      targetTodo.state = true;
    }
    setTodoList(_todoList);
  };

  return (
    <>
      {todoList.map((todo) => (
        <OneTodo
          todo={todo}
          handleUpdateTodo={handleUpdateTodo}
          handleDeleteTodo={handleDeleteTodo}
          handleCheckTodo={handleCheckTodo}
        />
      ))}
    </>
  );
};
export default TodoList;
