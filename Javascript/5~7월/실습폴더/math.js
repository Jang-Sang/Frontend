console.log(Math.max(1, 2, 3)); // 3
console.log(Math.min(1, 2, 3)); // 1

const a = [1, 2, 3, 4, 5];
Math.max(a); // 5? ==> NaN
Math.max(...a); //5

Math.round(4.5); // 반올림 5
Math.floor(4.5); // 버림 4
Math.ceil(4.5); // 올림 5

console.log(Math.sqrt(4)); // 2

console.log(Math.random()); // 0 ~0.9999999
console.log(Math.random() * 45); //0~43.999999
console.log(Math.random() * 45 + 1); //1 ~ 45.999999

console.log(Math.floor(Math.random() * 45 + 1)); // 1  45 정수

/*
과제
로또 번호 뽑기

1~45까지 랜덤한 숫자 7자리의 배열
ex) [1, 6 ,8, 41, 45, 7]

매번 실행마다 다른 로또번호가 나와야합니다
*/
