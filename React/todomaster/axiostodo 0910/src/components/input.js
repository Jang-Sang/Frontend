import { styled } from "styled-components";
import { flexCenter } from "styles/common.style";

const JWInput = ({ label, error, ...inputProps }) => {
  return (
    <>
      <InputBox>
        <label>{label}</label>
        <input {...inputProps} />
      </InputBox>
      {error && <p>{error}</p>}
    </>
  );
};
export default JWInput;

export const InputBox = styled.div`
  width: 80%;
  height: 48px;
  ${flexCenter};
  position: relative;
  margin-bottom: 16px;

  & input {
    width: 100%;
    border: 1px solid #999;
    border-radius: 5px;
    height: 100%;
    text-align: center;
  }

  & label {
    position: absolute;
    left: 15px;
    top: -5px;
    font-size: ${({ theme }) => theme.FONT_SIZE.small};
    background-color: ${({ theme }) => theme.COLORS.white};
    z-index: 1;
    padding: 0 5px;
  }
`;
