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
    console.log(num1)
}

console.log(num1) // f3에 있는 num1 실행 100
f1(); // 100 , 100, 100
//
f2(); 
console.log(num1) // 250
f3(); // 300
console.log(num1) // 250 아까 f2로 변경되었으므로 값이 250으로 변경되어 있다.
console.log(num3) // 정의 되어있지 않음 /전역변수에서 값이 없다./
