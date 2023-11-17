import './App.css'
import { worker } from './__mock__/browser'
import { Provider } from 'react-redux'
import { store } from './store/store'
import Todo from './components/todo'

function App() {
	if (process.env.NODE_ENV === 'development') {
		worker.start()
		/* 
      msw? -> 실제 db(x), 내가 만든 가상의 데이터, 개발 환경에서 개발 편의성
      production -> 실제 db와 소통하는 백엔드와 소통
    */
	}

	// useEffect(() => {
	// 	fetch('/api/todo')
	// 		.then(res => res.json())
	// 		.then(result => console.log(result))
	// }, [])

	return (
		<Provider store={store}>
			<Todo />
		</Provider>
	)
}

export default App
