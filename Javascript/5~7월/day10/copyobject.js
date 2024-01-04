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

/** 깊은 복사 */
// 전개 연산자
// 전개 : 펼치는 것
// ...a => name: "김성용", age=20
// {...a} => { name: "김성용", age=20 }

const d = { ...a };
/* 
const d = {
    name: "김성용"
}
*/

const arr = [1, 2, 3, 4, 5];
const e = [...arr];

// object assign
const newObject = Object.assign({}, a);


