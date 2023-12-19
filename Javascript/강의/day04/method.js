/* 
method
객체의 속성 값이 함수일 경우 일반 함수와 구분하기 위해 메서드라고 부릅니다.
*/

const PrintService = {
    on(){
        console.log("실행되었습니다")
    },
// 제일 자주 사용
    off: function(){
        console.log("종료되었습니다")
    },

    ready: () => {
        // (x) this 바인딩 때문에 자주사용하지는 않는다.
        console.log("준비되었습니다")
    }
}

PrintService.on()
PrintService.off()
PrintService.ready()

/* 
비슷한 속성의 함수들을 하나의 객체로 묶어서
한 번에 관리하기 위함

const tokencreate()

const TokenService = {
    create(){
    }
}
*/