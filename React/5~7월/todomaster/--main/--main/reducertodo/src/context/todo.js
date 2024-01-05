// context : 전역 상태 관리 도구, 다른 라이브러리의 의존도가 생기지 않음(리액트에 내장되어 있음
//1. props drilling, 현재 해당 컴포넌트에는 필요하지 않음에도 자식 컴포넌트에게 props를 전달하기 위하여
//2. 부모가 몰라도 되는 상태를 굳이 알아야 하는가?
//=> 전역상태가 꼭 필요한지에 대해 생각해보자. 잘 쓰면 코드량을 줄일 수 있다. 리팩토링때 활용해보자

//순서
//1. 냉장고 만들기
import { createContext, useReducer, useContext } from 'react'
export const TodoContext = createContext()

//2. 기본값 만들기
const initialTodo = [
	{ id: 1, title: 'example1', content: 'content1', state: false },
	{ id: 2, title: 'example2', content: 'content2', state: false },
	{ id: 3, title: 'example3', content: 'content3', state: false },
]

//3. provider => 왜 사용한느 영역을 감싸주기 위해서
//4. 전역으로 사용할 state 생성 ==> useState, useReducer
//전역으로 사용하고 싶으면 app.js
//왠만하면 index.js에 사용은 x

//5. reducer함수 생성하기
//6. value로 전달하고 싶은 값을 w전달
//7. 주의사항 : 보내야할 데이터가 여러개라면 가져올수 있게 객체로 전달함.
// const [todoList, dispatch] = useReducer()
//const [상태명, dispatch] = useReducer(reducer함수, 기본값)
const todoReducer = (state, action) => {
	switch (action.type) {
		case 'ADD':
			const { title, content } = action.payload
			const newTodo = {
				id: Math.floor(Math.random() * 1000),
				title,
				content,
				state: false,
			}
			return [...state, newTodo]

		case 'DELETE':
			const { deleteId } = action.payload
			const FilterList = state.filter(todo => todo.id !== deleteId)
			return [...FilterList]

		case 'UPDATE':
			const { updateId, updateContent } = action.payload
			const newState = [...state]
			const targetTodo = newState.find(todo => todo.id === updateId)
			targetTodo.content = updateContent
			return newState
		case 'CHECKED':
			console.log('asdfa')
			const { checkid } = action.payload
			const newTodoState = [...state]
			const target = newTodoState.find(todo => todo.id === checkid)
			if (target.state) {
				target.state = false
			} else {
				target.state = true
			}
			return [...newTodoState]

		default:
			return state
	}
}

const TodoProvider = ({ children }) => {
	const [todoList, dispatch] = useReducer(todoReducer, initialTodo)
	return (
		//구조분해할당 특성
		//배열을 value로 전달하므로 인덱스만(순서) 맞추면 된다.
		//객체를 value로 전달하므로 키값만 맞추면 된다.
		//만약에 일부의 value만 사용한다면 배열보다는 객체가 낫다?
		<TodoContext.Provider value={[todoList, dispatch]}>
			{children}
		</TodoContext.Provider>
	)
}

export default TodoProvider
//9. app.js에 감싸주면 끝
//10. 어디서든 참조할 수 있도록 useContext를 해당 파일에 만들어서 export

//reducer를 사용하는 이유
//: reducer함수를 통해 업데이트 로직을 외부 파일로 분리하여 해당 로직을 재사용함.

export const useTodoContext = () => useContext(TodoContext)
