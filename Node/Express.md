express의 미들웨어

HTTP 통신간 req,res 사이에서 중간에서 데이터를 조작하고 변형하여 나쁜 요청
(디도스나 잘못된 요청, 인증되지 않는 회원)에 대해 예외 상황을 걸러내어 유효성 검사

백엔드 유효성 검사?
프론트엔드에서 이미 유효성 검사?

- 올바른 데이터 저장
- 프론트 엔드 서버를 우회하여 잘못된 요청을 통한 공격을 방지 / 이게 주된 목적

프론트엔드? 유효성 검사?

- 올바른 데이터 요청
- 올바른 데이터가 있을 때만 백엔드에 요청
- UI, UX 사용자에게 왜 안되었는지 보여줘야 하기에 유효성 검사
  디도스 공격같은 공격은 프론트엔드쪽에서 우회해서 공격할 수 있기 때문에 주의

사용법
app.use(미들웨어) : 모든 요청
app.use('/abc', 미들웨어) : 특정 라우팅 요청
app.use('/abc/', 미들웨어) : 특정 라우트로 시작하는 모든 요청

=> 라우팅 주소마다 다양하게 미들웨어 권한을 설정할 수 있다.

종류
morgan
body-parser
static
cooike-parser

# Router

```jsx
const express = require("express");
const router = express.router();

router.post("/sign-up", (req, res) => {
  console.log(req.body);
  ("insert into tb_user (email) vaule (${req.body.email})");

  res.status(200).json({
    message: true,
    data: "동해물과 백두산이 마르고 닳도록!!!!!!!!!!!!!!",
  });
});

// 해당 라우트는 이미 app.js에서 관심사 분리한 로직이다
// 그러나 user.js에 너무 많은 라우트가 있다면 유지보수하기에 힘들다
// 그렇다면 이를 해소하기 위해 어떤 방식을 도입하는게 좋을까?

module.exports = router;
```

# App

```jsx
/* 
  1.npm init
  2.npm i express
*/

const express = require("express");
const morgan = require("morgan");

const app = express();

// npm i morgan -- 로깅 미들웨어
// 사용자의 요청, 요청사항, status code를 따로 로깅하지 않아도 자동으로 로그
// dev, comibed, common, short, tiny
app.use(morgan("dev")); // 개발자 사이에서는 dev가 국룰!!
app.use(express.json());
// json 데이터를 읽는 것을 허용
// body-parser, json(X), express 기본 내장
app.use(express.urlencoded({ extended: false }));
// url에 있는 정보를 해석할 때 express 내부에 모듈O 외부 모듈O 여부
// 만약 false라면 추가 라이브러리가 아닌 내장 모듈로만 값을 해석

app.use("/", express.static(path.join(_dirname, "public")));
// 정작 파일 제공
// 특정 경로에 있는 파일을 파일명으로 불러올 수 있는 미들웨어
// '/'  <-- 접근 권한을 줄 라우트
// path.join <-- 접근할 저장소 위치

app.use("/user", user);

app.listen(3000, () => {
  console.log("3000번 서버 실행 중");
});
```

# express

```jsx
const express = require("express");
const app = express();

app.set("port", 3000);
//key, value

//routing
app.get("/todo/:id", (req, res) => {
  console.log(req.params.id);
  res.send("hello express!");
});
// http://localhost:3000/todo/3
// https가 될려면 인증서가 필요하다.

//(app.get, ()=>{})
app.listen(app.get("port"), () => {
  console.log(app.get("port") + "번으로 서버 실행 중");
});

//요즘 페스트api 안쓰는 곳 찾기 힘들다. 빠르다
```
