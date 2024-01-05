import styled from 'styled-components'
import { flexAlignCenter, flexCenter } from '../../../styles/global'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faBan, faPen } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import useInput from '../../../hooks/use-input'

//전역상태관리를 통해 OneTodo가 TodoList에 갖는 props의존성을 줄일 수있다.
const OneTodo = ({
	todo,
	handleUpdateTodo,
	handleDeleteTodo,
	handleCheckTodo,
}) => {
	//props가 여러개일때 아래에 구조분해할당을 하는 것이 가독성이 좋다.
	//이런식으로 객체 안엥 있는 변수를 꺼내준다
	//typescript를 쓰면 해당 객체에 있는 data를 다 보여줄 수 잇다.

	//* @TODO : 리팩토링이 필요한 객체를 적어놓는다. 이 데이터는 확장성이 너무 없기 떄문에....
	const { id, state, title, content } = todo
	//boolean 값은 is , is가 없으면 값
	const [isEditMode, setIsEditMode] = useState(false)
	const [editContent, setEditContent] = useInput(content)

	const handleSetIsEditMode = () => {
		if (!isEditMode) return setIsEditMode(true)
		handleUpdateTodo(id, editContent)
		setIsEditMode(false)
	}

	return (
		<>
			{/*state가 아니라 todo.state로 해도 된다.*/}
			<S.Wrapper state={state}>
				<S.Header>
					<S.StateBox state={state}>
						<FontAwesomeIcon
							icon={faCheck}
							onClick={() => handleCheckTodo(id)}
						/>
					</S.StateBox>
					<S.Title state={state}>
						{title}
						<div>
							<FontAwesomeIcon
								icon={faPen}
								onClick={handleSetIsEditMode}
								onChange={setEditContent}
							/>
							<FontAwesomeIcon
								icon={faBan}
								onClick={() => handleDeleteTodo(id)}
							/>
						</div>
					</S.Title>
				</S.Header>
				<S.Content state={state}>
					{isEditMode ? (
						<textarea onChange={setEditContent} value={editContent}></textarea>
					) : (
						content
					)}
				</S.Content>
			</S.Wrapper>
		</>
	)
}

export default OneTodo

const Wrapper = styled.li`
	width: 100%;
	background-color: ${({ theme }) => theme.PALETTE.white};
	border: 1px solid #999;
	margin: 16px 0;
	list-style: none;
	border-radius: 8px;
	background-color: ${({ state, theme }) =>
		state ? theme.PALETTE.gray[100] : theme.PALETTE.white};
`

const Header = styled.div`
	border-bottom: 1px dotted #999;
	${flexAlignCenter};
	padding: 8px 16px;
	height: 48px;
`

const Title = styled.h1`
	width: 100%;
	display: flex;
	justify-content: space-between;
	font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
	text-decoration: ${({ state }) => (state ? 'line-through' : 'none')};
	& svg {
		cursor: pointer;
		margin-left: 16px;
		:hover {
			transform: scale(1.2);
		}
	}
`

const StateBox = styled.div`
	width: 20px;
	height: 20px;
	border-radius: 50%;
	margin-right: 8px;
	${flexCenter};
	color: ${({ state }) => (state ? '#3CB371' : '#999')};
	cursor: pointer;
	:hover {
		transform: scale(1.2);
	}
`

const Content = styled.div`
	padding: 16px;
	text-decoration: ${({ state }) => (state ? 'line-through' : 'none')};
	& textarea {
		width: 100%;
		height: 100%;
		border: 1px dotted #999;
		outline: none;
		resize: none;
	}
`

const S = {
	Wrapper,
	Header,
	StateBox,
	Title,
	Content,
}
