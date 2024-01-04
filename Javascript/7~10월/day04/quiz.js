/* 
문제1
    자판기라는 함수를 정의

    자판의 함수는 처음에 실행되었을 때 자판기가 가동되었습니다가 출력
    자판기 함수의 파라미터로는 coin, menu

    잔돈이 0원이면 음료수 이름을 출력
    잔돈이 있으면 음료수 이름과 잔돈을 출력

    음료수보다 금액이 적을 경우 금액이 부족합니다 출력
    없는 메뉴를 파라미터로 전달하였을 때는 존재하지 않는 상품입니다 출력

    메뉴
    솔의눈 : 300원
    비타500 : 500원
    콜라 : 1000원

    함수의 인자는 (투입금액, 음료수명)

    -- 공통 --
    console.log("자판기가 가동되었습니다.")

    -- 성공 --
    console.log(음료수명) -- o
    console.log(음료수명, 잔돈) -- 투입한 금액 - 가격 - 객체(음료수명 키값, 값을 금액)

    -- 실패 --
    console.log(존재하지 않는 상품입니다.)
    console.log(금액이 부족합니다.)


문제2
    010-1234-1234를 파라미터로 전달받아
    010-****-1234로 파싱하는 함수를 정의
*/
// 예외처리를 학습하기 위한 문제풀이 임으로 넣을것과 제외할 것을 구별해서 만들것
const err = {
    101 : "품절된 상품입니다.",
    102 : "금액 부족합니다.",
    103 : "금액을 잘못투입하셨습니다.",
    999 : "음료수를 선택해주세요"
}

function 자판기(coin, product){
    print("자판기가 가동되었습니다.")
    const charge = coin - Price; // 잔돈
    const menu = {솔의눈:300, 비타500:500, 콜라:1000}; // 메뉴 객체
    const Price = menu[product]; // 파라미터로 전달 받은 품목의 가격

    if(!product) return print(err[999], coin)
    if(!Price) return print(err[101], coin) // false를 강제로 true로 출력
    if(coin < Price) return print(err[102], coin) 
    if(coin < 300) return print(err[103], coin)
    
    if(charge === 0) return print(product);
    return print(product, charge)
}

자판기(300, "웰치스")


/* 

문제2
    010-1234-1234를 파라미터로 전달받아
    010-****-1234로 파싱하는 함수를 정의

input값
    010-1234-1234

output값
    010-****-1234

operates
    전화번호의 중간 값을 1234로 바꾸어야한다

keyword
    특정 집단(배열)의 특정 부분을 바꿀 수 있는 알고리즘

1. replace // 정규표현식
2. splice (o)
3. split + 할당 + join (o)

spclie를 써서 내가 원하는 인덱스번혼를 구하고 인덱스번호에서 번호에서
4개의 숫자를 삭제한뒤 ****로 대체한다
*/s

function pasrePhone(phone){
    const newArr = Array.from(phone); // 유사배열인 string을 배열로 변환
    newArr.splice(4 ,4, "*","*","*","*") // 배열로 변환한 데이터에서 특정 부분을 제거 후 대체
    return newArr.join('') // join 함수
}

console.log(pasrePhone("010-1234-1234s"))

function pasrePhone2(phone){
    const arr = phone.split('-')
    arr[1] = "****"
    return arr.join('-')
}

// ** 정규표현식을 이용한 replace로 문자열 데이터 치환하기

