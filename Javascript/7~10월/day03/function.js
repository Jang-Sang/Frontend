(()=>{
    console.log("안녕하세요")
})()
// 익명함수, 화살표함수, 즉시실행함수

function printName(name){
    console.log(name)
}

printName("장상준") //장상준

function addNumber(num1, num2){
    console.log(num1 + num2)
    return num1 + num2
}

addNumber(1,2) //3
console.log(addNumber(1,2) + 1) //3,4 리턴은 반환값이예요 라고 말하기

function f(n){
    if(n <= 1){
        return 1
    }
    return n + f(n-1)
}
console.log(f(10)) //55