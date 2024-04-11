Number
Number.MAX_VALUE // 자바스크립트 내에서 사용할 수 있는 가장 큰 수
Number.MIN_VALUE // 가장 작은 수
Number.isFinit() // 유한수인지
Number.toString() // 숫자를 문자열로 바꾸어줌

Math

- Math.min(1,2,3) // 최솟값
- Math.max(1,2,3) // 최댓값
- Math.random() // 0~1 사이의 무작위 숫자 반환(소수형)
- Math.round() // 소수점 첫번째 자리에서 반올림
- Math.floor() // 소수점 이하 버림
- Math.ceil() // 소수점 이하 올림
- Meth.abs() // 절대값
  Math.sqrt() // 제곱근
  Math.cbrt() // 세제곱근
  Math.log() // 자연로그
  ..
  Math.pow, Math.log2(), Math.PI ...

String
String.length() // 문자열 길이
String.charAt(indx) // 해당 인덱스 문자 누구인지
concat("문자열") // 합치는 것
indexOf("문자") // 현재 문자의 인덱스 위치
replace(문자, 대체할 문자) // 대체

ex) "Hello".replace("e", "o") // Hollo
.replace(정규표헌식, 대체할 문자)
.toLowerCase() // 소문자
.toUpperCase() // 대문자
.split() // 나누는 것
.repeat(n) // n번 만큼 문자열 반복
ex) \*.repeat(4) // \*\*\*\*

Date
new Date()
// 현재 날짜와 시간을 가지고 오는 인스턴스
// \* 로컬 환경 컴퓨터 시간
// 로컬 환경이아닌 서버 환경으로 가지고 올 수 있는 라이브러리 momentJs, dayJs, luxon
// unix 1970.01.01 --> 얼마나 지났는지 계산하는 방법 (초 단위)
const date = new Date()
console.log(date) // Thu May 16 2022 17:16:13 ... (한국 표준시)

string
const str = "hello";

console.log(str.charAt(4)); // o
console.log(str.concat(" seongyong")); // hello seongyong
console.log(str.indexOf("e")); // 1
console.log(str.split("e")); // ["h", 'llo']

math
console.log(Math.max(1, 2, 3)); // 3
console.log(Math.min(1, 2, 3)); // 1

const a = [1, 2, 3, 4, 5];
Math.max(a); // 5? ==> NaN
Math.max(...a); //5

Math.round(4.5); // 반올림 5
Math.floor(4.5); // 버림 4
Math.ceil(4.5); // 올림 5

console.log(Math.sqrt(4)); // 2

console.log(Math.random()); // 0 ~0.9999999
console.log(Math.random() _ 45); //0~43.999999
console.log(Math.random() _ 45 + 1); //1 ~ 45.999999

console.log(Math.floor(Math.random() \* 45 + 1)); // 1 45 정수

```jsx
const str = "Hello";

// String prototype에 없는 함수 생성
String.prototype.print = function () {
  console.log("문자열입니다");
};
// 프로토 타입에 함수를 정의하면 모든 String 타입에 해당 메서드를 사용가능

str.print();
console.log(str.charAt(4)); // o - 5번째 스펠링
console.log(str.concat("마이멜로디")); // Hello 마이멜로디
console.log(str.indexOf("e")); // 1 - e가 몇번째 인지 검색
console.log(str.split("e")); // [H, llo]

const date = new Date();
console.log(date);

const date2 = new Date(2022, 8);
console.log(date2);

const year = date.getFullYear(); //2023
const month = date.getMonth(); //6
const ill = date.getDate(); //25
const day = date.getDay(); // 요일(6) 일요일(0) 토요일(6)

console.log(year, month, ill, day);

// 날짜끼리 연산이 가능
date.setFullYear(year - 1); // 2022
date.setMonth(month - 1); //4

console.log(date); // 2022-05월

// 문자열로 변환이 가능
date.toString(); //문자열
date.toDateString(); // 시분초 생략
date.toLocaleString(); // 현재 지역에 맞는 시간으로 변환
date.toLocaleDateString(); // 현재 지역에 맞는 날짜

console.log(date.toLocaleString()); // 새벽 6시 -> 오후3시
console.log(date.toLocaleDateString());
```

```jsx
const $idDom = document.querySelector("#id");
const $classDom = document.querySelectorAll(".class");

console.log($idDom, $classDom);

/*
getElementsByClassName (live, 유사배열객체)
-> HTMLCollection
-> 유사배열객체
-> live DOM 객체
-> forEach 사용불가능

querySelectorAll(forEach, none-live, 유사배열객체)
-> NodeList
-> 유사배열객체
-> none-live DOM 객체
-> forEach 사용 가능하지만 배열은 아니므로 다른 메서드는 사용 불가 / 속성만 물려받음

따라서 HTMLCollection 과 NodeList 모두 배열로 변환 후 사용하는 것을 지향

"live" vs "non-live"
*/

// const $redList = document.getElementsByClassName('red');
const $redList = document.querySelectorAll("red");
console.log($redList);

for (let i = 0; i < $redList.length; i++) {
  $redList[i].className = "blue";
}
```
