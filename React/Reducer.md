- useContext

- 전역 상태 관리를 위한 훅함수
- 보통은 전역 상태이기 때문에 업데이트 로직을 재사용할 수 있는 reducer와 함께 쓰임
- 프론트 엔드의 DI에 응용 가능

추상체

```jsx
const ValidationService = {
emailValidation : (email) => {
return vaildation(email)
},
password,
phone...
}

구현체
const vaildation = () => {
...유효성 검사
}

validationService
```
