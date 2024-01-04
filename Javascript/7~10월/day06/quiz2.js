const lotto = require('./quiz');

const userNumbers = Array(5).fill().map(() => lotto.genertaedUserNumber())
// 이 배열안에 또 다른 배열이 있는 것 - 다차원 배열
//[[],[],[],[]]

for (let numbers of userNumbers){
  const result = lotto.lottery(numbers);
  console.log('로또 번호의 등수는 : ${result}')
}