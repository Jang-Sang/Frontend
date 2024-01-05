//이메일이랑 비밀번호 형식 확인
import { useEffect, useState } from 'react'

//왠만하면 한 if 문에 state 변경함수를 2개이상 넣지 말자...
const useValidate = (email, password) => {
	const [disabled, setDisabled] = useState(false)
	const [error, setError] = useState()

	useEffect(() => {
		if (!email || !password) {
			return setError('모든 값을 입력하지 않았습니다.')
		}

		// 이메일이 '@'를 포함하는지 확인
		if (!email.includes('@')) {
			return setError('이메일 형식을 확인해 주세요!')
		}

		// 비밀번호의 길이가 8자리 이상인지 확인
		if (password.length < 8) {
			return setError('비밀번호 길이는 8자리 이상이어야 합니다.')
		}

		// 모든 조건을 만족하면 disabled 상태를 false로 변경
		setDisabled(false)
		setError(null)
	}, [email, password])

	return [disabled, error]
}

export default useValidate

//이메일이 정규표현식에 맞는지 확인
// const isValidEmail = (email) => {
//   const regex = /^[a-zA-Z0-9+%\._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
//   // return regex.test(email);
//   console.log("asdf", regex.test(email));
//   return regex.test(email);
// };

// //비밀번호가 8글자 이상인지 확인
// const isValidPassword = (password) => {
//   return password.length >= 8;
// };

//disable와 message만 반환시키면된다.

// const useValidate = (email, password) => {
//   const [disabled, setDisabled] = useState(false);
//   const [error, setError] = useState();

//   useEffect(() => {
//     if (!email || !password) {
//       return setError("모든 값을 입력하시지 않았습니다.");
//     }

//     //이메일이 정규표현식에 맞는지 확인
//     // const regex = /^[a-zA-Z0-9+%\._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
//     if (!email.includes("@")) {
//       return setError("이메일 형식을 확인해 주세요!");
//     }

//     if (password.length < 8) {
//       return setError("비밀번호 길이는 8글자 이상이여야 합니다 ");
//     }

//     if (!email || !password || !email.includes("@") || password.length < 8) {
//       return setDisabled(true);
//     }
//   }, [email, password]);

//   return [disabled, error];
// };

// export default useValidate;

//boolean 값만 리턴함

//error에 해당 error을 보여줌

// const a = (email, password) => {
//   const [disabled, setDisabled] = useState();
//   const [errors, setErrors] = useState();

//강사님 예시 코드
// useEffect(() => {
//   if (!email || !password) return setDisabled(true);
//   setErrors("모든값을 입력하지 않으셧습니다.");
//   if (password.includes("@") && password.length > 8) {
//     setDisabled(false);
//     setErrorss("비밀번호를 올바르게 입력하시지 않았습니다");
//   } else {
//     setDisabled(true);
//   }
// }, [email, password]);
// return { disabled, errors };
