import TodoApi from "../apis/todo"
import { useQuery, useQueryClient } from "@tanstack/react-query"
import { TODO_KEY } from "./qureyKey";

const Todo =() => {
    const queryClient = useQueryClient();
    const { data, isError, isLoading, error } = useQuery([TODO_KEY.GET_TODO], TodoApi.getTodo, {
      staleTime: 1000 * 60 * 4
    })
    
    // react-query로 받아온 데이터는 자체만으로 state이기 때문에
    // useState로 받을 필요가 없습니다.
    // queyClient의 setQueryDate로 수정할 수 있다
    const onSetQuery = () => {
      queryClient.setQueryData([TODO_KEY.GET_TODO], (prev) => {
        console.log(prev)
        return [
          ...prev,
          {}
        ]
      })
    }
  
  if(isLoading){
    return <div>Loading...</div>
  }

  return (
    <div>
      :)
      <button onClick={onSetQuery}>셋</button>
    </div>
  )
}
export default Todo