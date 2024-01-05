/*
비구조화 할당 ( == 구조분해 )
객체나 배열을 해체하여 각각의 요소를 개별 변수에 닿을 수 있도록 분해하는 행위
-> 객체나 배열의 요소를 따로 사용
*/

const sangjun = {
  age: 27,
  height: 178,
  name: "장상준",
};

// const height = sangjun.height //178
// const age = sangjun.age //27
// const name = sangjun.name // 장상준
// 이렇게 가져온다면 각각을 변수로 선언해야되서 3번의 선언이 필요하다

const { age, height, name } = sangjun;
console.log(age, height, name); //20, 190, 장상준
// 주의 구조분해 할당으로 가져오는 값은 키값가 일치해야하며, 변수명 수정 시에는 : 을 통해 수정
// 변수명을 최대한 간결하게 하기위해서 하는 것
// 객체는 키값 배열은 순서 만 기억하면 된다.

const user = ["김사과", "오렌지", "멜로디"];
const [kim, or, mel] = user;
// 주의 배열의 구조분해는 인덱스 순서가 일치해야하며 변수명은 내 마음대로 할 수 있다.

const dog = {
  name: "곰이",
  age: 9,
};

const defineObject = ({ name, age }) => {
  console.log(name, age);
};
// 여기 그냥 e나 object가 들어가면 나중에 개발하다보면 많은 줄 사이에서 헷갈릴 수 있다.
// 그러므로 간단한 name과 age이기에 바로 선언한다.
// 매개변수에 들어오는 객체에 어떠한 속성이 있는지 알 수 없음(자동완성불가)
// 그러나, 매개변수에 구조분해하여 키 값을 나타내면 유지보수하는데 용이

defineObject(dog);
