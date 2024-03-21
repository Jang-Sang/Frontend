# Object
## Object (객체) 매우 중요!!!!!!!!!!!!!!!!!!!!! 프론트엔드 코테에서 제일 자주 제일 어렵게 나오는 주제 

자바스크립트는 객체기반의 스크립트 언어이며 사실상 자바스크립트를 이루고 있는 모든 것이라고 해도 무방, 원시 타입 외에 데이터는 모두 object이기 때문이다.
자바스크립트의 객체는 키와 값으로 구성된 속성들의 집합

키
집합에서 특정한 값을 찾기 위해 다른 값들과 비교되는 값 (유일)

프로퍼티
키로 이름을 구별하고 해당 키의 값으로 구성되어있다.
ex)
<input placeholder = "비밀번호를 입력해주세요" />
input 태그의 프로퍼티 / placeholder = 키 / 비밀번호를 입력해주세요 = 값

선언 방법
let seongyong = {
name: "김성용",
age: '20',
height: 190
}

let obj = new Object() // (x)

접근 방법
(1) 마침표 표기법
console.log(seongyong.name)
// '김성용'

(2) 대괄호 표기법
console.log(seongyong["name"]) // "김성용"

// 객체의 모든 키 값에 접근
ex) for (let key in seognyong){
console.log(seongyong[key])
}

* 객체는 왜 중요할까요?
원시데이터가 아닌 모든 데이터는 객체이다.

1. 여러데이터를 공통된 주제로 묶을 수 있다.
let kong = {
animal: "dog",
age: 11
}

2. JSON (Javasciprt Obejct Notation)
    1. 자바스크립트에서 객체를 만들 때 사용하는 표현식
    2. 데이터를 전송하거나 저장할 때 많이 사용되는 경량의 교환 방식

{
id: 1,
title: "오늘은 좋은 하루입니다",
User: {
name: "김성용",
profie_img: "<https://이미지저장소.com/profile/seongyong>"},
CreatedAt: 2023.03.19,
Content: "여러분들 오늘 하루도 고생 많으셨습니다",
Comments: [
{ content: "강사님도 고생 많으셨습니다",
User: {
name: "지형님",
profile ...
}
},
{
...
},
{
...
},
]
}

- 게시판 데이터 - 백엔드에서 받는것 -> 사용자 화면에 보여줘야하는 것(우리가 해야할 일)

------------

//new -> 생성자
// 새로운 오브젝트를 생성할 때 같은 이름이더라도 내용물이 다르면 다른 객체

let sangjun = new Object()
// let seongyoung = {}
sangjun.name = "장상준"
sangjun.age = 20;
sangjun.height = 178;
// sangjun 객체에 요소를 추가하는 것
console.log(sangjun)
seongyoung.height = 190;

console.log(sangjun) //name : "장상준" age : 20 height : 190 으로 수정


// const는 엄격하게 이야기하면 재할당이 안되는 것뿐이다.
// 자바스크립트의 객체 저장 
// => 힙메모리에 저장된 것은 할당을 받는다. 힙은 각각에 할당된 메모리 주소를 콜스택에 넣는 것
//  => 안에 데이터는 변할 수 있지만 주소값은 변하지 않는다.
//   => 깊은복사와 얕은복사의 차이를 공부할 것


let seongyong = {
    name: "김성용", // ,가 있어야함 반드시!!!!
    age: 20,
    height: 190,
    hobby: "풋살"
}


// 중첩 객체, 중첩 객체 배열
//객체는 힙에 저장 - post는 주소값이다. 그러므로 수정해도 주소값은 수정되지 않는다.
// 그래서 const라도 재할당이 가능하다.
//callstack에 저장

const post = {
    title: "example title 1",
    content: "example content 1",
    User: seongyong
}

console.log(post.title)
console.log(post.content)
console.log(post["User"])

// 객체의 데이터 수정 (재할당)
// 실제 데이터는 메모리 힙에 저장
// 변수/상수에는 메모리 힙의 주소값이 저장
// 따라서 객체가 상수로 선언 되었다고 하더라도 주소값이 수정 되는 것이 아니기 때문에
// 상수로 선언되었다 하더라도 재할당이 가능하다.

post.User = {
    name: "지형님"
}

console.log(post.User)

let kong = new Object() //비어있는 객체가 생성 {}
// new 생성자 - 하나의 틀에서 여러가지를 생산해내는 것,똑같이나 비슷하게 생겼어도 완전히 독립된 객체
// 기존의 생성자에 영향을 미치면 안되기 때문에 new를 붙여서 생성
// 기존의 1번 붕어빵과 새로만든 2번 붕어빵에서 2번 붕어빵을 먹을려고 했다가 1번붕어빵이 없어지면 안되기때문에 new를 붙여 구분시켜준다.


kong.name = '콩이';
console.log(kong)

kong.name = '멍멍이';
console.log(kong)

const newObj = Object.assign(seongyong, kong);
console.log(newObj)