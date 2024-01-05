import TodoApi from "apis/todo.api";
import OneTodo from "./one-todo";

const TodoList = ({todoList, setTodoList}) => {

    const updatTodo = async (id, content, state) => {
        try{
            await TodoApi.updatTodo(id, {content, state})
            const getTodo = await TodoApi.getTodo()
            setTodoList(getTodo.data.data)
        } catch(err){
            console.error(err)
        }
        /* 
            1. 낙관적 업데이트
            2. api를 다시 호출해서 업데이트 index => getTodoList()
            -> 수정사항을 빠르게 확인가능, 다시 도전하기 쉬움 , 복잡한 코드에서는 사용하기 힘들다.
        */
    }

    // const deleteTodo = async (id) => {
    //     const response = await axios.delete('/todo/${id}')
    //     console.log(response.data.data)
    // }

    const deleteTodo = async (id) => {
        const response = await TodoApi.deleteTodo(id)
        const getTodo = await TodoApi.getTodo()
        setTodoList(getTodo.data.data)
    }


    return (
        <>
            {todoList.map((todo) => (
                <OneTodo todo={todo} updatTodo={updatTodo} deleteTodo={deleteTodo}/>
            ))}
        </>
    );
};
export default TodoList;


//eslint 본인만의 룰을 제작할 것 하루,이틀정도는 투자할만 하다.
