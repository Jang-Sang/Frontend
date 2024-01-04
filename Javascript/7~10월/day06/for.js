const arr = [0,1,2,3]
for(let i = 0; i<arr.length; i++){
  console.log(arr[i])
}
// 0,1,2,3
/*
for문은 여러분들이 원하는 만큼 조건식을 설정해서 순회
index의 값을 마음대로 수정할 수 있다.
*/

arr.forEach((value,index,array)=>{
  console.log(value,index,array)
})
// 0,0,[0,1,2,3] -> 1,1,[0,1,2,3]
// 현재요소, 인텍스, 원본배열
/*
모든 요소를 순회 + 순서 보장 및 인덱스를 활용
*/

for(let el of arr){
  console.log(el)
}
/*
모든 요소를 순회, 단지 순서를 보장되지 않는다. 먼저 온 순서대로 나열
*/

const user = {
  name : "장상준",
  height : 190,
  age : 20
}

for(let key in user){
  console.log(key) // name, height, age
  console.log(user[key]) // "장상준", 190, 20
}
// 왜 이렇게 생겼나?
// 원래 작성법 -> 밑에 오브젝트.키
// [name, height, age]
Object.keys(user).forEach((key)=>{
  console.log(user[key])
})

// ["장상준", 190, 20]
Object.values(user)

// [[name,"장상준"],[height, 190],[age,20]] 키와 벨류가 동시에 필요할 때 사용한다.
Object.entries(user)
for(let[key, value] of user){
  console.log(key, value)
}

// 배열에서 순서 상관없이 순회만 하는거면 for of, 순서까지 중요하다 index필요하다 forEach, 인덱스를 조종해야한다 for
// 객체는 반복할 수 있는기? -> 반복할 수 없다!!