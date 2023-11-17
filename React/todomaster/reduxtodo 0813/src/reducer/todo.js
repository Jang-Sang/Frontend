const initialState = [
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
];

export const todoAction = {
  ADD_TODO: "ADD_TODO",
  DELETE_TODO: "DELETE_TODO",
  UPDATE_TODO: "UPDATE_TODO",
};

/*4*/
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    // todo를 바꿀 수 있는 케이스 무엇이 있었는가
    case todoAction.ADD_TODO:
      return [
        {
          id: Math.floor(Math.random() * 100000),
          title: action.payload.title,
          content: action.payload.content,
        },
        ...state,
      ];
    case todoAction.DELETE_TODO:
      return state.filter((el) => el.id !== action.payload.id);
    case todoAction.UPDATE_TODO:
      const todo = state.find((el) => el.id === action.payload.id);
      todo.content = action.payload.content;
      return state;
    default:
      return state;
  }
};
export default todoReducer;

/* 
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
*/
