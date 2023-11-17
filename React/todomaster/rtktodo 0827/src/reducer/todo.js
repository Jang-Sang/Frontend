import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	todos: [
		{
			id: 1,
			title: 'example-1',
			content: 'example-1',
			state: false,
		},
		{
			id: 2,
			title: 'example-2',
			content: 'example-2',
			state: false,
		},
	],
};

export const todoSlice = createSlice({
	name: 'todo',
	initialState,
	reducers: {
		// 함수형으로 표현 가능하여 기존의 redux보다 가독성 좋은 로직을 구현
		getTodo(state, action) {
			console.log(action);
			// msw를 통해 가상 백엔드에서 불러와서 state로 return
			return state;
		},
	},
});

export const { getTodo } = todoSlice.actions; // dispatch(getTodo({ ... action }))
// reducer를 통해 생성된 action exports
