import { createContext, useContext, useState } from "react";

// context 만들때 항상 신경쓸 것
const TodoContext = createContext();
export const useTodo = () => useContext(TodoContext); // 1. 냉장고 만들고


const TodoProvider = ({ children }) => { // 2. 덮개 만들고
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      title: "example-todo-1",
      content: "example-todo-1",
      state: false,
    },
    {
      id: 2,
      title: "example-todo-2",
      content: "example-todo-2",
      state: false,
    },
  ]); // 기본값

  const addTodo = (title, content) =>
    new Promise((resolve) => {
      setTimeout(() => {
        setTodoList([
          {
            id: Math.floor(Math.random() * 100000),
            title,
            content,
            state: false,
          },
          ...todoList,
        ]);
        resolve();
      }, 3000);
    });

  const deleteTodo = (id) => {
    const deletedTodo = todoList.filter((el) => el.id !== id);
    setTodoList(deletedTodo);
  };

  const updateTodo = (id, content) => {
    if (window.confirm("정말 수정하시겠습니까?")) {
      const _todoList = [...todoList];
      const updateTodo = _todoList.find((el) => el.id === id);
      updateTodo.content = content;
      setTodoList(_todoList);
    }
  };

  return (
    <TodoContext.Provider
      value={{
        todoList,
        updateTodo,
        addTodo,
        deleteTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
export default TodoProvider;  //3. 내보내기

// 전부 함수로 구현해서 내보내기

// 전역상태관리를 적용하기 전에 생각해야하는 것
// 내가 어떤 성향인가를 알것
// 전역상태관리를 최소화한다 -> 코드적인 개선을 한다
// 전역상태관리를 한다 -> 유지보수를 우선시 한다.
