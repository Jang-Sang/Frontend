/* 
  1.npm init
  2.npm i express
*/

const express = require('express')
const morgan = require('morgan')

const app = express()

// npm i morgan -- 로깅 미들웨어
// 사용자의 요청, 요청사항, status code를 따로 로깅하지 않아도 자동으로 로그
// dev, comibed, common, short, tiny
app.use(morgan('dev')) // 개발자 사이에서는 dev가 국룰!!
app.use(express.json())
// json 데이터를 읽는 것을 허용
// body-parser, json(X), express 기본 내장
app.use(express.urlencoded({extended : false}))
// url에 있는 정보를 해석할 때 express 내부에 모듈O 외부 모듈O 여부
// 만약 false라면 추가 라이브러리가 아닌 내장 모듈로만 값을 해석


app.use('/', express.static(path.join(_dirname, 'public')))
// 정작 파일 제공
// 특정 경로에 있는 파일을 파일명으로 불러올 수 있는 미들웨어
// '/'  <-- 접근 권한을 줄 라우트
// path.join <-- 접근할 저장소 위치

app.use('/user', user)

app.listen(3000, () => {
  console.log("3000번 서버 실행 중")
})