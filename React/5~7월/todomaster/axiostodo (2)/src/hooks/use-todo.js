import { useEffect, useState } from "react"


const useTodo = () => {
    const [todoList, setTodoList] = useState();
    

    useEffect(()=>{
        // await axios.get 사용
        setTodoList(...todoList)
    }, [])
    

    const onAddTodo = () => {
        //await axios.post 사용
    }

    const onUpdateTodo = () => {}

    return (
        todoList,
        onAddTodo,
        onUpdateTodo
    )
}
export default useTodo

// 이렇게 하면 어디서든 usdTodo를 사용할 수 있다.
// 무조건 해야한다 vs 재사용이 가능한 것만 사용한다 의 의견이 갈린다.

// 신입때 제일 자주하는 리뷰
// 1. 관심사 분리 추천  2. 