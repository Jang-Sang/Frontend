//공용으로 style을 쓰기 위해서 공용화하기
import styled from "styled-components";
import { flexCenter } from "../../styles/global";
export const Form = styled.form`
  width: 360px;
  background-color: #ffffff;
  ${flexCenter}
  flex-direction: column;
  padding-top: 32px;
`;

// export const hideMessage = styled.div`
//   height: 20px;
//   width: 500px;
//   display: border-box;
// `;
export const InputBox = styled.div`
  display: border-box;
  position: relative;
  width: 80%;
  height: 48px;
  ${flexCenter}
  margin-bottom: 16px;

  input {
    width: 100%;
    border: 1px solid #999;
    border-radius: 4px;
    height: 100%;
    text-align: center;
  }

  //theme이라는 객체를 ()로 가져와서 theme안에 있는 font-size를 가져옴
  label {
    position: absolute;
    left: 16px;
    top: -4px;
    font-size: ${({ theme }) => theme.FONT_SIZE.small};
    z-index: 1;
    padding: 0 4px;
    background-color: ${({ theme }) => theme.PALETTE.background.white};
  }
`;
//pixel 단위를 4의 배수로 해야 브라우저가 빨리 읽는다.
//percent는 왠만하면 안쓰는게 좋다.
//=> 모니터에 따라 크기가 너무 커질 수 있다.
