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
