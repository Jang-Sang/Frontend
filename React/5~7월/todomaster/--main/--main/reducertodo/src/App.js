import './App.css'
import router from './routes/routing'
import { RouterProvider } from 'react-router-dom'
//themeProvider는 styled component의 기능중하나임
import { ThemeProvider } from 'styled-components'
import TodoProvider from './context/todo'
//default값을 주면 default를 가//redux 사용부분 => 이 mode를 바꿀수 있는 함수는 compoentn 파일에
//ModeButton임.져오고, default를 안주면
//export한 객체를 다음과 같이 {}로 가져올 수 있다.
//theme은 디폴트로 가져온 값, {PALLTE}는 그냥 export한 객체 중
//PALLET만 구조분해 할당으로 가져온것

//{}는 theme안에 있는 {PALLETE}a만 가져오는 문법
import theme from './styles/theme'
import GlobalStyles from './styles/common'
//router이름은 변수명이기에 어떻게 바꿔도 상관없음(보통은 똑같이 쓰는 듯)
//기본값으로 default 값으로 export한 게 변수명에 들어감

//createBrowserRouter를 사용하여 만든 routing파일의 router를
//App.js에서 받아온뒤에 RouterProvider컴포넌트를 활용하여 하위 컴포넌트에
//라우터 구성 정보를 전달함. 이런 식으로 사용하여, 라우터 구성을 App.js에서
//중앙 집중화하고 코드의 가독성과 유지 보수성을 향상시킬 수 있다.

function App() {
	return (
		//모든 style component에 전달할 수 있다.
		//css 객체를 전달해주는 ThemeProvider
		//theme프로퍼티는 테마 객체를 가리킨다.
		<ThemeProvider theme={theme}>
			<TodoProvider>
				<GlobalStyles />
				<RouterProvider router={router} />
				{/*router키 왼쪽값은 라이브러리에서 정한 거라서 바꿀 수 없음
      RouterProvider는 router를 노출시켜 다른 컴포넌트에서 router를
      사용할 수 있게함. 오른쪽의 router는 자식 컴포넌트에게 라우터를 전달한것*/}

				{/*html5를 지원하는 브라우저의 url변화를 감지함*/}
				{/* <BrowserRouter> */}
				{/*하위에 있는 route 컴포넌트 중 url과 path가 일치하는 컴포넌트만 보여주는 역할
        주소변화를 감지해서 path와 일치하는 element만 보여줘!*/}
				{/* <Routes> */}
				{/*path를 안적으면 모두 적어준다
          밑 구 라우터중에서 맞는것에 outlet을 담아준다.
          */}
				{/* <Route element={Layout}>
            <Route path="/" element={<MainPage />} />
            <Route path="/todo" element={<TodoPage />} />
          </Route>
        </Routes> */}
				{/* </BrowserRouter> */}
			</TodoProvider>
		</ThemeProvider>
	)
}

export default App

//control + c 나가기
