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