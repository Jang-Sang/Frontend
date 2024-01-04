const $idDom = document.querySelector("#id")
const $classDom = document.querySelectorAll(".class")

console.log($idDom, $classDom)

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
const $redList = document.querySelectorAll('red')
console.log($redList)

for(let i = 0; i < $redList.length; i++){
  $redList[i].className = "blue"
}