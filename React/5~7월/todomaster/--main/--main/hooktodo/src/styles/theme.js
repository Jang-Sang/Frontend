//css를 모듈화시켜서 전체적으로 적용되게 만듦
//객체안에 css를 담으면 나중에 꺼내쓸수 있다.
//PALETTE.primary.200 이런식으로 ㄴ

//i-root
export const PALETTE = {
  //primary, 또는 brand라고도 씀. 아이덴티티 컬러
  primary: {
    100: "#CCFFF9",
    200: "#00ESC9",
    300: "#00A1FE",
  },
  secondary: "#EDF1F4",
  white: "#FFFFFF",
  fontColor: "#FFFFFF",
  background: {
    white: "#FFFFFF",
  },
  error: "#FF0000",
  gray: {
    100: "#E9E9E9",
  },
};

//폰트사이즈를 조정할 경우 한 곳에서 수정되면
//자동으로 다 수정되게 만드는 것이다.
//4px단위의 픽셀을 지정해주는 것이 좋다
const FONT_SIZE = {
  small: "12px",
  medium: "16px",
  large: "20px",
};

const FONT_WEIGHT = {
  thin: "100",
  regular: "400",
  bold: "700",
};

const FONT_LINE = {
  small: "16px",
  medium: "24px",
  large: "38px",
};

//만든 객체형태의 css파일을 theme이라는 객체로 묶어 한번에 export한다.
const theme = {
  PALETTE,
  FONT_SIZE,
  FONT_WEIGHT,
  FONT_LINE,
};

export default theme;

//두가지 방법이 있다.
//root 를 쓰는 방법
//객체 갖다 쓰는 방법
//styled component의 속성으로 쓰는 방법
