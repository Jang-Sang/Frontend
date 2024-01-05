import OneTodo from "./one-todo";
import { useTodo } from "contexts/todo.ctx";

const TodoList = () => {
    const {todoList} = useTodo()

    return (
        <>
            {todoList.map((todo) => (
                <OneTodo todo={todo}/>
            ))}
        </>
    );
};
export default TodoList;
