const menu = [
  {
    name : "상품목록",
    toggle : false
  },
  {
    name : "회원목록",
    toggle : true
  },
  {
    name : "결제관리",
    toggle : false
  }
]

// every 모든것에 대한 조건식
// 콜백함수가 리턴하는 값이 모두 트루인가?
const everyresult = menus.every((menu) => menu.toggle)
// () => return 은 생략가능 menu.toggle은 트루이다
console.log(everyresult)  // false

// some
// 콜백함수가 반환하는 값이 일부 트루인가
const someresult = menus.some((menu) => menu.toggle)
console.log(someresult) // true

const menuIndex = menus.findIndex(menu => menu.toggle);
// 함수의 괄호 안에 매개변수가 1개면 괄호 생략이 가능

console.log(menuIndex) // 1
console.log(menu[menuIndex])

// reduce
// 누적값을 구하는 형태, 순회 형태가 아니라 연산속도가 빠릅니다. 반환하는 결과값이 우리가 필요한 값인가를 알아야한다. 

const NumArr = [1,2,3,4,5,6,7,8,9,10]
let reduceResult = NumArr.reduce((sum,n) => {
  return sum + n
}, 100)
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