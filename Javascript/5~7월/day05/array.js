const arr = []
arr[1] = "1";
arr[3] = 3;
console.log(arr.length); //4
// <empty>, "1", <empty>, 3
// 비어있는 요소는 length에 포함된다.


const arr2 = ['김성용', '종문님', '지형님']


if(arr2.indexOf('윤기님') >= 0){
    arr2.push("예슬님")
}
console.log(arr2) // 김성용 종문님 지형님 예슬님


/* split */
// 문자열(문자로 이루어진배열)은 유사배열로서 문자들의 배열이 되고 배열과 관련된 기능들을 사용할 수 있다
const phone = '010-1234-1234' // ["0","1","0","-" ... ]
console.log(phone.length) // 13
// phone.replaceAll('-','') // 01012341234
phone.split('-') // ['010', '1234', '1234']
// .join('') // 0101231234
.join('-') // 010-1234-1234

/* 내장함수 */
// push
const arr3 = [1,2];
arr3.push(4,5) // => [1, 2, 4, 5]

// concat
// 특정 배열에 인자로 들어온 배열을 합칠 때 사용한다 ex) 인피니트 스크롤링
const arr4 = [1,2];
const arr5 = [3,4];

const result = arr4.concat(arr5)  // [1,2,3,4]


//pop
const arr6 = [1,2,3,4,5]
const deleteEl = arr6.pop()
console.log(deleteEl, arr6) // 5 , [1,2,3,4]

// shift, unshift
const arr7 = [1,2,3,4]
arr7.unshift(5) // 맨 앞에 요소를 추가하는 명령어
console.log(arr7) // [5, 1, 2, 3, 4]
arr7.shift()  // 맨 앞에 요소를 삭제하는 명령어
console.log(arr7) // [1, 2, 3, 4]


// slice(start, end)
// start번째 인덱스부터 시작하여 end 직전까지의 인덱스 요소만을 복사하여 반환

const apart = ['성용', '성경님', '지형님', '윤기님', '예슬님', '오수님']
console.log(apart.slice(1, 4))
console.log(apart.slice(1)) // 끝까지
console.log(apart.slice(1, 1)) // 빈배열
console.log(apart.slice(-3))
// slice에서 마지막 index는 -1부터 표기하여 -2, -3, -4로 음수 형태로 감소하는 형식

// splice(start, deleteCount, item)
// item은 생략 가능하며 splice의 주 용도는 내가 원하는 요소를 삭제하기 위함

const deleteArr = apart.splice(1, 4, ["승용님", "호령님", "윤경님"])
console.log("apart[1]", apart[1][1])

console.log("apart", apart)
console.log("apart[1]", apart[1])
console.log("apart[1][1]", apart[1][1])

// console.log(deleteArr, apart);

























