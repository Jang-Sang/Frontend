const arr = [];
arr[1] = "1";
arr[3] = 3;
console.log(arr.length); //4
// <empty>, "1", <empty>, 3
// 비어있는 요소는 length에 포함된다.

const arr2 = ["김성용", "종문님", "지형님"];

if (arr2.indexOf("윤기님") >= 0) {
  arr2.push("예슬님");
}
console.log(arr2); // 김성용 종문님 지형님 예슬님

/* split */
// 문자열(문자로 이루어진배열)은 유사배열로서 문자들의 배열이 되고 배열과 관련된 기능들을 사용할 수 있다
const phone = "010-1234-1234"; // ["0","1","0","-" ... ]
console.log(phone.length); // 13
// phone.replaceAll('-','') // 01012341234
phone
  .split("-") // ['010', '1234', '1234']
  // .join('') // 0101231234
  .join("-"); // 010-1234-1234

/* 내장함수 */
// push
const arr3 = [1, 2];
arr3.push(4, 5); // => [1, 2, 4, 5]

// concat
// 특정 배열에 인자로 들어온 배열을 합칠 때 사용한다 ex) 인피니트 스크롤링
const arr4 = [1, 2];
const arr5 = [3, 4];

const result = arr4.concat(arr5); // [1,2,3,4]

//pop
const arr6 = [1, 2, 3, 4, 5];
const deleteEl = arr6.pop();
console.log(deleteEl, arr6); // 5 , [1,2,3,4]

// shift, unshift
const arr7 = [1, 2, 3, 4];
arr7.unshift(5); // 맨 앞에 요소를 추가하는 명령어
console.log(arr7); // [5, 1, 2, 3, 4]
arr7.shift(); // 맨 앞에 요소를 삭제하는 명령어
console.log(arr7); // [1, 2, 3, 4]

// slice(start, end)
// start번째 인덱스부터 시작하여 end 직전까지의 인덱스 요소만을 복사하여 반환

const apart = ["성용", "성경님", "지형님", "윤기님", "예슬님", "오수님"];
console.log(apart.slice(1, 4));
console.log(apart.slice(1)); // 끝까지
console.log(apart.slice(1, 1)); // 빈배열
console.log(apart.slice(-3));
// slice에서 마지막 index는 -1부터 표기하여 -2, -3, -4로 음수 형태로 감소하는 형식

// splice(start, deleteCount, item)
// item은 생략 가능하며 splice의 주 용도는 내가 원하는 요소를 삭제하기 위함

const deleteArr = apart.splice(1, 4, ["승용님", "호령님", "윤경님"]);
console.log("apart[1]", apart[1][1]);

console.log("apart", apart);
console.log("apart[1]", apart[1]);
console.log("apart[1][1]", apart[1][1]);

// console.log(deleteArr, apart);

const arr = [];
console.log(arr[0]); //undefined
arr[1] = 1;
arr[3] = 3;
// [<1 empty item>, 1, <1 empty item>, 3]
console.log(arr.length); //4

const newArr = ["김성용", "짱구", "마이멜로디"];

newArr.push("해피캣");
console.log;

const a = 3;
Array.isArray(a); //false

Array.isArray([]); //true
Array.isArray(new Array()); //true
Array.isArray({}); //false
Array.isArray("Array"); //false, 문자열 => 유사배열

// Array.from()
// 유사 배열 객체를 배열화
// 유사 배열 객체 -> 객체인데 키값으로 배열의 속성을 갖고 있는 것
let obj = {
  0: "a",
  1: "b",
  length: 2,
};
console.log(obj.length, obj[0], obj[1]); //유사배열객체
const arr = Array.from(obj);
console.log(arr);
// ['a', 'b']

// 유사배열객체를 이용하여 비어있는 길이 5 배열을 생성
// 비어있던 배열이 콜백함수가 반환하는 값으로 순회해서 채워짐
const newArr = Array.from({ length: 5 }, (_, index) => {
  //_, index 값이 return에 전달
  console.log(_); //undefined(비어있는 배열)
  // 0~4
  return index; // index값 수용
});

function from(obj) {
  let result = [];
  for (let i; i < obj.length; i++) {
    result.push(obj[i]);
    //undefined
  }

  if (callback) {
    result = result.map((el, i) /**return 된 index 값을 수용 */ =>
      callback(el, i)); // callback값 5번 호출
    // [callback(el,i), callback(el,i), callback(el,i), callback(el,i), callback(el,i)]
  }
  return result; // [und,und,und,und,und] 콜백함수가 없으면 und 5번 호출
}

//Array.of
//()안의 전달된 값으로 이루어진 배열 생성
//const ofArr = Array.of(0)
//[0]
const ofArr = Array.of(0, 1);
//[0,1]
const emptyArry = Array(10);
console.log(emptyArry);

const fullArr = Array(10).fill(0);
console.log(fullArr);

// Array from은 유사배열객체를 만드는 것이고 기본적으로 배열을 생성할 때는 Array를 사용하면 된다.

//mock data
//가짜 데이터 -> 백엔드 없이도 프로젝트(msw, web storage, fire-base, json-server)
const mockPosts = Array(10)
  .fill()
  .map((_, i) => ({
    // 순서는 지켜야하지만 요소가 사용중이지 않기 때문에 _로 표시
    id: i + 1,
    content: "example-${i+1}",
    title: "반갑습니다",
  }));
console.log(mockPosts);
// 간이 데이터 생성으로 프로젝트를 만들수 있다.!!!!
