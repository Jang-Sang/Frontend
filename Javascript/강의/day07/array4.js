/* 빌트인 객체 */
/* 내장 객체
네이티브 객체 -> Object, Number, Array 객체 생성과 관련된 함수 객체와 메소드로 구성되어있다
호스트 객체 -> window, location, history, document (전역 객체)
// 만들때 사용하는 틀이라고 생각하면 된다.

==> prototype의 예시
    // Array = 이미 내장객체 , prototype = 메서드(편의기능) , division = 내가 만든 메서드
    Array.prototype.division = function(){
        ...
    }
    const arr = [1,2,3,4,5] 
    arr.divsition()
    
면접때 많이 물어보는 것

---> 자바스크립트에서 정의하지 않아도 편의성을 위하여 자체적으로 만들어둔 내장 기능
---> 도움을 주기 위해 만든 편리한 객체
ex) console.log()
*/

/* 배열의 생성 */
// Array.from **유사 배열 객체를 배열로 바꾸어주겠다 - 매우 중요
// 자바스크립트에서 배열은 가짜다. 그저 객체일 뿐이다.
// 유사 배열 객체 : 객체이지만(Obejct) 배열과 관련된 속성값을 가지고 있는 객체
// 실제에서는 생각보다 많이 쓰이지는 않는다. - 애초에 객체를 배열로 바꿀일이 별로 없을 뿐더러, 필요하다 하더라도 백엔드에서 데이터를 받아올 때 배열로 받아오면 된다.
let obj = {
  0: "1",
  1: "2",
  length: 2,
};
obj.length;
obj[0];

const arr = Array.from(obj);

// 콜백함수가 return하는 값을 요소로 삼는 배열 생성
const newArr = Array.from({ length: 5 }, (el, index, originArr) => {
  return index;
});
console.log(newArr);

// Array.of
// () 인자로 들어온 값을 요소로 삼는 배열 생성
const ofArr = Array.of(1, 2, 3); // [1,2,3]\

// Array.fill
// fill (value, start ,end)
// end 인덱스 직전가지의 값을 채움
const fillArr = Array(10).fill(0, 0, 9);
console.log(fillArr);

const fillArr2 = Array(10)
  .fill()
  .map((el, index) => {
    return index;
  });
console.log(fillArr2);
// 0 ~ 9

/* 배열 검사 */
Array.isArray([]); // true
Array.isArray(new Array()); // true
Array.isArray({}); // false
Array.isArray({ length: 2 }); // false
Array.isArray("Array"); // false
// Array.isArray() : 배열인지 아닌지 검사하는 메서드
// string은 유사배열 객체이기 때문에 false가 나온다.
