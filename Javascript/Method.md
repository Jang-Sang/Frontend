# 메서드

객체의 속성의 값으로 함수가 들어갈 수 있을까?
객체의 프로퍼티의 값이 함수일 때 일반 함수와 구분을 위해 메서드라고 부른다

ex)
let console = {
log : function(message){
console.log(message)
},

print(message){
...
},
print(message){
...
} // 제일 많이 사용하는 방법
}

    message.print("장상준")
    console.log() - 메서드

    키 = print , value = function
    화살표 함수는 특정한 경우에 오류가 날 수도 있기에 주의해서 사용할 것(자바스크립트에서만)
    console.log() => console이라는 함수에 log라는 키값과 ()안에 value로 이루어져있는 것 => 이것도 메서드이다!!
        => 자바스크립트안에 빌트인 객체이다.

/\*
비슷한 속성의 함수들을 하나의 객체로 묶어서
한 번에 관리하기 위함

const tokencreate()

const TokenService = {
create(){
}
}
\*/
