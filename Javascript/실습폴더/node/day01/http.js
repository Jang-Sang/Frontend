// npm init -> package.json 생성
const http = require('http');

/*
모듈간의 의존성을 위해서 생성
모듈을 읽고 쓸 수 있는 기능
import, export (ESmodules)
require, module.exports (commonJS)

ESmodules - ES6(2015) 이후에 등장
              속도 측면에서나 브라우저 환경에서 압도적으로 뛰어난 성능
              리엑트와 프론트엔드에서 많이 사용된다.

CommonJS - 현재 거의 모든 환경에서 적용이 가능
            하위 호환을 위해 nodeJS에서는 기본적으로 CommonJS를 사용
            주로 서버쪽에서 사용된다.

            commonJS와 ESmodules와 바꾸는건 매우 쉽다. type만 module로 변환
              
*/              

const server = http.createServer((req, res) => {
  res.end("hello")
})

server.listen(3030, () => {
  console.log("3030번 포트로 서버 실행 중")
})
// http://localhost:3030 - 로컬 환경에서 서버 접속
// 서버생성 코드
// req = request  res = response
// 서버는 큰 호텔 그중에서 3030호실을 이용하는 것
// type을 module로 할 시 import로 호출해야하지만 없애면 상관없다.

