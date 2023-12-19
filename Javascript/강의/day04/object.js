
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