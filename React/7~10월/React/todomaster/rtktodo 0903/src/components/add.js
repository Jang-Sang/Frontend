import { useDispatch } from 'react-redux'
import { addTodo } from '../reducer/todo'

const AddTodoForm = () => {
	const dispatch = useDispatch()

	const onAddTodo = e => {
		e.preventDefault()
		const title = e.target.title.value
		const content = e.target.content.value
		console.log(title, content)
		dispatch(addTodo({ title, content }))
	}

	return (
		<form onSubmit={onAddTodo}>
			<input name="title" />
			<textarea name="content"></textarea>
			<button>등록</button>
		</form>
	)
}
export default AddTodoForm
