# Array (배열)

자바스크립트에서 배열은 이름과 인덱스로 참조되는 (정렬된) 값의 집합
배열을 구성하는 각각의 값을 요소라고 하며, 배열의 위치를 가리키는 숫자를 인덱스라고 합니다.

// 순서가 보장된 값들의 집합
배열을 구성하는 값은 각각 배열의 요소라고 하며 배열의 위치를 가리키는 숫자를 인덱스라고 합니다.
인덱스는 고유한 값이며 데이터를 조회할 때 쓰는 키 값으로 활용

### 자바스크립트 배열의 특징

1. 배열 요소의 타입이 고정되어 있지 않습니다

```jsx
   ex) [1, "김성용", {}, true]
   arr[arr.length -1]
   arr.at(-1)
```

2. 배열의 인덱스는 연속적이지 않아도 되며, 특정 배열 요소가 비어있을 수 있습니다.

```jsx
const arr = [1, 2, 3, 4];
arr[1] = 0;
// 1,0,3,4
arr["seognyong"] = "김성용";
```

- 이게 안될거 같지만 가능하다. 단지 이걸쓰느니 다른 방법을 사용하는게 맞지만 일단은 사용가능하다는게 중요

3. 자바스크립트의 배열은 Array라는 객체로 다루어진다

```jsx
   배열의 길이 = const arr = [1,2,3,4]
   console.log(arr.length) // 4
```

### 배열의 표기법

0개 이상의 값을 쉼표로 구분, 대괄호로 묶는다.

```jsx
ex) [1,2,3,4,5]
첫번째 값의 인덱스(검색을 빠르게 하기 위해 부여하는 순번)은/는 0부터 시작

const arr = [a,b,c,d,e]
const obj = {
0 : "a"
1 : "b"
2 : "c"
3 : "d"
}
obj[0], arr[0] //a

---

const arr = [a,b,c,d,e]
배열의 길이(요소의 갯수) --> 5
배열의 인덱스 ----> 0 ~ 4
배열의 접근 방법 ---> 배열명[인덱스번호]
arr[3] //d
배열의 마지막 인덱스 ---> arr[arr.length - 1]
---> arr.at(-1)
```

---

```jsx
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

/_ split _/
// 문자열(문자로 이루어진배열)은 유사배열로서 문자들의 배열이 되고 배열과 관련된 기능들을 사용할 수 있다
const phone = '010-1234-1234' // ["0","1","0","-" ... ]
console.log(phone.length) // 13
// phone.replaceAll('-','') // 01012341234
phone.split('-') // ['010', '1234', '1234']
// .join('') // 0101231234
.join('-') // 010-1234-1234

/_ 내장함수 _/
// push
const arr3 = [1,2];
arr3.push(4,5) // => [1, 2, 4, 5]

// concat
// 특정 배열에 인자로 들어온 배열을 합칠 때 사용한다 ex) 인피니트 스크롤링
const arr4 = [1,2];
const arr5 = [3,4];

const result = arr4.concat(arr5) // [1,2,3,4]

//pop
const arr6 = [1,2,3,4,5]
const deleteEl = arr6.pop()
console.log(deleteEl, arr6) // 5 , [1,2,3,4]

// shift, unshift
const arr7 = [1,2,3,4]
arr7.unshift(5) // 맨 앞에 요소를 추가하는 명령어
console.log(arr7) // [5, 1, 2, 3, 4]
arr7.shift() // 맨 앞에 요소를 삭제하는 명령어
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
```

---

### 배열 quiz

```jsx
문제1
자판기라는 함수를 정의

    자판의 함수는 처음에 실행되었을 때 자판기가 가동되었습니다가 출력
    자판기 함수의 파라미터로는 coin, menu

    잔돈이 0원이면 음료수 이름을 출력
    잔돈이 있으면 음료수 이름과 잔돈을 출력

    음료수보다 금액이 적을 경우 금액이 부족합니다 출력
    없는 메뉴를 파라미터로 전달하였을 때는 존재하지 않는 상품입니다 출력

    메뉴
    솔의눈 : 300원
    비타500 : 500원
    콜라 : 1000원

문제2
010-1234-1234를 파라미터로 전달받아
010-\*_\*\*-1234로 파싱하는 함수를 정의
_/

function 자판기(coin, product) {
console.log("작동");

let change; // 잔돈
let menu = { 솔의눈: 300, 비타500: 500, 콜라: 1000 }; // 메뉴 객체
let selectedPrice = menu[product]; // 파라미터로 전달 받은 품목의 가격

// 예외처리
// early return 예외 상황 때 빠르게 해당 함수를 종료하여 아래 로직을 실행하지 않기 위함
// 항상 예외 사항을 고민해 봐야된 것
if (!selectedPrice) return console.log("없는 제품입니단");
if (coin < selectedPrice) return console.log("금액 부족");

// 로직
change = coin - selectedPrice;

if (change === 0) return console.log(product);
console.log(product, change);
}

자판기(300, "비타300");
// 강사님은 else를 사용하면 깊이가 깊어지기 때문에 코드가 복잡하다고 생각하셔서 early return을 사용하셨다
```

```jsx
문제2
010-1234-1234를 파라미터로 전달받아
010-\*\*\*\*-1234로 파싱하는 함수를 정의

input값
010-1234-1234

output값
010-\*\*\*\*-1234

operates
전화번호의 중간 값을 1234로 바꾸어야한다

keyword
특정 집단(배열)의 특정 부분을 바꿀 수 있는 알고리즘

1. replace // 정규표현식
2. splice (o)
3. split + 할당 + join (o)

spclie를 써서 내가 원하는 인덱스번혼를 구하고 인덱스번호에서 번호에서
4개의 숫자를 삭제한뒤 \*_\*\*로 대체한다
_/ s;

function pasrePhone(phone) {
const newArr = Array.from(phone); // 유사배열인 string을 배열로 변환
newArr.splice(4, 4, "_", "_", "_", "_"); // 배열로 변환한 데이터에서 특정 부분을 제거 후 대체
return newArr.join(""); // join 함수
}

console.log(pasrePhone("010-1234-1234s"));

function pasrePhone2(phone) {
const arr = phone.split("-");
arr[1] = "\*\*\*\*";
return arr.join("-");
}

// \*\* 정규표현식을 이용한 replace로 문자열 데이터 치환하기
```

---

```jsx
console.log(Math.floor(Math.random() \* 10)) // 0 ~ 0.999999
// 0 ~ 9.999999
// 0 ~ 9까지의 랜덤숫자

console.log(Math.floor(Math.random() \* 45) + 1) // 0 ~ 44
// 1 ~ 45

// 퀴즈
// 1번 문제
// 전화번호 가리기
// 010-1234-1234 => 010-\***\*-\*\***
// 번호 input 어떤 것이든 들어가도 위와 같은 결과가 나와야한다
// 010-0000-0000 => 010-\*\*\*\*-0000

// 2번 문제
// 로또 번호 맞추기
// 랜덤 생성 [1~45, 1~45, 1~45, 1~45, 1~45, 1~45, 1~45]
// input [?,?,?,?,?,?,?]

// 순서 상관없이 3개 일치 => 4등
// 순서 상관없이 4개 일치 => 3등
// 보너스 포함해서 6개 일치 => 2등
// 보너스 제외 6개 일치 => 1등
// 마지막 인덱스 = 보너스

const num = "010-1234-1234"

function hashNum(num){
const hashNumber = num.split('-')
// [010, 1234, 1234]
hashNumber[1] = "\*".repeat(hashNumber[1].length)
// [1,2,3,4] = \***\*
// [010, \*\***, 1234]
return hashNumber.join("-")
// 010-\*\*\*\*-1234
}

console.log(hashNumber(num))

const userNumbers = genertaedUserNumber();
const winningNumbers = [6, 18, 28, 30, 32, 38, 15];

function genertaedUserNumber(){
const numbers = Array(7).fill().map(() =>
Math.floor(Math.random() \* 45 + 1)
)
// 중복 번호 -> 예외사항 -> 중복번호가 있으면 오류가 날 수 있다.
// 중복 번호를 제거할 수 있는 방법은 무엇이 있을까? -> 구글링을 해보자
// 배열 내 중복된 요소를 제거하는 방법 -> 재사용
// 로우레벨 단위로 검색할 수 있는 버릇 들이기 -> 구조 단위로 할 수 있어야 구글링 스킬을 업시킬수 있고, 구글링 실력이 늘어야 모르는 것이더라도 사용할 수 있다.

const lotto = new Set()
// 해시 테이블로 검색 및 추가가 굉장히 빠르고 중복된 데이터의 저장을 허용하지 않습니다.

// for(let i=0; lotto.size <= 6; i++){
// const randomNumber = Math.floor(Math.random() _ 45) + 1
// lotto.add(randomNumber)
// }
while(lotto.size <= 6){
const randomNumber = Math.floor(Math.random() _ 45) + 1
lotto.add(randomNumber)
}

// Set -> 유사배열객체 -> Array.from()
return Array.from(lotto)
}

console.log(userNumbers)

const lottery = (numberArray) => {
/\*
로또 당첨 번호 등수 - 요구사항 분석이 필요하다.
let rank;

    요구사항 분석
      1. 로또번호 6개를 모두 맞추면 1등
      2. 로또번호 5개 + 보너스 2등
      3. 로또번호 5개 + 보너스 제외 3등
      4. 로또번호 4개 + 보너스 제외 4등
      5. 로또번호 3개 + 보너스 제외 5등

    내가 작성한 로또 번호와 실제 당첨 로또 번호를 비교해야하는데
    보너스, 실제 당첨 번호, 보너스를 맞췄는지 비교할 flag, 맞춘 갯수

\*/

    let rank = "미당첨";
    let winningCount = 0;
    let bonusNum = winningNumbers.pop();
    // bounusNum 변수에는 보너스 번호가 담기고
    // 실제 당첨 번호는 보너스를 제외한 번호들의 집합

    // 실제 당첨 번호에서 내가 몇개 당첨했는지
    // 내 당첨 번호를 순회하여 내가 뽑은 번호가 실제 당첨 번호에 포함되어 있는지 확인
    // 배열을 순회하여 해당/ 배열 내 요소가 / 다른 배열 내 요소에 포함되어 있는지 확인

    for(let num of numberArray){
      if(winningNumbers.includes(num)){
        winningCount ++;
      }
    }

    if(numberArray.includes(bounsNum)){
      bounsFlag = true;
    }

    switch(winningCount){
      case 6 :
        rank = 1;
        break;
      case 5 :
        if(bounsFlag){
          rank = 2;
        } else {
          rank = 3;
        }
        break;
      case 4 :
        rank = 4;
        break;
      case 3 :
        rank = 5;
        break;
      default :
        break;
    }

    return rank

}

console.log(lottery(userNumbers));

module.exports = {
genertaedUserNumber,
lottery
}

const lotto = require('./quiz');

const userNumbers = Array(5).fill().map(() => lotto.genertaedUserNumber())
// 이 배열안에 또 다른 배열이 있는 것 - 다차원 배열
//[[],[],[],[]]

for (let numbers of userNumbers){
const result = lotto.lottery(numbers);
console.log('로또 번호의 등수는 : ${result}')
}
```
