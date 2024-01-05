import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteTodo, getTodo, updateTodo } from '../reducer/todo'
import AddTodoForm from './add'
import OneTodo from './oneTodo'

const Todo = () => {
	const dispatch = useDispatch()
	const { todos } = useSelector(state => state.todo)
	const { loading, done, error } = useSelector(state => state.todo.getTodoState)
	useEffect(() => {
		dispatch(getTodo())
		dispatch(addTodo({ title: '안녕', content: '하세요' }))
		dispatch(deleteTodo({ id: 3 }))
		dispatch(updateTodo({ id: 3, title: '123', content: '456' }))
		// getTodo가 타입으로 지정되어 함수형으로 사용할 수 있고, 정상적으로 reducer --> todoSlice 전달
		// console.log(action)
	}, [])

	// if (loading) {
	// 	return <div> ... Loading </div>
	// }
	return (
		<div>
			{loading ? (
				// loading
				<div>...Loading</div>
			) : (
				// todos
				<div>
					{todos.map(todo => (
						<OneTodo todo={todo} />
					))}
				</div>
			)}
			<AddTodoForm />
		</div>
	)
}
export default Todo
