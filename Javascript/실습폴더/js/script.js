// alert('확인이 완료되었습니다'); 괄호 안에 있는 내용을 알림창에 띄워준다. 출력의 역할

/* 
자바스크립트의 주석은
// --> 한줄단위 주석과
(/)\* *\(/) --> 여러줄 주석이 가능하며

Ctrl + "/"로 여러줄을 한 번에 주석 처리할 수 있다

자바스크립트의 주석은 어디에 쓰일까요?
1. 기능 설명

function Login(){
}

@params email:
@params password:
==> 주석은 함수명만으로 기능을 판단하기 힘든 복잡한 비즈니스 로직을 설명하기 위해 사용
세상에서 가장 좋은 코드는 주석 없는 코드
JS Doc 주석을 통해 문서화를 할 수 있다!!! 매우 중요한 것
이 코드가 어떤 코드인지 설명해 주는 주석

function LoginwithEmailAndPassowrd(email, password){
}
*/

// confirm('확인'); 알림창에 확인과 취소가 가능한 알림창을 띄워준다. 확인을 누르면 true, 취소를 누르면 false를 반환한다.
// alert(prompt()); 알림창에 입력창이 있는 알림창을 띄워준다. 입력창에 입력한 내용을 반환한다.

const $idDom = document.querySelector("#id");
const $classDom = document.querySelectorAll(".class");

console.log($idDom, $classDom);

/*
getElementsByClassName (live, 유사배열객체)
-> HTMLCollection
-> 유사배열객체
-> live DOM 객체
-> forEach 사용불가능

querySelectorAll(forEach, none-live, 유사배열객체)
-> NodeList
-> 유사배열객체
-> none-live DOM 객체
-> forEach 사용 가능하지만 배열은 아니므로 다른 메서드는 사용 불가 / 속성만 물려받음

따라서 HTMLCollection 과 NodeList 모두 배열로 변환 후 사용하는 것을 지향

"live" vs "non-live"
*/

// const $redList = document.getElementsByClassName('red');
const $redList = document.querySelectorAll("red");
console.log($redList);

for (let i = 0; i < $redList.length; i++) {
  $redList[i].className = "blue";
}
