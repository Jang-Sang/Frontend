```jsx
const fs = require("fs");
const text = "오늘도 힘들다. 그래도 힘내자";

fs.writeFile("./test1.txt", text, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("파일이 정상적으로 저장되었습니다.");
});
// 콜백함수로 호출해서 출력

try {
  fs.writeFileSync("./test2.txt", text);
  console.log("파일이 정상적으로 저장되었습니다.");
} catch (err) {
  console.log(err);
}
// try,catch문으로 출력 - 이게 좀 더 보기나 사용하기에 좋다.
```
