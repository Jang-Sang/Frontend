
let num = 3;  /** -3 넣을시 */
let answer; // undefined

if(num > 0) {
  answer = '양수'
} else {
  answer = '음수'
}

console.log(answer) // 양수 -> 음수


if (num === 0){   //분기점 1 
  answer = '0'
} else if(num > 0){  //분기점 2
  answer = '양수'
} else {            //분기점 3 위의 조건 두가지중 아닌 모든 것을 else로 처리
  answer = '음수'   // 그외, 그밖에, 기타등등 여러가지로 해석해도 된다.
}
console.log(answer) // 0

// 만약에, 아니면, 분기점을 나눠 다양한 결과로 처리, 예외 처리
// 하나의 num으로 3개의 분기점을 처리 
// if 자체를 외우기보단 왜 쓰는지 알고 있을 것