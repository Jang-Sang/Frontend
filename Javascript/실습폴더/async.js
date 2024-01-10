
const callback = (number) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            number += 1;
            if(number<5) return resolve(number);
            reject('err')
        }, 3000)
    })
}


/* 
callback(5)
.then((res) => console.log(res)) // 5
.catch((err) => console.log(err)) // err
*/

// then catch(x) ---> 동기적인 흐름으로 코드를 읽을 수 있다
const asyncAddNumber = async (number) => {
    try{
        const res = await callback(number)
        console.log(res) // 5
    }catch(err){
        console.log(err) // err
    }
    
}
asyncAddNumber(5)