


let a = 4;

const pr = new Promise((resolve, reject)=> {
    setTimeout(()=>{
        a += 1;
        if(a == 6){
            resolve(a)
        } else {
            reject('error')
        }
    },1000)
})


pr.then((res) => {
    console.log(res); // 6
}).catch((err) => {
    console.log(err)
})

console.log("성용")
console.log("123")