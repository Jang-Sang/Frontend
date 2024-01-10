console.log(Math.floor(Math.random() * 10)) // 0 ~ 0.999999
                                            // 0 ~ 9.999999
                                            // 0 ~ 9까지의 랜덤숫자

console.log(Math.floor(Math.random() * 45) + 1) // 0 ~ 44
                                                // 1 ~ 45

                                                
// 퀴즈
// 1번 문제
// 전화번호 가리기
// 010-1234-1234 => 010-****-****                                                
// 번호 input 어떤 것이든 들어가도 위와 같은 결과가 나와야한다
// 010-0000-0000 => 010-****-0000

// 2번 문제
// 로또 번호 맞추기
// 랜덤 생성 [1~45, 1~45, 1~45, 1~45, 1~45, 1~45, 1~45]
// input [?,?,?,?,?,?,?]

// 순서 상관없이 3개 일치 => 4등
// 순서 상관없이 4개 일치 => 3등
// 보너스 포함해서 6개 일치 => 2등
// 보너스 제외 6개 일치 => 1등
// 마지막 인덱스 = 보너스

const num = "010-1234-1234"

function hashNum(num){
  const hashNumber = num.split('-')
  // [010, 1234, 1234]
  hashNumber[1] = "*".repeat(hashNumber[1].length)
  // [1,2,3,4] = ****
  // [010, ****, 1234]
  return hashNumber.join("-")
  // 010-****-1234
}

console.log(hashNumber(num))

const userNumbers = genertaedUserNumber();
const winningNumbers = [6, 18, 28, 30, 32, 38, 15];

function genertaedUserNumber(){
  const numbers = Array(7).fill().map(() => 
    Math.floor(Math.random() * 45 + 1)
  )
  // 중복 번호 -> 예외사항 -> 중복번호가 있으면 오류가 날 수 있다.
  // 중복 번호를 제거할 수 있는 방법은 무엇이 있을까? -> 구글링을 해보자
  // 배열 내 중복된 요소를 제거하는 방법 -> 재사용
  // 로우레벨 단위로 검색할 수 있는 버릇 들이기 -> 구조 단위로 할 수 있어야 구글링 스킬을 업시킬수 있고, 구글링 실력이 늘어야 모르는 것이더라도 사용할 수 있다.

  const lotto = new Set()
  // 해시 테이블로 검색 및 추가가 굉장히 빠르고 중복된 데이터의 저장을 허용하지 않습니다.

  // for(let i=0; lotto.size <= 6; i++){
  //   const randomNumber = Math.floor(Math.random() * 45) + 1
  //   lotto.add(randomNumber)
  // }
  while(lotto.size <= 6){
    const randomNumber = Math.floor(Math.random() * 45) + 1
    lotto.add(randomNumber)
  }

  // Set -> 유사배열객체 -> Array.from()
  return Array.from(lotto)
}

console.log(userNumbers)

const lottery = (numberArray) => {
  /*
    로또 당첨 번호 등수 - 요구사항 분석이 필요하다.
    let rank;

    요구사항 분석
      1. 로또번호 6개를 모두 맞추면 1등
      2. 로또번호 5개 + 보너스 2등
      3. 로또번호 5개 + 보너스 제외 3등
      4. 로또번호 4개 + 보너스 제외 4등
      5. 로또번호 3개 + 보너스 제외 5등

    내가 작성한 로또 번호와 실제 당첨 로또 번호를 비교해야하는데
    보너스, 실제 당첨 번호, 보너스를 맞췄는지 비교할 flag, 맞춘 갯수  
  */

    let rank = "미당첨";
    let winningCount = 0;
    let bonusNum = winningNumbers.pop();
    // bounusNum 변수에는 보너스 번호가 담기고
    // 실제 당첨 번호는 보너스를 제외한 번호들의 집합

    // 실제 당첨 번호에서 내가 몇개 당첨했는지
    // 내 당첨 번호를 순회하여 내가 뽑은 번호가 실제 당첨 번호에 포함되어 있는지 확인
    // 배열을 순회하여 해당/ 배열 내 요소가 / 다른 배열 내 요소에 포함되어 있는지 확인

    for(let num of numberArray){
      if(winningNumbers.includes(num)){
        winningCount ++;
      }
    }

    if(numberArray.includes(bounsNum)){
      bounsFlag = true;
    }

    switch(winningCount){
      case 6 : 
        rank = 1;
        break;
      case 5 : 
        if(bounsFlag){
          rank = 2;
        } else {
          rank = 3;
        }
        break;
      case 4 :
        rank = 4;
        break;
      case 3 : 
        rank = 5;
        break; 
      default : 
        break;     
    }

    return rank
}

console.log(lottery(userNumbers));

module.exports = {
  genertaedUserNumber,
  lottery
}