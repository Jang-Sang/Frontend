import { rest } from "msw";

export const getTodos = rest.get("/api/todo", (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json([
      {
        id: 1,
        title: "example",
        content: "example",
        status: false,
      },
      {
        id: 2,
        title: "example",
        content: "example",
        status: false,
      },
    ])
  );
});

// npm i msw 로 msw 설치
// 가상 데이터 작성후
// npm i msw init public -> public에 mocking service worker가 생성된다.
// -> 가상 일꾼 생성