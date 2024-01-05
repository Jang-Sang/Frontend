import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTodo } from '../reducer/todo';

const Todo = () => {
	const dispatch = useDispatch();
	const { todos } = useSelector(state => state.todo);

	console.log(todos);
	useEffect(() => {
		dispatch(getTodo({ title: 'example' }));
		// getTodo가 타입으로 지정되어 함수형으로 사용할 수 있고, 정상적으로 reducer --> todoSlice 전달
		// console.log(action)
	}, []);

	return <div>:)</div>;
};
export default Todo;
