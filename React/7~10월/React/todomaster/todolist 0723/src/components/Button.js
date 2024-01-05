/* 
모든 페이지에서 
자주 재사용되는 컴포넌트 (select, button, input) => 공용 컴포넌트(src/components에 넣겠다는 것)
디자이너와 협업 -> 컴포넌트 공유 -> UI 인벤토리 -> storybook

디자이너가 이미 만들어진 컴포넌트를 기반으로 디자인하여
컴포넌트의 재사용성을 극대화하는 개발 방식을 CDD(컴포넌트 주도 개발)
디자이너와의 협업이 안되면 수많은 버튼이 만들어질 수 있기 때문에 협업이 필수다.

아토믹 디자인 방식에서는 필수로 사용되는 개발 방법론
*/

import { css, styled } from "styled-components";

const SJButton = ({
  variant,
  size,
  shape,
  children /* 랜더 함수의 매개변수 */,
}) => {
  // console.log(props)
  // 객체
  // 자식으로 전달된다.
  console.log(variant, size, shape, children);
  return (
    <Button variant={variant} size={size} shape={shape}>
      {children}
    </Button>
  ); // 키와 값으로 전달
};
export default SJButton;

const variantCSS = {
  primary: css`
    background-color: ${({ theme }) => theme.COLORS.primary[300]};
    color: ${({ theme }) => theme.COLORS.font};
  `,
  secondary: css`
    background-color: ${({ theme }) => theme.COLORS.secondary};
  `,
};

const sizeCSS = {
  small: css`
    width: 100px;
    height: 30px;
    padding: 10px 0;
  `,
  medium: css`
    width: 80px;
    height: 50px;
    padding: 10px 0;
  `,
  large: css`
    width: 100px;
    height: 30px;
    padding: 10px 0;
  `,
  full: css`
    width: 100%;
    aspect-ratio: 8 / 1;
    // 종횡비 유지 8대 1  가로8,세로1
  `,
};

const shapeCSS = {
  shape: css`
    border-radius: 8px;
  `,
  round: css`
    border-radius: 50%;
  `,
};

const Button = styled.button`
  ${({ variant }) => variantCSS[variant]} // primary
  ${({ size }) => sizeCSS[size]}
  ${({ shape }) => shapeCSS[shape]}
  cursor: pointer;
  border: none;
  &:hover {
    opacity: 0.8;
  }
`;
// background-color: ${(prop) => props.varaint};

// 디자이너한테 이런 컴포넌트 있다고 알려주면 디자이너가 이런 컴포넌트를 사용해서 ui 개발해줄 것
// 컴포넌트 버튼제작 , 스토리북 설치 , ui인벤토리 만들기

/*
1. 목표 -> 재사용 가능한 컴포넌트 만들기
2. 과정 -> 전달된 값에 따라 css가 유동적으로 변하는 구조
3. 구현 -> 재사용 가능한 컴포넌트에 값(props)을 전달
4.      -> 컴포넌트에 전달된 props를 사용하여 어떻게 유연한 css를 만들 것인가?
        -> styled-components를 사용 중이니까 styled-components에 값 전달
        -> 객체화, 그리고 전달된 값을 키로 생성, 그리고 키에 따라 css를 변경
 
 
*/
