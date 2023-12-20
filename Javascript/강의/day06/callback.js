/* callback */
// 부모한테 전달 받은 파라미터를 내 마음대로 로직을 작성할 수 있게 하기위하여 (재사용)
// callback 함수를 사용하지 않으면 부모 함수 내에서 직접 로직을 수정해야하고
// 재사용이 불가능하다

function parents(number, action) {
  for (let i = 0; i < number; i++) {
    action(i);
  }
}
// 5일시 0,1,2,3,4 가 출력된다
//그것이 부모함수 안에서 실행
parents(5, function (seongyong) {
  console.log(index * 2);
});
// 부모함수의 인자로 함수가 전달
// 0,2,4,6,8이 출력된다

parents(5, function (index) {
  console.log(index * 3);
});
// 0,3,6,9,12가 출력된다
parents(5, function (index) {
  console.log(index * 4);
});
// 0,4,8,12,16이 출력된다

// parents라는 함수를 선언하고 밑에서 함수를 실행하는 것
// 선언문과 실행문을 구별할 것

/* callback x */
// function parents(number){

//     function action(index){
//         console.log(index * 2)

//     }

//     for(let i=0; i<number; i++){
//         action(i)
//     }
// }

// parents(5)

// 콜백문이 어려우면 선언문과 실행문을 분리해서 나눠서 천천히 따라갈것
