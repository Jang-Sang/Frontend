let num1 = 100; // 250
let num2 = 50;

function f1(){
    console.log(num1)
    function f11(){
        let num2 = 100;
        console.log(num1,num2)
    }
    f11()
}

function f2(){
    num1 = 250;
}

function f3(){
    let num1 = 100;
    let num3 = 50;
    num1 = 300;
    console.log(num1) // 300
    // num1은 전역변수를 바꾼게 아닌 지역변수를 100 -> 300으로 변경한 것이다.
}

console.log(num1) // 최상단에 있는 num1 실행 100
f1(); // 100 , 100, 100
f2(); // 100 -> 250으로 변경
console.log(num1) // 250 f2가 실행되면서 값이 변경
f3(); // 300
console.log(num1) // 250 아까 f2로 변경되었으므로 값이 250으로 변경되어 있다.
console.log(num3) // 정의 되어있지 않음 /전역변수에서 값이 없다./
// 스코프 체인 확실히 이해해두면 도움이 많이된다.