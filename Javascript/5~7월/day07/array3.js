let sangjun = {
  name: "장상준",
  age: 20,
  height: 190,
};
/*
일반 객체는 이터러블한(순회 가능한) 객체일까요?

일반 객체는 순회 가능한 객체가 아닙니다.

순회가능함을 판단하는 것을 이터레이터라는 속성 값이
객체에 존재해야만 순회가능합니다.

따라서 일반 객체는 이터레이터가 존재하지 않기 때문에 for of와 for Each그리고 for문은 사용이 불가능

이터러블하지 않은 객체를 반복하기 위해
자바스크립트가 for문을 하나 만들어냅니다. (for in)
*/

for (const key in sangjun) {
  console.log(sangjun[key]);
}
//Object.keys()를 사용하면 객체의 키를 배열로 반환
// 키를 반복문 돌리면 위의 값을 가져올 수 있다.

// 순회 가능한 객체에서 사용할 수 있는 반복문
// 순회 가능한 객체 (Array, Map, set, NodeList ...)

const arr = [1, 2, 3, 4, 5];

// 셋의 구별을 잘 암기하고 이해할 것
// 반드시 모든 요소를 순회해야하며, *index가 필요할 때
arr.forEach((el, index, onrginArr) => {
  console.log(el);
});
// for each만으로 대부분 해결가능 다른 언어에도 있기에 범용성이 좋다.

// for of
// 반드시 모든 요소를 순회 해야하며, 요소의 값에만 접근 가능
for (const el of arr) {
  console.log(el);
}
// 자바스크립트에만 있는 문법

//for
// 조건식,증감식 -- 내 마음대로 설정할 수 있다.
for (let i = 0; i < Math.floor(arr.length / 2); i++) {}
