//App.css Index.css로 해도 상관없는데 동적인 컬러변경이 어렵다
//이렇게 css 파일을 만들면 두 파일지워도 상관없음

//겹치는 공용의 css 속성을 남긴다.
//import css를 시켜줘야 한다.
import { css } from "styled-components";

export const modalBackGround = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const flexAlignCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const h1Text = css`
  font-size: 42px;
  line-height: 16px;
  font-weight: bold;
`;
