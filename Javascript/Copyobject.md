얕은 복사
값을 복사하여 할당 했을 때 같은 메모리 주소를 가리키는 값

let obj = {
name: "김성용"
}
let obj2 = obj

[obj.name](http://obj.name/) = "윤승빈님"
console.log([obj2.name](http://obj2.name/)) // 승빈님

깊은 복사
얕은 복사와 달리 주소를 복사하여 공유하는 것이 아니라 아예 새로운 값을 메모리에 저장하고
해당 주소를 가리키는 것

let obj = {
name: "김성용"
}
let obj2 = {...obj}

[obj.name](http://obj.name/) ="윤승빈님"
console.log([obj2.name](http://obj2.name/)) // 김성용
console.log([obj.name](http://obj.name/)) // 승빈님

const a = {
name: "김성용",
};

const b = {
name: "김성용",
};

const c = a;

console.log(a === b); // false
console.log(a === c); // true

a.name = "다은님";
console.log(c.name);

/\*_ 깊은 복사 _/
// 전개 연산자
// 전개 : 펼치는 것
// ...a => name: "김성용", age=20
// {...a} => { name: "김성용", age=20 }

const d = { ...a };
/_
const d = {
name: "김성용"
}
_/

const arr = [1, 2, 3, 4, 5];
const e = [...arr];

// object assign
const newObject = Object.assign({}, a);
