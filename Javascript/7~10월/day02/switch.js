let month = 2;
/* 
변수의 이름은 아무렇게나 막 지어도 괜찮을까요?

가독성을 위하여 해당 변수가 무엇을 의미하는지 명확하게 적어야하며
근래에는 독일어 표기법으로 변수명이 길어지더라도 그 의미를 명확하게 지어 주어야야함
-> 길이는 중요하지 않음 , 변수명만 봐도 이 기능이 무엇인지 유추 가능하게 만들어야 한다.
    내 코드를 유지보수할 다른사람,리뷰할 사람,3개월뒤에 까먹을 나를 위해서 
    코드의 설명을 위해서 주석을 달자!!!!!
변수명, 아이디명, class명 확실하게 다른 사람도 알 수 있게 작성할 것
    
표기법

카멜 표기법 
    ex) 
        let mathScore

파스칼 표기법 
    ex)
        let MathScore

헝가리언 표기법
    ex)
        let iMathScroe 

스네이크 표기법
       let math_score

케밥 표기법
        let math-scroe(x)
        html class={math-score}
*/

//이건 매우 유명한거라 종류정도만 알고 있어도 괜찮다. 대신 알고는 있자


switch(month){
    case 1:
        console.log('January');
        break;
    case 2:
        console.log('Fabruary');
        break;  // switch 문은 case에 해당되면 아래 로직을 모두 실행하기 때문에
                // 탈출문 해당 문장을 더 이상 실행하지 여기서 종료하겠다. 반드시 필요하다.
                // return, break;
    case 3:
        console.log('March');
        break
    default:
        console.log('None')
}


// return - 반환의 개념
// break - 종료의 개념

// 값과 조건, 결과처리 값이 많아지면 switch문 / 적으면 if문  - 주로 if문을 사용하긴 함
