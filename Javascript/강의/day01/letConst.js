console.log(a); // undefined
var a = 5;
console.log(a); // 5

// console.log(b); // Cannot access 'b' before initialization
let b = 5;
console.log(b); // 5
b = 6;
console.log(b); // 6

// const a = 5;
// 'a' has already been declared
// 에러 나옴

const c = 7;
// c = 8;
/* Assignment to constant variable */

/* 
문자열 내에서 변수를 사용하는 방법
문자열 = " ", ' ', ` `
 */
console.log('a의값은' + a + '입니다'); // +
console.log('a의값은', a, '입니다'); // ,

console.log(`a의값은 ${a}입니다`); // ${}, ` `(백쿼트)



a = 5;
if(a===4){
    ...
} else {
    //에러처리
    console.error(a)
}


//자바스크립트는 위에서 아래로 인식
