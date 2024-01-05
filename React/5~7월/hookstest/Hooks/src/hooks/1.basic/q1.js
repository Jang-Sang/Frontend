import styled from "styled-components";
import {useState} from "react";

  /* 
    문제1
    useState 및 styled-components에 관련한 문제입니다.
    아래 문제를 통해 어떠한 경우 state를 사용해야하는지 고민하여 풀어보세요
  
    usestate와 styled-components 사용


    1-1 )
        문제1-1은 input의 value가 placeholder의 값과 같아졌다면
        초록색 글씨로 올바르게 입력하셨습니다가 노출됩니다.

        if)input value = placeholder value (true)이라면 초록색 글씨로 "올바르게 입력하셨습니다"

        만약 입력하지 않았다면 올바르게 글을 작성해주세요라는 문구가
        붉은색 글씨로 노출됩니다

        else) input value = X (false)라면 붉은색 글씨로 "올바르게 글을 작성해주세요"

        state 값으로 green : red 판단

        */

        function Q1() {
         
          const [valid, setValid] = useState(false);
          //const, let [변수명, 바꿀 수 있는 순수 함수] = useState(기본 값)
          //valid 변수 선언 기본값 false
        
          const onChangeValue = (e) => {
            if (e.target.value === e.target.placeholder) setValid(true);
            else setValid(false);
          };
          // onchangevalue 변수 선언    만약 e.target.value과 e.target.placeholder의 타입과 값이 같으면 setValid는 true , 같지 않다면 setValid는 false
        
          const [show, setShow] = useState(true);
          // show 변수 선언  기본값 true
        
          const onClickBtn = () => {
            setShow(!show);
          };
          // onClickBtn 변수 선언 
          // 중간에 setShow(!show); 알아볼것????
        
          return (
            <>
              <h1>문제1</h1>
              <div>
                <h2>문제1-1.</h2>
                <input
                  type="text"
                  placeholder={"김성용"}
                  style={{ textAlign: "center" }}
                  onChange={onChangeValue}
                />
                <S.Message valid={valid}>
                  {valid ? "올바르게 입력하셨습니다" : "올바르게 글을 작성해주세요"}{" "}
                  {/* valid가 true면 올바르게 입력하셨습니다 false면 올바르게 글을 작성해주세요 */}
                </S.Message>
              </div>
      
       {/* 삼항연산자 다시 공부할 것 */}



       {/* 1-2 )
        문제1-2는 보이기 버튼을 누른다면
          
        show / onclickbtn (true)

        button 내부의 텍스트는 숨기기로 바뀌고
        아래 보이는 p태그가 보여야합니다.


        반대로 숨기기 텍스트로 바뀐 button을 누르면
        p태그는 보이지 않아야합니다
                 */}

        <div>
              <h2>문제1-2. </h2>
                <button onClick={onClickBtn}>{show ? "보이기" : "숨기기"}</button>
                {show && <p> " 이 문구는 보이기 상태일 때만 볼 수 있습니다 " </p>}
              </div>


        </>
        );
      }
        export default Q1;

            const Message = styled.p`
                color: ${(props) => (props.valid ? "green" : "red")};
              `;

          const S = { Message,};



       