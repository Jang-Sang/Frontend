
function printName(name){   //name = 매개변수
    console.log(name)
}

printName("김성용");
printName("장동민님")
printName("김성용2")

//

function sum(num1,num2){
    let result;
    result = num1 + num2;
    return result
}

console.log(sum(3,5) + 8) // 16
console.log(sum(2,7)) // 9

/*
함수를 작성하는 이유는
여러분들이 작성한 비즈니스 로직(기능)을 컴퓨터에게 기억시키고 재사용하기 위함

return 값이 없다면 해당 실행부는 함수의 기능을 실행은 하지만
값 자체는 undefined고 return이 있다면 해당 return 값을 실행부에 할당

따라서 return 값의 유무는
여러분들이 설계한 로직 하에 해당 함수의 값이 있어야하는가 없는가
ex). 해당 로직 이후에 비즈니스 로직의 결과값을 사용해야하는가

result 값을 외부에서 사용하기 위해서 return을 사용
*/