import { useEffect, useState } from 'react'
import BasicButton from '../../../components/Button/button'
import * as S from '../style'
import useInputs from '../../../hooks/use-Inputs'
import useValidate from '../../../hooks/useValidate'
import { PALETTE } from '../../../styles/theme'

const SignUpForm2 = ({ setIsFormLogin }) => {
	const [{ email, password, passwordConfirm }, onChangeForm] = useInputs({
		email: '',
		password: '',
		passwordConfirm: '',
	})

	const [isPasswordConfirm, setIsPasswordConfirm] = useState(false)
	const [disabled, error] = useValidate(email, password)

	useEffect(() => {
		console.log(password, passwordConfirm)
		if (password !== passwordConfirm) {
			return setIsPasswordConfirm(false) //일치하지 않았을 때 실행문
		}
		return setIsPasswordConfirm(true) //일치했을때 실행문
	}, [password, passwordConfirm])

	const handleSignUpSubmit = e => {
		//예외처리
		//disabled 조건 추가해야 함
		e.preventDefault()
		if (!isPasswordConfirm) return
		if (disabled) return
		alert('축하합니다. 회원가입이 완료되었습니다!')
		setIsFormLogin(true)
		console.log(email, password, isPasswordConfirm, disabled)
	}

	return (
		<>
			<S.Form onSubmit={handleSignUpSubmit}>
				<S.InputBox>
					<label>이메일</label>
					<input onChange={onChangeForm} name="email" />
				</S.InputBox>
				<S.InputBox>
					<label>비밀번호</label>
					<input onChange={onChangeForm} name="password" />
				</S.InputBox>
				<S.InputBox>
					<label>비밀번호확인</label>
					<input onChange={onChangeForm} name="passwordConfirm" />
				</S.InputBox>
				{error && <div style={{ color: PALETTE.error }}>{error}</div>}
				{!isPasswordConfirm && (
					<div style={{ color: PALETTE.error }}>
						비밀번호와 확인이 일치하지 않습니다.
					</div>
				)}
				<BasicButton
					children={'회원가입'}
					size={'full'}
					shape={'default'}
					variant={'primary'}
				></BasicButton>
			</S.Form>
		</>
	)
}

export default SignUpForm2
//passwordConfirm을 따로 커스텀 훅으로 뺴는것도 좋은 방법이다.

//인증관련 훅함수를 만든다. passwordConfirm을 제외한 함수를 넣는다.
//passwordConfirm은 signupForm에서 만든다.
//커스텀 훅은 공통적인 로직을 만든다.
// const { disabled, errors } = useAuthValidation(password, email, () => {});
//콜백함수를 넣어 실행시킬 수 있다.

//   errors : {
//       email : {message : '이메일 양식을 지켜주세요'}
//       password : {message : '비밀번호 양식을 지켜주세요'}
//     }
