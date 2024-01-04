const express = require('express');
const app = express()

app.set('port', 3000)
//key, value

//routing
app.get('/todo/:id', (req, res) => {
  console.log(req.params.id)
  res.send('hello express!')
})
// http://localhost:3000/todo/3
// https가 될려면 인증서가 필요하다.


//(app.get, ()=>{})
app.listen(app.get('port'), () => {
  console.log(app.get('port') + "번으로 서버 실행 중")
})

//요즘 페스트api 안쓰는 곳 찾기 힘들다. 빠르다