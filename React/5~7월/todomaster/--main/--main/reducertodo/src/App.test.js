import { render, screen } from '@testing-library/react'
import App from './App'

test('renders learn react link', () => {
	render(<App />)
	//렌더링이 잘 되는지 판단하는 명령어
	//정규표현식 해당 header가 있는지 확인하는 명령어
	const linkElement = screen.getByText(/HEADER/i)
	expect(linkElement).toBeInTheDocument()
})
