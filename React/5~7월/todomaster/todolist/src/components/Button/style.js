// 공용 컴포넌트 만드는 방법


import styled, { css } from "styled-components";

const variantCSS = {
    primary : css`
        background-color : ${({ theme }) => theme.PALETTE.primay[300]};
        color : "#ffffff"; 
    `,

    'primary-reverse' : css`
        border : 1px solid ${({ theme }) => theme.PALETTE.primay[300]};
        color : ${({ theme }) => theme.PALETTE.primay[300]};    
    `,

    'primary-test' : css`
        color : ${({ theme }) => theme.PALETTE.primay[300]};
    `,
};

const shapeCSS = {
    default: css``,
    shape: css`
        border-radius: 8px;
    `,
    round: css`
        border-radius: 50%;
    `,
};

const sizeCSS = {
    small: css`
        width: 64px;
        height: 32px;
        padding: 16px 0;
    `,

    medium: css`
        width: 96px;
        height: 48px;
        padding: 16px 0;
    `,
    large: css`
        width: 128px;
        height: 64px;
        padding: 16px 0;
    `,

    full: css`
        width: 100%;
        aspect-ratio: 8 / 1;
    `,
};

const Button = styled.button`
    ${({ variant }) => variantCSS[variant]}
    ${({ shape }) => shapeCSS[shape]}
    ${({ size }) => sizeCSS[size]}
    cursor: pointer;
    border: none;
    font-size: ${({ theme }) => theme.FONT_SIZE.medium};
    :hover {
        opacity: 0.7;
    }
`;
export default Button;
// <BascitButton size={'medium'} >

