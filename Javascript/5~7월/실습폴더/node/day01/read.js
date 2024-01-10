const fs = require('fs')

fs.readFile('./test1.txt', 'utf-8', (err, data) => {
  if(data){
    console.log(data)
  } else console.log(err)
})
// 잘못하면 한글파일이 깨질수 있으므로 주의해서 작성

try {
  let text = fs.readFileSync('./test2.txt', 'utf-8');
  console.log(text)
} catch(err) {
  console.log(err)
}