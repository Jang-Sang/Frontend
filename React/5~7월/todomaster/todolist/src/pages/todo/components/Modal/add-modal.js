import styled from "styled-components";
import {
    flexAlignCenter,
    flexCenter,
    modalBackGround,
} from "../../../../styles/common";

const TodoAddModal = ({onAddToDo})  => {

    return (
        <S.Wrapper>
            <S.Form>
                <S.Title>
                    <span>ADD TODO LIST</span>
                    <button>x</button>
                </S.Title>
                <S.Content>
                    <input placeholder="제목을 입력해주세요" />
                    <textarea placeholder="할 일 내용을 입력해주세요"></textarea>
                </S.Content>
                <S.Button onClick={onAddToDo}>ADD</S.Button>
            </S.Form>
        </S.Wrapper>
    );
};
export default TodoAddModal;

const Wrapper = styled.div`
    ${modalBackGround};
    z-index: 1000;
`;

const Title = styled.div`
    font-size: 24px;
    ${flexAlignCenter};
    justify-content: space-between;

    & > button {
        border: none;
        cursor: pointer;

        :hover {
            transform: scale(1.2);
        }
    }
`;
