const users = [
  {
    id: 1,
    name: "김예슬님",
  },
  {
    id: 2,
    name: "이지형님",
  },
  {
    id: 3,
    name: "홍윤기님",
  },
];

// 기존 배열을 조작한 후 새로운 배열을 반환
// map 함수의 파라미터는 반드시 순서를 지켜야합니다 (요소, 인덱스, 원본배열)
// map 함수는 새로운 배열을 반환하기 때문에 변수에 담아줘야 합니다.
// map 함수가 어려우면 안에 어떤 내용이 담겨있는지 확인하면 도움이 많이된다.

// return을 생략하기 위해서는 {}문과 return 을 생략하면 됩니다.
// 그러나 객체의 경우 {}문을 생략할 수가 없음
// ({}), 괄호로 감싸면 return 생략 가능

// 보통은 return 생략을 많이 사용하지만 추가적인 js 로직이 필요로 할때는 return을 생략하지 않는다
const newUsers = users.map((user, index) => ({
  id: user.id,
  name: user.name,
  // ...user,
  nick: `성용이와 아이들${index + 1}`,
}));

// 내가 원하느지 않는 데이터를 제외한 새로운 배열을 반환
const filterUsers = users.filter((user) => user.id !== 3);
console.log(filterUsers);

const findUser = users.find((user) => user.id === 1);
console.log(findUser);
/* 
{
    id: 1,
    name : "김예슬님"
}
*/
// findUser 안에 내용을 통째로 가져온다.

const userIndex = users.findIndex((user) => user.id === 4);
/* 
0
-1
*/

//reduce
const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 누적값, 현재요소, 인덱스, 원본배열
let result = numArr.reduce((sum, n, index, oiginArr) => {
  return sum + n;
});

// reduce의 끝에는 기본값을 부여할 수 있는데
// 현재 코드에서는 기본 값을 5를 부여했다 만약 기본값을 5를 부여했을 때 처음 n의 값은 5가된다.
// 그 이후부터는 배열의 요소를 그대로 가지고 온다
// 그러나 만약에 기본 값이 없다면 배열의 첫 요소를 n으로 부여한다
// 이니셜 벨류는 부가적인 값에 불과하다.
// 누적값에 집중해야한다.

const products = [
  {
    id: 1,
    produceName: "컴퓨터",
    status: 0,
  },
  {
    id: 1,
    produceName: "노트북",
    status: 1,
  },
  {
    id: 1,
    produceName: "자동차",
    status: 0,
  },
];

//every
const everyResult = products.every((product) => product.status === 0); // false

//some
const someResult = products.some((product) => product.status === 0); // true

// 고차함수는 개발자가 편해지기 위해서 만든것
// 두려워하지말자
//console 찍는 버릇 들이기

const menu = [
  {
    name: "상품목록",
    toggle: false,
  },
  {
    name: "회원목록",
    toggle: true,
  },
  {
    name: "결제관리",
    toggle: false,
  },
];

// every 모든것에 대한 조건식
// 콜백함수가 리턴하는 값이 모두 트루인가?
const everyresult = menus.every((menu) => menu.toggle);
// () => return 은 생략가능 menu.toggle은 트루이다
console.log(everyresult); // false

// some
// 콜백함수가 반환하는 값이 일부 트루인가
const someresult = menus.some((menu) => menu.toggle);
console.log(someresult); // true

const menuIndex = menus.findIndex((menu) => menu.toggle);
// 함수의 괄호 안에 매개변수가 1개면 괄호 생략이 가능

console.log(menuIndex); // 1
console.log(menu[menuIndex]);

// reduce
// 누적값을 구하는 형태, 순회 형태가 아니라 연산속도가 빠릅니다. 반환하는 결과값이 우리가 필요한 값인가를 알아야한다.

const NumArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let reduceResult = NumArr.reduce((sum, n) => {
  return sum + n;
}, 100);
// 10~1까지 더하는 것 => 55
// 기본값을 지정하지 않았을 때 sum의 값은 첫번째 요소, 다음 요소 (n)
// 1 + 2
// 기본값을 지정하면 sum은 기본값이 되고 다음 요소 (n)
// 100 + 1

/*
문제1 (다른 사람이 주는게, 내가 나한테 줘야죠)
=> 결과값
=> 결과값을 구하기 위해 필요한 값 => 형태
=> 형태 구하려면 올바른 알고리즘, 자료구조 사용
=> 

*/
