import { setupWorker } from "msw";
import * as TodoApi from "./apis/todo/todo.api";
// /api/todo있는 모든 export -> object

const handler = [...Object.values(TodoApi)];
// TodoAPi가 가진 모든 value를 복사하여 배열의 요소 (getTodos)
// getTodos를 배열의 요소로 지정하여, api를 등록

export const worker = setupWorker(...handler);
// 등록된 api를 msw에 셋업 -> 세팅한다는 것
