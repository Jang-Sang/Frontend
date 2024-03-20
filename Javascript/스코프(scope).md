# 스코프(Scope)
- 변수에 접근할 수 있는 범위, 변수를 찾기 위한 규칙
- 자바스크립트에서 스코프란 전역스코프와 지역스코프  
- 전역 스코프에는 어떠한 곳에서도 접근이 가능한 값이 지정
- 지역 스코프에는 특정한 블럭 내에서만 접근이 가능한 값 지정
- 지역 변수 - 특정한 구역 내에서만 사용할 수 있는 변수 (지역 스코프에 포함)
- 전역 변수 - 전체에서 사용이 가능한 변수, 웹 페이지가 닫혀야만 메모리에서 사라짐

```jsx
    function printNumber(){
        const number = 5;
        console.log(number)
    }
    
    printNumber(); // 5
    console.log(number) // 5


    스코프 체인
        let c =7;
       a 구역 {
            let b =5;
             b구역 {
                let a =5;
                let c =3;
                console.log(a,b,c)
            }   
            console.log(c) -> b구역 내의 결과값 출력 X
        }
```
```
a 구역의 결과값은 b만 , b 구역의 결과값은 a,c만 출력
제일 위에있는 let c=7은 어디서든 출력이 가능하지만 b구역에서는 안에 있는 let c=3 이 있기에 스코프체인에 의해 b구역에서의 c 값은 3이다. => 가장 가까이 있는 값을 가져간다.
지역변수가 전역변수보다 더 우선순위를 가지고 있다.

자바스크립트는 실행하기전에 평가와 실행과정으로 나뉜다. 
그러면서 스코프 등록이란 것을 하는데 선언부가 위로 올라가는 것을 호이스팅이라고 한다.
```
```jsx
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
```