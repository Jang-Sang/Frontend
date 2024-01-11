import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BasicButton from "../../components/Button/Button";
import styled from "styled-components";
import { flexAlignCenter, flexCenter } from "../../styles/common";
import TodoAddModal from "./componetns/Modal/add-modal";
import TodoList from "./componetns/List/todo-list";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { faL } from "@fortawesome/free-solid-svg-icons";
import TodoApi from "apis/todo.api";
import { useAuth } from "contexts/auth.ctx";
import { useTodo } from "contexts/todo.ctx";

const TodoPage = () => {
    const params = useParams();

    const [isAddTodoModal, setIsAddTodoModal] = useState(false)
    const { getTodoList} = useTodo();

    useEffect(()=>{
        getTodoList()
        /* 
            context provider의 useEffect의 실행 시기는
            provider를 호출한 컴포넌트가 랜더 되었을 때 (app.js에서 써주면 app.js)
            따라서 context 내부에 effect를 호출하면 getTodoList에는 access_token이 없어서 불러올 수 없음
        */
    }, [getTodoList])

    const toastOption = {
        autoClose : 2000,
        theme: 'colored'
    }

    const handAddTodoModal = () => {
        setIsAddTodoModal(true)
    }

    const handleCloseTodoModal = () => {
        setIsAddTodoModal(false)
    }

    return (
        <>
            {isAddTodoModal && <TodoAddModal  onClose={handleCloseTodoModal}/>}
            <S.Wrapper>
                <S.Container>
                    <S.Title>List</S.Title>
                    <S.Content>
                        <TodoList/>
                    </S.Content>
                    <S.ButtonBox>
                        <BasicButton variant={"primary"} size={"full"}
                        onClick={handAddTodoModal}
                        >
                            추가
                        </BasicButton>
                    </S.ButtonBox>
                </S.Container>
            </S.Wrapper>
            <ToastContainer {...toastOption} />
        </>
    );
};
export default TodoPage;

const Wrapper = styled.div`
    height: calc(100vh - 60px);
    padding-bottom: 60px;
    ${flexCenter};
`;

const Container = styled.div`
    width: 420px;
    height: 100%;
    background-color: ${({ theme }) => theme.PALETTE.white};
    border-radius: 8px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    position: relative;
`;

const Title = styled.h1`
    background-color: ${({ theme }) => theme.PALETTE.primary[300]};
    color: ${({ theme }) => theme.PALETTE.fontColor};
    padding-left: 32px;
    height: 32px;
    ${flexAlignCenter};
`;

const Content = styled.div`
    width: 100%;
    height: calc(100% - 32px);
    padding-bottom: 64px;
    overflow: scroll;
    ::-webkit-scrollbar {
        display: none;
    }
`;

const ButtonBox = styled.div`
    width: 100%;
    position: absolute;
    bottom: 0;
`;

const S = {
    Wrapper,
    Container,
    Title,
    ButtonBox,
    Content,
};
