import styled from 'styled-components'
import SignInForm from './componetns/SignIn/SignIn'
import SignUpForm from './componetns/SignUp/Signup';
import { flexCenter } from '../../styles/common';

const MainPage = () => {
    let isFormLogin = true;

    const onClickFormHeader = (e) => {
        const {innerText} = e.target
        console.log(innerText)
        if(innerText === "LOGIN") return isFormLogin = true;
        isFormLogin = false;
    }

    // const handleClickFormHeader = (e) => {
    // }


    return (
        <S.Container> 
            <S.Header isFormLogin={isFormLogin}>
                <div onClick={onClickFormHeader}>LOGIN</div>
                <div onClick={onClickFormHeader}>SIGN</div>
            </S.Header>
             {isFormLogin ? <SignInForm/> : <SignUpForm/>} 
        </S.Container>
    )
}
export default MainPage

const Container = styled.div`
    width: 100%;
    height: calc(100vh - 60px);
    ${flexCenter}
    flex-direction: column;
`
const Header = styled.div`
    width: 360px;
    height: 48px;
    display: flex;
    /* background-color: #00C7AE; */
    background-color : ${({ theme }) => theme.PALETTE.primay[300]};

    div {
        ${flexCenter}
        width : 50%;
        cursor : pointer;
        :hover { 
            opacity : 0.7;
        }
    }
`;

const LoginHeader = styled.div`
    background-color: ${({ theme, isFormLogin }) =>
        isFormLogin ? "#e0e0e0" : "f5f5f5"};
`;

const SignUpHeader = styled.div`
    background-color: ${({ theme, isFormLogin }) =>
        isFormLogin ? "f5f5f5" : "#e0e0e0"};
`;

const S = {
    Container,
    Header,
    LoginHeader,
    SignUpHeader,
};