
const pr1 = new Promise((resolve) => {
    setTimeout(()=>{
        resolve("안녕하세요")
    },1000)
})


const pr2 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        reject("반갑습니다")
    },3000)
})


const pr3 = new Promise((resolve) => {
    setTimeout(()=>{
        resolve("김성용입니다")
    },2000)
})



//all은 배열내의 모든 promise를 실행, 각 인덱스에 맞는 결과값을 반환
//race는 배열 내의 모든 promise 중 가장 빠린 오는 값을 반환
Promise.all([pr1, pr2, pr3]).then((result) => console.log(result)).catch((err)=>{console.log(err)})

// all의 가장큰 단점은 하나라도 실패하면 catch문으로 throw
// status를 통해 fulfilled와 rejected를 나누고 성공과 실패의 분기를 나누어 사용이 가능
// allSettled
Promise.allSettled([pr1, pr2, pr3]).then((result)=>console.log(result))


/* 
예외처리문

try{
    ...성공과 실패 가능성이 있는 실행문
    .. 성공 시 실행할 문장

    throw new Error(err)
}catech(err){
    .. 실패시 실행될 문장
}

try문에서 error가 나오면 상위 예외 처리문인 catch문에서
예외를 캐치하여 예외를 처리해준다

*/