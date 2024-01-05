import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
	todos: [],
	getTodoState: {
		loading: false,
		done: false,
		error: null,
	},
}

export const todoSlice = createSlice({
	name: 'todo',
	initialState,
	// reducers: {
	// 	// 함수형으로 표현 가능하여 기존의 redux보다 가독성 좋은 로직을 구현
	// 	getTodo(state, action) {
	// 		console.log(action)
	// 		// msw를 통해 가상 백엔드에서 불러와서 state로 return
	// 		return state
	// 	},
	// },
	// reducer 사용X
	extraReducers: builder => {
		builder.addCase(getTodo.pending, state => {
			state.getTodoState.loading = true
			// 초기화
			state.getTodoState.done = false
			state.getTodoState.error = null
		})
		builder.addCase(getTodo.fulfilled, (state, action) => {
			state.getTodoState.done = true
			state.getTodoState.loading = false
			state.todos = action.payload
			// fulfilled는 성공사례
			// pending,fulfilled는 고정
			// 단순히 pending,fulfilled가 고정되었다가 아니라 상태와 값을 가지고 있기때문에 고정되어있다는 것을 알고있을것
			// rtk는 자동으로 불변성을 지켜주기 때	에 ...과 같은 객체의 복사를 신경쓰지 않아도 됩니다
			// api를 통해 불러온 todos(res.data) 데이터를 전역 상태인 state.todos에 set
		})
		builder.addCase(getTodo.rejected, (state, action) => {
			//...
			state.getTodoState.done = true
			state.getTodoState.loading = false
			state.getTodoState.error = action.payload
		})
	},
})

export const getTodo = createAsyncThunk('todo/get', async action => {
	const res = await fetch('/api/todo')
	return res.json()
})

export const addTodo = createAsyncThunk(
	'todo/add',
	async ({ title, content }) => {
		const res = await fetch('/api/todo', {
			method: 'POST',
			body: JSON.stringify({
				//...
				title,
				content,
			}),
		})
		console.log(res.json())
		return res.json()
	},
)

export const updateTodo = createAsyncThunk(
	'todo/update',
	async ({ id, title, content }) => {
		const res = await fetch('/api/todo?todoId=3', {
			method: 'PUT',
			body: JSON.stringify({
				//...
				// 바뀌지 않은 content라고 하더라도 보내야함
			}),
		})
		return res.json()
	},
)

export const deleteTodo = createAsyncThunk('todo/delete', async ({ id }) => {
	const res = await fetch('/api/todo/3', {
		method: 'DELETE',
	})
	return res.json()
})

// export const { getTodo } = todoSlice.actions // dispatch(getTodo({ ... action }))
// reducer를 통해 생성된 action exports

// 요구사항
// 1. 컴포넌트 만들기
// 2. update delete add thunk를 사용하여 crud 구현하기
// 3. 단, update와 delete는 내가 수정 혹은 삭제하고자 하는 id 값의 데이터를 수정 및 삭제 해야함
