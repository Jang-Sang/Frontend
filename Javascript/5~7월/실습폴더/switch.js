let month = 2;
/* 
변수의 이름은 아무렇게나 막 지어도 괜찮을까요?

가독성을 위하여 해당 변수가 무엇을 의미하는지 명확하게 적어야하며
근래에는 독일어 표기법으로 변수명이 길어지더라도 그 의미를 명확하게 지어 주어야야함

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
        break; // 탈출문 해당 문장을 더 이상 실행하지 여기서 종료하겠다. 반드시 필요하다.
              // return, break;
    case 3:
        console.log('March');
        break
    default:
        console.log('None')
}


// return - 반환의 개념
// break - 종료의 개념