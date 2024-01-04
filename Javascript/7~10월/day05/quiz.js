/* 
  1~10까지의 합을 요소로 갖고 있는 배열을 만들어야함
  [1+2, 1+2+3, ..... , 1+2+3+4+5+6+...+10]
  [3, 6, 10, ... , 55]
  단, map이 아닌 reduce를 사용할 것
*/

/*
arr.push(sum)
let arr = [];
==> 배열을 반환 --> reducer --> 배열 X
[3,6,10, ... ,55]
*/
const arr = [];
const NumArr = [1,2,3,4,5,6,7,8,9,10]
NumArr.reduce((sum,n) => {     // 배열을 나열
  arr.push(sum+n)            // 배열을 반환
  // sum = 1,3
  // n = 2,3
  // 1+2,1+2+3
  return sum + n              // 결과값
})