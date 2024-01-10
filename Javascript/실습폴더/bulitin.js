const str = 'Hello';

// String prototype에 없는 함수 생성
String.prototype.print = function(){
  console.log("문자열입니다")
}
// 프로토 타입에 함수를 정의하면 모든 String 타입에 해당 메서드를 사용가능

str.print()
console.log(str.charAt(4)) // o - 5번째 스펠링
console.log(str.concat("마이멜로디")) // Hello 마이멜로디
console.log(str.indexOf("e")) // 1 - e가 몇번째 인지 검색
console.log(str.split("e")) // [H, llo]

const date = new Date();
console.log(date)

const date2 = new Date(2022, 8)
console.log(date2)

const year = date.getFullYear(); //2023
const month = date.getMonth() //6
const ill = date.getDate(); //25
const day = date.getDay() // 요일(6) 일요일(0) 토요일(6)

console.log(year, month, ill, day)

// 날짜끼리 연산이 가능
date.setFullYear(year-1) // 2022
date.setMonth(month-1) //4

console.log(date) // 2022-05월

// 문자열로 변환이 가능
date.toString() //문자열
date.toDateString() // 시분초 생략
date.toLocaleString() // 현재 지역에 맞는 시간으로 변환
date.toLocaleDateString() // 현재 지역에 맞는 날짜

console.log(date.toLocaleString()); // 새벽 6시 -> 오후3시
console.log(date.toLocaleDateString());
