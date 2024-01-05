import { createBrowserRouter } from 'react-router-dom'
import TodoPage from '../pages/todo'
import MainPage from '../pages/main'
import Layout from '../components/Layout'
import React from 'react'
//중괄호 즉 객체로 import를 할때는 default값이 아닌 그냥 export한 값을 가져온다.
//객체의 경우 키 값으로 구조분해할당을 한다. 따라서 이때는 이름을 바꿀 수 없다.
//export const router =
//예를 들어 export할 파일이 여러개일때 {}를 쓰고, 이때는 {}로 import하기 때문에
//이름이 동일해야 한다.
//default는 내보낼 파일이 하나일때만 쓴다.

//createBrowerRouter에 []안에 {}로 여러개의
//페이지를 지정할 수 있다.
//이를 변수 router에 할당하여 내보낸다.
//createBrowserRouter는 BrowerRouter의 팩토리 함수. 커스텀
//브라우저용 라우터를 생성할 때 사용함.

//라우트 구성 객체 배열을 생성하는 코드. 라우트 구성 객체는 'path'와 'element'를
//가지고 있다.
///이렇게 배열로 쓰면 배열을 나누어도 상관이 없다.

const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <MainPage />,
			},
			{ path: '/todo/:todoId', element: <TodoPage /> },
		],
	},
])

//기본값으로 이 router를 export 하도록 설정함
//default를 적지않으면 해당 파일 전부를 export할수도 있다.
export default router
