# JavaScript 총정리

## JS (Java Script)

    1996년 3월 10일
    "html, css"은 정적이다. ==> 페이지가 동적으로 움직이지 않았음 => 페이지를 움직이게 만들고 싶다. -> JavaScript (가벼운 언어)
    10일만에 만들어진 동작만을 위한 가벼운 언어였다.
    성능이 되게 저하되어있었음 <---- google이 진화시켰다
    2009년 v8 엔진(브라우저 엔진) 출시

    JavasScript 인터프리터 언어
        => 변환 과정 없이 소스 코드를 바로 실행할 수 있도록 프로그래밍 언어 ex) js. python

    v8엔진
    java script를 필요에 따라 컴파일 할 수 있도록 성능을 높이는 엔진
    - Java Script의 기능과 확장성이 넓어짐

    컴파일 언어
    A라는 언어 -> B라는 언어 변환하는 과정
    ex) java ,C#, swift ...
    안녕하세요 -> 기계어로 컴파일 -> 000100101011001010001

---

    JavaScript !== Java
    Mocha -- > Live Script ---> Java의 이름을 빌려서 JavaScript가 된 것 뿐

---

## Java Script 적용법

    -내부-
    html 태그 안에
    <script>
    ... Java script
    </script>
    단, 위치와 순서는 중요
    자바스크립트는 위에서 아래로 읽음, 따라서 선언 되어있지 않은 값이나 DOM(요소)를 가지고 오면 찾을 수 없다

    -외부-
    \*.js (확장자명은 js)
    <script src="경로" />

---

## 자바스크립트 입출력

    * 입력 -> 연산 -> 출력
    언제나 코드를 설계해야한다!! 그 후에 구현을 해야한다.
    복습한 것을 가지고 나만의 설계를 만들어야한다.

    출력 값은 이미 알고 있는 값
    출력을 토대로 입력 값을 일부 에상
    연산을 하기 전 먼저 설계를 완료하라 ----> 구현 가능한지 검증
    설계가 완료되면 코드를 작성한다
    예외 상황을 예상한다. (오류 예측)


    1. 입력
        prompt()

    2. * 출력 -- 디버깅 !!!!
        console.log()
        console.error()

        -알림창 (사용자에게 보여주기 위한 용도)-
        -반드시 broweser 환경에서만 작동해야한다-

        중간중간에 console을 찍어봐서 원하는대로 작동하는지 확인해봐야 한다.
        에러를 줄이는 연습을 해야한다!!

        alert()
        confirm()

---

    자바스크립트가 브라우저 내에서 작동해야한다는 건 alert ,confirm과 같이 브라우저 내부 기능을 사용할 때 DOM API (요소나 태그)에 접근해야할 때
    .js 확장자를 터미널로 직접 실행 (브라우저x)

    NodeJS 설치
    크롬의 V8엔진을 브라우저 바깥으로 꺼내어 JS를 브라우저가 아닌 환경에서도 실행시킬 수 있도록 하는 런타임(환경)
    이로 인해 개발자들은 JS로 웹서버를 구성하여 백엔드를 만들 수 있고 프론트엔드 프레임워크 개발도 가능

    reactJS와 같은 js 라이브러리들이 이 nodeJS 환경에서 실행
    https://nodejs.org/ko/
    설치 -> 확인 (node -v)

---

## 자바스크립트의 자료형

    컴퓨터에서 어떠한 값을 사용하려고 하면 컴퓨터에게 값을 기억 시킬 필요가 있다.

    예를 들면 나는 a라는 바구니에 숫자 5를 담아놓을거야 (선언 및 할당) 그리고 어디서든 a라는 이름을 사용하면 숫자5가 나오도록 할거야

    이러한 과정에서 a라는 바구니는 변수라고 부르며 이 때 a의 자료형은 NUMBER이며 숫자 외에는 들어갈 수 없어야합니다.

    그러나, 자바스크립트에서는 이러한 과정을 런타임(실행) 이후 판단하기 때문에 자료형은 존재하지만 어떠한 값이든 변수에 담을 수 있습니다.

    자바스크립트는 동적타입언어이다.

    실행시 타입을 확정시키는건 편하지만 예상치 못하는 오류를 발생시킬 수 있다.

    ex)
    Java (정적 타입 언어)
        int a =5; // number
        int a = "성용" // number --> string (x)

    JavaScript (동적 타입 언어)
        let(var) a =5; // number
        let a = "성용" // string
        실행시 마음대로 바뀔 수 있다.

    TypeScript
        let a:number = 5;
        타입을 확정시킨다. 그 후에 실행

---

## 자료형(단위)의 종류

    * 원시 타입
    number (숫자, 정수 실수를 구분하지 않습니다)
    string (문자열 ex. '안녕하세요') "5" , 5
    boolean (true , false)
    null (값이 명확히 비어있다고 지정해준 상태 )
    let a = null;
    undefined (값이 지정되어있지 않은 상태)
    let a;
    symbol (이터러블 오브젝트의 키[key] 값으로 사용되는 타입)


    * 객체 타입
    object : 객체 [집단] - 이거 하나만 있다고 알고있으면 된다.
    자바스크립트를 이루고 있는 원시값을 제외한 모든 것은 객체입니다.
    자바스크립트에 배열과 map, set의 경우는 모두 눈속임에 불과

    * 저장 공간이 다르다 - 면접에서 굉장히 많이 나온다.
    원시타입은 콜스택(Call Stack)  (자바스크립트 메모리 공간)
    객체타입은 힙(Heap) (주소 값을 참조하기위 해서 주소값을 변수에 할당)
    깊은 복사와 얕은 복사의 차이!!
    ex) let seongyong = {
        age: 20,
        height: 198
        }

    에러날시 콘솔찍어서 왜 에러가 났는지 확인하고 해결해야한다.
    반드시 콘솔 찍어볼것
    오류나면 반드시 디버깅 먼저 할 것

---

## 변수

    var(x), let ,const

    1. 자바스크립트에서 변수를 선얼 할 때 자료형을 필요로 하지는 않습니다
    자바스크립트는 인터프리터 언어로 기계어로 컴파일 x
    따라서 실행 되었을 때 자료형을 추론하여 부여


    2. console.log("안녕하세요") // 안녕하세요
        console.log("안녕하세요")
        console.log("안녕하세요")
        console.log("안녕하세요")
        ex) let a = "안녕하세요"
        console.log(a) // 안녕하세요
        console.log("a") // a

        변수/상수를 선언하는 이유는 알아보기 쉽다.
        컴퓨터에게 값을 기억시키고 재사용할 수 있다

    3. 변수(상수)의 선언 방법
    let 변수명; (선언) ----> undefined -> 콜스택이라는 곳에 쌓인다.
    변수명 = 5; (할당)
    ==> let 변수명 = 5; (선언과 할당을 동시에 했다)

    4. 변수의 종류
    * 변수 (변하는 값)
    ex)
    let a = 5;
    console.log(a) // 5
    a = 6; (o) ---------- 재할당
    console.log(a) // 6

    * 상수 (항상 같은 값)
    ex)
    const a = 5;
    console.log(a)
    a = 6; (error)
    console.log(a)

    5. var의 문제점
    중복 선언이 가능
    let a = 5; -- > a = 6
    let a = 6; ----------- error (a는 이미 정의되어있어요)
    var b = 5;
    var b = 6;

## 호이스팅

    자바스크립트 실행 이전에 평가과정에서 선언부를 먼저 저장
    var의 경우는 선언부가 먼저 저장되어 실행시 선언되지 않아도 undefined라는 값을 갖고있고 이러한 현상이 마치 선언부가 상단에 올라오는 효과 같다고해서 개발자들 사이에서 이를 호이스팅이라고 부르기 시작한 것

    ex)
    console.log(a) // error, 선언도 안되었는데 왜 사용해?
    // undefined
    var a = 5;
    console.log(a); // 5

    이러한 점은 개발자들이 개발에 있어 혼동을 느낄 수 있음
    이러한 점을 어떻게 개선할 수 있을까? ES6 (ES2015)EcmaScript

    이 이후에는 let과 const를 만들어 중복선언 및 호이스팅을 개선하였다.
    (error)    (error)
    간단 요약 : let과 const는 중복선언과 선언전에 사용불가
    이 두가지 이유로 더이상 var는 사용하지 않는다.
    만약에 코드에 var이 사용되어있다면 구글링해서 옛날 코드를 긁어온 것
    그러므로 사용하면 안된다.

    최신기능이라고 쓸 수 없는 이유는 모든 브라우저에 지원되어야(실무에 사용가능해야) 사용가능하다.

## 연산자

### 산술연산자 ( +, -, \*, /, % )

    let a = 5;
    let b = 2;
    console.log(a + b) // 7

    let c = a +b ;
    console.log(c) // 7
    console.log(a - b) // 3
    console.log(a * b) // 10
    console.log(a / b) // 2.5
    console.log(a % b) // 1

    let d = true;
    javascript (true = 1, false = 0)
    console.log(a + d) // 6
    console.log(a + null) // 5
    console.log(a + undefined) // NaN (Not a Number)

### 단항 산술 연산자

    ++ 값이 1 증가
    -- 값이 1 감소

    + 영향x
    - 음수

    let a = 5;
    ++a // 6
    +a // 5

### 전위 연산자

    a++ ==> 연산 후에 값을 더해라
    ++a ==> 연산 전에 값을 더해라

    문자열 연결 연산자
    let a = "안";
    let b = "녕";
    console.log(a+b); // "안녕"

    a = '1';
    b = 2;
    console.log(a+b); // "12"
    => 피연산자 중 하나 이상이 문자열인 겨우 문자열로 동작

### 할당 연산자

    =
    ex) let a = 5;

    +=
    - 값의 누적
    - ex) let a = 5;
    a += 5; // 10 --- > a = a + 5;
    (기존값에서) a 값에 5를 더해라 (누적시켜라)

    let str = "안";
        str += "녕"; -----> str = str + "녕"
        // 안녕

### 우선 순위 연산자 ()

    ex)
    10 * 2 + 2 => 22
    10 * (2 + 2) => 40
    - if(조건식)

---

## 명제의 참/거짓을 구분할 때 사용 --> boolean 타입을 반환 (true / false)

### 논리 연산자

    || 논리합 (or) - 둘 중에 하나라도 true면 true
    && 논리곱 (and) - 둘 다 true여야만 true
    ! 부정 (not) - !true --> false1
    ex)
    (&&)
    true || true --> T --> T
    true || false --> T --> F
    false || true --> T --> F
    false || false --> F --- F

### 비교 연산자

    == 동등 비교 ----------> 값만 같은지
    === 일치 비교 ---------> 값과 자료형이 같은지
    ex) 5 , "5" 5 === "5" // false
        5 == "5" // true

    != 부등 비교 ----------> 값만 다른지
    ex) "5" != 3 // true
        "5" != 5 // false

    !== 불일치 비교 -------> 값과 타입이 다른지
    ex)      "5" !== 5 // true

---

## 제어문

    1. 조건문
    특정한 조건이 주어지고 그 조건의 평가(참,거짓 [논리연산자, 비교연산자])에 따라 결과가 달라지는 명령문

    (1) if .. else
    if --> 만약에 범위가 지정되어 있고, 조건이 1개이면 보통 if문을 사용
    ex)
    let a = 4
    if(a === 5) {
    // 조건식이 참이면 실행할 문장
    ++a
    아니면
    } else {
    // 조건식이 거짓이면 실행할 문장
    --a
    }

    ----------------------------------

    if(조건식1){
    ...1
    조건식이 1이 참이면 실행
    } else if(조건식2){
    ...
    조건식이 2가 참이면 실행
    } else {
    ...
    그 외의 경우 실행
    (조건식1과 조건식2 거짓일 경우)
    }

    2) switch
    변수의 값을 기준으로 일치하는 문장 실행
    여러가지 경우의 수가 많을 경우

    switch(기준으로 삼을 변수){
        case 값1:
            변수가 값1과 일치하면 실행할 문장;
        case 값2:
            변수가 값2와 일치하면 실행함 문장;
        default:
            기본값;
        }


    참일때 실행할 명령과 거짓일때 실행할 명령을 나누는 것 - 분기점을 나눈다
    분기점을 나누는 이유 - 데이터 처리를 다방면으로 할 수 있다.
    ** 예외처리를 하기 위해서
    예외처리란 - 가정한 상황에서 제외되는 상황을 return 시켜주는 것
        결과값의 다양한 결과를 기대할 수 있다.
        error상황이나 오류 처리를 위해서 사용한다.
        보통 분기점 or 예외처리를 위해서 사용한다고 한다.


    2. 반복문
    주어진 조건식이 결과가 참일 때까지 {}(블럭) 내의 명령문을 반복 실행하는 구문

    1) for -- 가족 (forEach, for...in, for...of)
    ex)
    for(초기화식; 조건식; 증감식;) {
        ... 조건식이 참인 경우 실행할 문장
    }

    for(let i=0; i<10, i++){
        console.log(i)
    }
    // 0~9

    for(;;){
        console.log("a")
    }
    // 무한 루프
    // 이걸 하는 순간 내 컴퓨터는 죽는다. 그니까 절대 하지 말 것!!!!
    // 거의 디도스 공격이랑 비슷한 방식이다.


    2) while문
    ()안에 조건식이 true일 동안 실행할 문장

    ex)
    while(조건식){
        조건식이 true일 때 실행할 문장
    }

    let num = 5;

    while(true){
        console.log(num);
        --num;   //4,3,2,1
        if(num === 0) break;
        // 무한 루프에 대한 탈출
    }

    while(num<10){
        num++; -- 이 연산자를 하고 더하겠다는 것 전위연산자
        console.log(num);
        // 5,6,7,8,9
        ++num;
        console.log(num); 먼저 더하고 연산자를 실행한다 후위연산자
        // 6,7,8,9,10
    }

    do ... while
        while 문과 기능은 같지만 조건식이 false라 할지라도 "무조건 한 번"은 실행하고 반복

        let count = 3;
        do {
            console.log(count);
        } while (count < 3)

    while, do...while문은 소프트웨어 단위에서는 거의 보기힘들거나 아예 사용하지 않는다. 그러므로 이건 잊는다.

---

## 제어문

### 조건문

    if ["만약에, 아니면", "조건식"]
    switch ["값", "case", "break"]

### 반복문

    주어진 "조건식"의 결과가 참(true)일 때까지 해당 블럭(구역, { ... } )의 로직(기능,코드)를 반복 실행한다.

    (1) for문 -- 가족 (forEach, for..in, for..of)
    ex)
    for(초기화식; 조건식; 증감식){
    조건식이 참인 경우 실힝할 문장
    }

    for(let i = 0; i < 10; i++){
    console.log(i) -- 반복 실행할 문장
    }

    console    i
    // 0 ----> 1
    // 1 ----> 2
    ....
    // 9 ----> 10 -- 여기까지만 반복


    (2) while문 - 무한 루프에 많이 사용된다
    while(조건식){
        조건식이 true일 동안 실행할 문장
    }

### 무한루프

    외부의 값에 의해 탈출문이 실행될 때까지 무한 반복

    let count = 0;
    while(true){
        .. 무한 반복
        count++;
        if(count === 3) break;
        }

### do... while문

    while문과 기능은 같지만 조건식이 false라 할지라도 "무조건 한 번"은 실행하고 반복

    let count = 3;
    do{
        console.lolg(count)
    } while( count < 3 )
    // 3

---

## 함수 ( Function )

    자바스크립트는 함수 지향형 프로그래밍
    최근 들어서는 객체 지향의 장점들이 녹아드는 중

    함수 지향이란 무엇일까?
    프로그래밍 패러다임의 한 종류
    순수 함수를 조합하고 함수를 일급 객체로서 사용하여 프로그래밍 하는 방식

    프로그래밍 패러다임이란?
    개발자에게 프로그래머로서의 관점을 갖게하고 결정하는 역할 => 개발 방법

    명령형
    절차 지향 : 순서를 중요 시, 컴퓨터의 처리구조와 비슷, 속도가 빠름 (C, Cobol...)
    객체 지향 : 객체(집단)의 상호 작용을 중요 시, 유지 보수 용이 (Java, C++)
    선언형 (어떻게 할 것인가보다는 무엇을 할 것인가가 중요)
    함수 지향 : 순수 함수를 조합하고 프로그래밍 하는 방식 (Javscript)

    함수 지향 프로그래밍 관련 용어

    불변성 = 함수 밖에서 데이터의 변형을 일으켜서는 안된다
    클로저 = 부모 함수가 실행 종료되어도 참조할 수 있는 내부 함수는 기억된다
    순수함수 = 입력 값에만 의존하고, 부수효과는 연산에 영향을 미치지 않는다
    일급객체 함수 = 함수를 입력 값(파라미터, 매개변수, 인자)으로 사용할 수 있고 반환 값(출력)으로 사용할 수 있다
    유지관리가능성 = 외부 효과에 의존되지 않으면 해당 부분만 수정하면 되기 때문에 유지보수가 쉽다
    모듈화 = 함수를 분리하여 재사용 및 관리가 용이하도록 구성해야한다
    부수효과 = 함수 밖에서 함수의 연산에 영향을 끼치면 안된다. (외부효과, 사이드이펙트)
    참조투명성 = 동일한 값에는 항상 동일한 반환 값

    p.s 위 언어를 모두 완벽하게 이해하고 코드를 작성해야한다면 처음부터는 어렵다.
    따라서 당장은 자바스크립는 함수를 기반으로 하는 함수 지향형 프로그래밍이다.

---

## 함수

    어떠한 기능을 만든다에 의존하고 초점
    ex)
    나는 두개의 숫자를 전달받고 두 숫자를 합치는 함수를 작성하고 싶다

### 선언부

    - 선언부는 함수를 실행하는 것이 아니라
    - 기능만 구성하여 컴퓨터에게 기억시키는 것 => 재사용
    function addNumber(파라미터1, 파라미터2, ....)
    ------------------------\
    실행부에서 전달받은 값
    파람, 매개변수, 인자

    {
        ... 작성하고 싶은 연산
        파라미터1 + 파라미터2
        반환 값 (생략가능)
    }

    실행부
    함수명(전달 값1, 전달 값2);

    ex)
    function sum(num1, num2){
        console.log(num1 + num2)
    }
    sum(3,5)
    반환값
    sum(3,5)
    +9;
    console.log(sum(3,5) + 9)
    ------ undefined

    function minus(num1, num2){
        console.log(num1 - num2)
        return num1 - num2
    }
    console.log(minus(3,5) + 9
    -> 기능 -> 값이 할당

    * 반환 값은 해당 함수 실행부에 값을 부여한다는 의미
    만약에 return이 없다면 비즈니스 로직만 실행하고 값은 undefined
    즉 함수의 기능은 정삭작동하나 값은 존재하지 않는 상태
    따라서, 이 함수에 값을 주자 return이 있음

---

    (1) 기명함수, 익명함수
        function hello(){
        console.log("hello")
        }
        기명함수 - hello라는 이름만 가지고 어디서든 재사용할 수 있고 파악할 수 있게 하는 것

        function (){
            console.log("world")
        }
        익명함수 - 재사용 가능성이 없을 때 굳이 이름을 주지 않고 사용 - 일회성으로 사용할 때 사용
        - 하지만 이름이 없으면 실행부 호출X, 콜백 함수나 클로저, 즉시실행함수로 호출


    function(){
        console.log("world")
    }
    -- 다른 함수의 매개변수로 전달되어 실행되는 함수 (콜백함수 클로저, 즉시실행함수)
    -- 재사용 가능성이 없는 경우
    ex) array.map(function(el,index,arr){})


    (2) 재귀함수, 즉시실행함수
    재귀 함수
    함수 안에서 같은 함수를 실행 (반복)
    [코딩테스트 최단 경로 관련 알고리즘 문제 단골]
    함수 안에서 챗바퀴 돌듯이 재실행된다.

    function f(n){
        if(n <= 1){
        return 1
        }
        return n + f(n-1)
    }
        f(10) // 55
        10 + 9 + 8 ... + 1 = 55

    반복문에도 사용되긴 하지만 보통 탐색에 제일 많이 사용된다.
    나중에 무조건 보게 되는 로직

    즉시실행함수
    실행부 없이 선언부만으로 바로 실행
    보통은 익명함수로 주는 경우가 많음

    괄호 두개 열어준다
    (functio(){
        ... 로직
    })()

    (3) * 화살표 함수
    function 키워드 대신 (=>)를 사용하여 보다 간략한 방법으로 함수 선언 가능
    ES6, ES7의 문법
    react 사용하면서 거의 이것만 사용했다...

    ex)
    function a (param1, param2){
    }

    function(){
    }

    일반자바스크립트에서 주로 사용
    ----------------------------

    const a = (pram1, param2) => {
    }
    () =>  {
    }
    리액트에서 주로 사용
    -----------------------------
    기능적으로 function과 화살표함수가 차이가 없다.
    실무에서는 화살표함수 거의 사용한다.
    둘중에 하나로 통일해서 사용해야한다.

---

## 스코프 (scope)

    변수에 접근할 수 있는 범위
    변수를 찾기 위한 규칙
    자바스크립트에서 스코프란 전역스코프와 지역스코프
    전역 스코프에는 어떠한 곳에서도 접근이 가능한 값이 지정
    지역 스코프에는 특정한 블럭 내에서만 접근이 가능한 값 지정

### 지역 변수

    특정한 구역 내에서만 사용할 수 있는 변수 (지역 스코프에 포함)

### 전역 변수

    전체에서 사용이 가능한 변수, 웹 페이지가 닫혀야만 메모리에서 사라짐

    function printNumber(){
        const number = 5;
        console.log(number)
    }
    printNumber(); // 5
    console.log(number) // 5

### 스코프 체인

    let c =7;
    a 구역 {
        let b =5;
        b구역 {
            let a =5;
            let c =3;
            console.log(a,b,c)
        }
        console.log(c) -> b구역 내의 결과값 출력 X
    }

    a 구역의 결과값은 b만
    b 구역의 결과값은 a,c만 출력
    제일 위에있는 let c=7은 어디서든 출력이 가능하지만 b구역에서는 안에 있는 let c=3 이 있기에 스코프체인에 의해 b구역에서의 c 값은 3이다.
    => 가장 가까이 있는 값을 가져간다.
    지역변수가 전역변수보다 더 우선순위를 가지고 있다.

    자바스크립트는 실행하기전에 평가와 실행과정으로 나뉜다.
    그러면서 스코프 등록이란 것을 하는데 선언부가 위로 올라가는 것을 호이스팅이라고 한다.

---

## 타입변환

    자바스크립트는 데이터 타입이 없다 있다? 있다.
    런타임 시 안에 넣어있는 값에 따라 타입이 추론되어 부여 --- 암묵적 타입 변환

    그러나 자바스크립트의 타입은 특수한 경우 강제적으로 형변환 되는 경우도 있고
    개발자의 의도에 따라 형변환 되는 경우가 있습니다. ---- 강제 타입 변환

    let a = 10;
    let b = 10 + ''; // "10" -> 자바스크립트가 암묵적으로 변환시켜 준 것
    console.log(typeof a)
    // 디버깅용으로 사용
    // 내가 원하는 값으로 들어갔는지 확인할 때 사용
    // 타입을 콘솔에 찍는 것
    // 문자열과 숫자를 구분할 때

    function a(number){
        if(!number) return; <----------- ealry retrun;
        let parseNumber = number;
        if(typeof number === string){
        parseNumber = parseInt(number)
        }
    }

### 얼리리턴

    리턴 아래는 실행하지 않고 일찍 반환하는 것
    얼리리턴은 리턴값에 아무런 영향을 주지 않는다.
    얼리리턴과 리턴을 구별할 수 있는 방법은 로직을 짠 개발자만이 알 수 있다.
    그러므로 보통 다른 개발자들을 위한 설명이나 시그널을 남겨 놓는다.

### 강제 형변환

    1. 문자열
        1+"2" // '12'
        1-'1' // 0
        1*'10' // 10
        String(1) // "1"
        String(NaN) // "NaN"

    2. 숫자형
        Number('0') // 0
        parseInt('0') // 0

    3. 불리언형 - 값이 있는가 없는가 파악하는 것
        Boolean(1) // true
        Boolean(undefined) // false
        Boolean(Nan) // false
        Boolean('') // false
        Boolean('false') // true   문자열 false
        Boolean(null) // false  비어있는 상태

    1 '' / undefined / null // false  값이 비어있는지 확인할 때 쓰는 것(조건식)
        Boolean({}) //  true
        Boolean([]) //  true

    ---------------------------------------------------------------------------------

# Object (객체)

### 매우 중요!!!!!!!!!!!!!!!!!!!!! 프론트엔드 코테에서 제일 자주 제일 어렵게 나오는 주제

    자바스크립트는 객체기반의 스크립트 언어이며 사실상 자바스크립트를 이루고 있는 모든 것이라고 해도 무방, 원시 타입 외에 데이터는 모두 object이기 때문이다.

    자바스크립트의 객체는 키와 값으로 구성된 속성들의 집합

### 키

    집합에서 특정한 값을 찾기 위해 다른 값들과 비교되는 값 (유일)

### 프로퍼티

    키로 이름을 구별하고 해당 키의 값으로 구성되어있다.
    ex)
    <input placeholder = "비밀번호를 입력해주세요" />
    input 태그의 프로퍼티 / placeholder = 키 / 비밀번호를 입력해주세요 = 값

    선언 방법
    let seongyong = {
        name: "김성용",
        age: '20',
        height: 190
    }

    let obj = new Object() // (x)

### 접근 방법

    (1) 마침표 표기법
    console.log(seongyong.name)
    // '김성용'

    (2) 대괄호 표기법
    console.log(seongyong["name"]) // "김성용"

    // 객체의 모든 키 값에 접근
    ex) for (let key in seognyong){
        console.log(seongyong[key])
    }

    * 객체는 왜 중요할까요?
    원시데이터가 아닌 모든 데이터는 객체이다.

    1. 여러데이터를 공통된 주제로 묶을 수 있다.
    let kong = {
        animal: "dog",
        age: 11
    }

    2. JSON (Javasciprt Obejct Notation)
        1. 자바스크립트에서 객체를 만들 때 사용하는 표현식
        2. 데이터를 전송하거나 저장할 때 많이 사용되는 경량의 교환 방식

        {
        id: 1,
        title: "오늘은 좋은 하루입니다",
        User: {
            name: "김성용",
            profie_img: "https://이미지저장소.com/profile/seongyong"
        },
        CreatedAt: 2023.03.19,
        Content: "여러분들 오늘 하루도 고생 많으셨습니다",
        Comments: [
            {
                content: "강사님도 고생 많으셨습니다",
                User: {
                    name: "지형님",
                    profile ...
                }
            },
            {
                ...
            },
            {
                ...
            },
        ]
        }

---

## Array (배열)

    자바스크립트에서 배열은 이름과 인덱스로 참조되는 (정렬된) 값의 집합
    배열을 구성하는 각각의 값을 요소라고 하며, 배열의 위치를 가리키는 숫자를 인덱스라고 합니다.

    ex)
    const arr = [1, 2, 3, 4, 5, 6]

    {
        0: "김성용"
        1: "지성경님"
        2: "허은상님"
        ...
        length: 6
    }

    arr[0] = "김성용"

### 자바스크립트 배열의 특징

    1. 배열 요소의 타입이 고정되어 있지 않습니다
        ex) [1, "김성용", {}, true]
        arr[arr.length -1]
        arr.at(-1)

    2. 배열의 인덱스는 연속적이지 않아도 되며, 특정 배열 요소가 비어있을 수 있습니다.
        const arr = [1,2,3,4]
        arr[1] = 0
        // 1,0,3,4
        arr["seognyong"] = "김성용" - 이게 안될거 같지만 가능하다. 단지 이걸쓰느니 다른 방법을 사용하는게 맞지만 일단은 사용가능하다는게 중요

    3. 자바스크립트의 배열은 Array라는 객체로 다루어진다

    배열의 길이 = const arr = [1,2,3,4]
                 console.log(arr.length) // 4

---

## 배열의 내장함수(부가 기능) - 배열.XX 이렇게 쓰는게 내장함수

    pop, push, unshift, shift, concat, join, reverse, sort, slice, splice ...

    key point
        - 원본 배열
        - 반환
        - 위치

    배열명.push()
        - 원본 배열의 *맨 끝*에 요소를 추가
        ex) const arr = [1,2,3,4]
            arr.push(5)
            console.log(arr)

        배열명.pop()
        - 원본 배열의 맨 끝에 요소를 제거하고 제거된 요소를 반환한다
        ex)
        const arr = [1,2,3,4,5]
        const el = arr.pop();
        console.log(arr, el)

    배열명.unshift()
        - 원본 배열의 맨 처음에 요소를 추가

    배열명.shift()
        - 원본 배열의 맨 처음에 값을 제거, 제거된 요소를 반환한다

    배열명.concat(arr1, arr2) : 인자로 두 배열을 전달받고, 두 배열을 합친 복사본 배열을 반환

    배열명.join()
        - 배열 요소 사이에 원하는 문자를 삽입한 문자열을 반환

    배열명.reverse()
        - 원본 배열의 순서를 역순 배치

    배열명.sort()
        - 원본 배열의 정렬 (오름차순, 내림차순)

    배열명.splice(start, deleteCount, item)
        - 원본 배열의 요소를 제거하고 해당 요소 위치에 값을 추가, 제거된 요소를 반환
        ex)
        const arr = [1,2,3,4,5]
        const newArr = arr.splice(1,2,'배고프다')
        console.log(arr, newArr)

    배열명.slice(star, end)
        - 인자로 지정된 배열의 부분을 복사합니다. 이 때 원본 배열은 수정되지 않습니다.
        ex)
        const arr = [1,2,3,4,5]
        const el = arr.slice(2,4); // [3,4]
        // 특정 값의 위치를 찾거나 유무를 찾을 때

    배열명.indexOf()
        인자(파라미터, 매개변수)로 전달받은 값이 해당 배열에 있는지 인덱싱하고 값이 있다면 가장 먼저 있는 요소의 인덱스 값을 반환, 없다면 -1을 반환
        const arr = [1,2,3,4,5]
        const index = arr.indexOf(3) // 2
        const index2 = arr.indexOf(6) // -1
        if(index < 0) return;
        // 조건식에 특정한 변수명만 들어가면 해당 변수가 비어있는지 아닌지만 확인
        // indexOf의 경우가 요소가 없으면 -1을 반환하기 때문에 일반 조건식 비교로 비교해서는 안됩니다.
        // 반드시 부등호로 비교

    배열명.includes()
        const arr = [1,2,3,4,5]
        const el = arr.includes(5) // true

        if(el){
            ...
        }

        ES7(2016)에 출시, IE 9 이상, 인자로 지정된 요소가 있는지 없는지를 탐색하여 t/f(검사)
        단순히 검사용도로는 map이나 set이 더 빠르다.
        하지만 목적에 따라 includes,indexOf,map,set의 사용이 달라진다.

    배열명.lastIndexOf()

---

## 콜백 함수

    한 함수의 인자로 또 다른 함수 전달받아지고 해당 함수를 전달 받은 부모함수가 실행하는 경우

    function parent(number, action){
        for(let i=0; i<number; i++){
            action(i)
            // action(0), action(1) ... action(0...)
        }
    }

    parent(5, (index) => {
        console.log(index * 2)
    })

---

## 배열의 고차함수 - 배열 중 제일 중요한 파트 프론트엔드 개발자가 된다면 제일 많이 사용하는 것

    map, filter, find, findIndex, reduce, every, some, sort

### keyword

    * 새로운 배열 반환

### map

    배열의 모든 요소를 순차적으로 순회하며 인자로 주어진 콜백함수의 반환 값으로 새로운 배열을 생성, 기존 배열을 훼손하지 않습니다.
    - 처음부터 순서대로 한번씩 모두 다시 도는 것
    const arr = [1,2,3,4,5]

                            요소  인덱스  원본배열
    const newArr = arr.map((el, index, originArr) => {
        return {
            originNumber: el,
            addNumber: el + 10
        }
    })

    ex)
                 ---arr--
    function map(originArr, callback){
        cost returnArr = [];
        for(let i =0; i< originArr.length; i++){
            const result = callback(originArr[i], i, originArr)..
            returnArr.push(result)
        // {originNumber:1, addNumber:11}

            }
            return returnArr
        }

    console.log(newArr)
    [ {originNumber:1, addNumber: 11}, {originArr:2, addNumber:12 } ... ]

    나중에 일할때 순차적인 것을 잘 모르면 일할때 고생한다.
    for문의 반복이지만 배열을 반환한다.

### filter

    배열의 모든 요소를 순회하며 콜백함수의 반환 값이 true인 요소만 추출하여 새로운 배열을 만든다.
    false면 새로운 배열에서 제외한다

    ex)
        const arr = [
            {
                id: 1
                name: "김성용"
            },
            {
                id: 2
                name: "김성용2"
            },
            {
                id: 3
                name: "김성용3"
            }
        ]

        const filterArr = arr.filter((el, index, originArr) => {
            return el.id !== 1
        })

        console.log(filterArr)
        [ {id:2, name:"김성용2"}, {id:3, name"김성용3"} ]

---

### find

    배열의 모든 요소를 순회하며 주어진 콜백함수를 실행하고 그 반환값이 true인 것 중 첫번째 요소를 반환

### findIndex

    배열의 모든 요소를 순회하며 주어진 콜백함수를 실행하고 그 반환값이 true인 것 중 첫번째 요소의 인덱스를 반환
    찾고자 하는 데이터가 없다면 -1을 반환

---

### reduce

    누적 값을 구할 때 많이 사용, 요소들이 계산된 누적값과 현재 요소를 return

---

### every

    배열의 모든 요소를 순회하며 해당 조건이 모두 만족하면 true 아니면 false를 반환

### some

    배열의 모든 요소를 순회하며 해당 조건이 일부 만족하면 true 아니면 false를 반환

---

    이터러블한 객체
        - 순회 가능한 객체

    이터러블 객체의 반복문
        - for
        - forEach
        - for in
        - for of

    배열의 생성
        - Array.from()
        - Array.fill()

---

## DOM API

    (Document Object Model) 문서 객체 모델
    흔히 HTML에서 사용하는 div, span, input과 같은 요소를 DOM이라고 한다

    (Application Programming Interface) API
    응용 프로그램 사이에서 통신에 사용되는 언어와 메시지를 이야기 합니다.

---

## DOM selector

    ex)
        <div id='menu'></div>

        HttpCollection - Live
        NodeList - noneLive

    1. document.getElementById() // 단일 객체 반환
    2. document.getElementsByClassName() // 유사 배열 객체 반환
        - HttpCollection
    3. document.getElementsByTagName()
        - HttpCollection
    4. document.getElementsByName()
        - NodeList
    5. document.querySelector() // 단일 객체 반환
    6. document.querySelectorAll()
        - NodeList

    react는 DOM의 접근을 지향한다. 사용 못하는건 아니지만 권장하지는 않음.
    모바일로 갈거면 react-native,flutter가 시장을 반반 지배한다.

    * NodeList vs HttpCollection
    HttpCollection: live  , 유사 배열 객체 + 이터러블
    라이브하다는것 - 상태변화를 실시간으로 감지할 수 있다는 것
    NodeList: none-live , 유사 배열 객체 + 이터러블

    두개의 차이를 확실히 볼 수 있는 곳은 반복문이다.
        ex)
            <div class="red"/>
            <div class="red"/>
            <div class="red"/>

            // const $els = document.getElementsByClassName('red')
            const $els = document.querySelectorAll('.red')

            for(let i =0; i<$els.length; i++){
                $els[i].className = 'blue'
            }

    * 유사배열객체
    객체는 객체인데 배열의 속성을 가지고 있는 객체
        let obj {
            0: '1',
            1: '2',
            length: 2
        }

        for(let i=0; i<obj.length; i++){
            console.log(obj[i])
        }

    * for of(o) for(o)
    * forEach(x) map,filter(x)
    * NodeList는 forEach 사용이 가능, 단 배열 메서드 사용불가

    * HTMLCollection, NodeList을 배열로 사용하고 싶다라고하면 배열로 제작해야 한다.
    유사배열 객체 배열로 제작할 수 있다.
        (1) Array.from(els)
        (2) const arr = [...els]  전개연산자
        (3) HTMLCollection.prototype.forEach = Array.prototype.forEach (권장x)
            프로토타입을 추가해서 사용, 단 한번 사용하면 모든 http를 사용하는 거라 권장하지 않는다.
        클래스를 써서 새로운 인스턴스를 추가해서 사용하는 것을 추천

        사용의도에 따른 선택
        HttpCollection은 실시간 적용이 되서 확인이 가능하다.

---

## DomAPI 왜 사용할까?

    사용자의 행위에 따라
    HTML 요소(div,span)의 properties를 바꾸기 위해 사용합니다
    => html, css 정적인 페이지 => 동적으로 만들기 위해서
    요즘에는 css에도 많은 기능(hover라던지 기타등등)이 추가되어 많이 달라졌다.

---

## properties (속성)

    개발자 도구에서 확인 가능, DOM API를 사용하는 궁극적인 목표
    value
    innerText
    innerHTML
    style
    classList
    onclick
    onchange
    ...
    event...

---

## addEventListener

    자바스크립트에서 가장 권장되는 이벤트 등록 방식
                                 ------ 사용자의 행위

    ex)
    Dom || window.addEventListener("이벤트명", 콜백함수, options)

    document.getElementById("user-name").addEventListener('click', ()=>{console.log("클릭되었습니다")} )

### 자주 사용하는 이벤트명

    click : 요소를 클릭했을 때
    mouseover : 요소에 마우스를 올렸을 때
    mouseleave : 요소에서 마우스가 떠났을 때
    mousedown : 요소를 누르고 마우스를 아직 때기 이전인 상태
    mouseup : 요소를 누르고 마우스를 땐 상태
    mousewheel : 마우스 휠이 이동되었을 때
    mousemove : 마우스가 움직일 때 마다
    focus : 폼 요소의 입력 요소가 활성화 되어있을 때
    blur : 포커스에서 벗어났을 때
    change : 폼 요소의 입력 요소의 값이 변경되었을 때
    keypress : 키를 처음 누른 순간
    keyup : 키를 눌렀따가 땐 순간
    keydown : 키를 누르고 때기 이전일 때

    widnow, document
    load - 웹 페이지가 로드 되었을 때
    * resize - 웹 페이지의 사이즈가 조정 되었을 때 - 반응형 웹을 만들때 중요하다
    scroll - 스크롤바의 움직임이 생겼을 때
    unload - 웹 페이지가 닫혔을 때

    -- 페이지가 리사이즈 되었을 때 변수에 값을 재할당 (돔요소가 전역변수로 활용 되었을 때 동적으로 요소에 접근)
    let $dom = document.getElementById("seongyong").width
    widnow.addEventListener('resize',()=> {
        $dom = document.getElementById("seongyong").width
    })


    -- 특정 이벤트가 일어났을 때 특정 요소의 길이를 선언
    document.getElementById("button').addEventListener("click",()=>{
        let $dom = document.getElementById("seongyong").width
    })
    -- 웬만한 이벤트는 이걸로 해결이 되지만 위에 전역변수를 사용시 등 특정한 상황에서는 필요하다.

    react 사용시 dom api에 접근하지 않는다.
    react에서 dom api에 접근할 필요가 없어서 사용을 잘 안할 뿐이지 사용을 아예 안하는건 아니다.
    document에 접근할 때도 종종 있다.

---

## classList

    해당 요소가 가지고 있는 클래스의 목록을 나타내는 DOM properties
    <div class="seongyong on add flex"/>
    document.getElementsByClassName("seongyong").classList
    // seongyong on add flex
    classList.contain("on")
        해당 클래스가 있는지 없는지 여부를 판단하여 boolean 형태로 반환
    classList.add("class")
        해당 요소에 인자로 전달된 클래스를 DOM에 추가
    classList.remove("class")
        해당 요소에 인자로 전달된 클래스를 DOM에서 제거
    ex)
    <div class="tab" />
    <div class="tab" />
    <div class="tab on" />
    <div class="tab" />
    <div class="tab" />

    const tabs = document.querySelectorAll(".tab")
        tabs.forEach((el)=>{
            el.addEventListener('click', (e)=>{
                console.log(e)
                const selectTab = e.target;
                selectTab.classList.add('on')
            })
        })
    클릭된 클래스가 전달된다.

### this (이거, 자기 자신)

    자바스크립의 this는 동적으로 바인딩(결정) 되며
    => 누가 this를 불렀는가에 따라서 값이 바뀐다
    addEventListener의 this는 이벤트 자체를 불러옵니다.
    따라서 이벤트가 일어난 대상을 찾기위해선 e.target을 통해 명확한 요소를 불러올 수 있음

---

## attribute(속성)

    setAttribute("속성명", 속성값) - 설정
    getAttribute("속성명") - 속성 값의 조회
    removeAttribute("속성명") - 삭제

---

### 버블링

    한 요소에 이벤트가 발생되면, 이어서 부모 요소의 핸들러가 동작
    => 하위 요소의 이벤트가 부모 요소의 이벤트로 전파

### 캡쳐링

    버블링과는 반대, 부모 요소를 클릭했을 때 하위 요소로 이벤트가 전파되는 것
    캡쳐링의 기본 옵션은 false
    addEventListener의 options 인자로 t/f를 변동 가능
    ex)
    el.addEventListener('click', function(){}, true)

---

### 프레임워크 vs 라이브러리

    프레임워크는 개발자에게 선택권 x, 규칙을 제공
    라이브러리는 개발자에게 선택권 o, 환경만 제공
    ex) spring, django, nextJS
    ex) nodeJs에서 설치되는 모든 패키지, react, jquery
    라이브러리 (도서관 = 다양한 책들의 집합 => 대여)

---

## 자바스크립트의 메모리 저장 방식

    힙 : 객체의 값 할당이 이루어지는 곳
    콜 스택 : 힙에 저장된 객체를 참조하여 호출된 함수의 정보를 저장하고 실행하는 곳
    힙에는 객체가 저장
    콜스택에는 원시 타입 저장

    1. 원시 타입 데이터 저장 방식
    - 콜스택에 값이 바로 저장
    - 렉시컬환경에 메모리 주소값이 저장
    2. 참조 타입 데이터 저장 방식
    - 배열, 객체, 함수 등은 참조 타입이므로 메모리 힙에 저장
    - 참조 타입은은 데이터가 저장된 메모리의 주소를 콜스텍에 저장
    - 변수에는 객체의 값이 아닌 객체가 저장된 힙의 주소값이 저장
    ex)
    let a = 5;
    let b = {};

---

### 얕은 복사

    값을 복사하여 할당 했을 때 같은 메모리 주소를 가리키는 값

    let obj = {
        name: "김성용"
    }
    let obj2 = obj
    obj.name = "윤승빈님"
    console.log(obj2.name) // 승빈님

### 깊은 복사

    얕은 복사와 달리 주소를 복사하여 공유하는 것이 아니라 아예 새로운 값을 메모리에 저장하고 해당 주소를 가리키는 것
    let obj = {
        name: "김성용"
    }
    let obj2 = {...obj}

    obj.name ="윤승빈님"
    console.log(obj2.name) // 김성용
    console.log(obj.name) // 승빈님

---

## 빌트인 객체

### Number

    Number.MAX_VALUE // 자바스크립트 내에서 사용할 수 있는 가장 큰 수
    Number.MIN_VALUE // 가장 작은 수
    Number.isFinit() // 유한수인지
    Number.toString() // 숫자를 문자열로 바꾸어줌

### Math

    * Math.min(1,2,3) // 최솟값
    * Math.max(1,2,3) // 최댓값
    * Math.random() // 0~1 사이의 무작위 숫자 반환(소수형)
    * Math.round() // 소수점 첫번째 자리에서 반올림
    * Math.floor() // 소수점 이하 버림
    * Math.ceil() // 소수점 이하 올림
    * Meth.abs() // 절대값
    Math.sqrt() // 제곱근
    Math.cbrt() // 세제곱근
    Math.log() // 자연로그
    ..
    Math.pow, Math.log2(), Math.PI ...

### String

    String.length() : 문자열의 길이
    String.protype.charAt(index) : 해당 index의 문자
                  .concat(문자열) : 문자열 두개를 이어붙임
                  .replace('a', 'b') : a라는 문자를 b로 대체한다
                  .toLowerCase() : 전부 소문자로 전환
                  .toUpperCase() : 전부 대문자로 전환
                  .split() : 분할, 쪼개기
                  .repeat(n) : n번 문자열 반복
                  ex) \*.repeat(4) // \*\*\*\*

### Date

    new Date()
    // 현재 날짜와 시간을 가지고 오는 인스턴스
    // * 로컬 환경 컴퓨터 시간
    // 로컬 환경이아닌 서버 환경으로 가지고 올 수 있는 라이브러리 momentJs, dayJs, luxon
    // unix 1970.01.01 --> 얼마나 지났는지 계산하는 방법 (초 단위)
    const date = new Date()
    console.log(date) // Thu May 16 2022 17:16:13 ... (한국 표준시)

---

## 자바스크립트의 스레드 (코드를 처리하는 일꾼)

### 자바스크립트는 싱글 스레드

    a ... (3초)
    b ... (2초)
    c ... (5초)
    d ... (30초)
    e ... (8초)
    main ... (5초) --- 53초

    싱글 쓰레드인 자바스크립트의 특징은 현재 실행중인 태스크(기능, 구간, 섹션)가 종료되어야만 다음 태스크를 실행합니다.
    이러한 특징 때문이 처리 시간이 지연되는 함수의 경우 굉장히 비효율적
    따라서 자바스크립트는 이벤트 루프를 활용하여 기존의 태스크가 종료되지 않아도 다음 태스크를 곧바로 실행하는 방식인 비동기 처리방식을 도입 하였습니다.

### 동기 vs 비동기

    동기는 코드를 순차적인 흐름으로 진행
    비동기는 동기가 아닌 코드를 비동기라고 부른다.
    비동기는 자바스크립트에서 이미 promise등 다양한 함수가 준비 되어있기에 이벤트 루프같은 곳에서 사용하면 된다.
    비동기는 동기적인 기능이 끝나고 작동된다.
    비동기의 함수를 callback함수로 전달해주는 것

---

## 대표적인 비동기 함수

    setTimeOut, setInterval, Promise

## 비동기 처리

    비동기 처리 시간이 각각 다르기 때문에 결과를 예상할 수 없음
    따라서 결과에 따라 다음 함수(비동기 이후 실행된 동기적이 함수)를 실행시키기 위하여 비동기를 동기적으로 처리

    (1) call back
    function 비동기 (callback) { ---> 비동기 함수
    setTimeOut(()=> {
        console.log("하나")
        callback(
            setTimeOut(()=>{
                console.log("둘")
            },1000)
        ) ------- > 비동기
    }, 1000)
    콜백 함수를 하나 처리하고 또 콜백함수가 있으면 깊이가 점점 깊어진다.
    } --------------------------------------------------> 콜백 지옥

    function callback () { ---> 비동기 이후에 실행되어야 함
        setTimeOut(()=>{
            console.log("콜백"ㄴ)
        }, 1000)
    }

    (2) promise
    ES6에 도입, new 연산자와 함꼐 호출하고 인자로 콜백을 받습니다.
    Promise는 호출 시에 바로 실행은 되지만 그 안에 resolve와 recject가 둘중 하나가 호출되기 전에는
    then과 catch로 넘어가지 않습니다.
    then --> promise 성공했을 때
    catch --> promise 실패했을 때

    ex)
    let num3
    const result = new Promise((resolve, reject) => {
        비동기 함수 ...
        num=2
        resolve(num)
        resolve(성공 인자)
        reject(실패 인자)
    }).then((인자) => {
        console.log(인자) // 성공 인자
        d(인자)
    })
    .catch((인자) => {
        console.log(인자) // 실패 인자
    })
    d(num)

    (3) async await
        Promise로 비동기 처리를 한다고 하더라도, 콜백 지옥이 연상되는 것은 마찬가지 비동기를 아예 동기적인 흐름 처리로 만들어버리자
        async를 통해 함수를 promise 변환
        await을 통해 해당 함수가 실행될 때까지 (promise가 resolve, rject) 대기

    async function a(){
    }
    const a = async () =>  {
        try {
            const result = await new Promise(...)
            console.log(result) --> return promise resolve
        } catech(err) {
            console.log(err) --> return promise reject
            // 예외 상황 처리문
        }
    }

---

## ajax?

    본래 의미는 Javascript를 비동기 통신, 클라이언트와 서버 간의 데이터를 주고 받는 기술
    www.naver.com <---- html,css,js
                  ----> com/login <--- html, css, js

---

## axios, fetch

    기존의 Web에서는 비동기 요청을 보내기 위해 XML HTTP REQUEST(XHR) 객체를 생성했어야함
    그러나 이러한 XHR은 요청의 상태나 변경에 따라 개발자의 의도에 맞게 사용하기는 적합지 않았음
    따라서 이를 보완하기 위하여 HTTP 요청에 최적화 되고 추상화도 되었이는 API들이 생겨나기 시작함
    대표적으로 axios, fetch

    fetch
        ES6부터 자바스크립트의 빌트인 객체로 내장 되어있음, 안정성이 뛰어남, Promise 기반으로 만들어져 코드 또한 간편함

        ex)
            fetch(url, option).then().catch()

    단 단점이 있다면 데이터 요청 및 응답데이터 수신 시 JSON를 데이터를 받아올 수 없기 때문에 파싱 작업을 해야함

    ex)
    reoponse.json()
    // string -> json
    JSON.stringfy()
    // json - string

---

## axios

빌트인 객체x
CDN으로 라이브러리를 가지고 와서 사용, Promise 기반
크로스브라우징에 신경을 썼음 거의 모든 브라우저 호환
다양한 기능을 기원 (timeout, interceoptor ...)
https://axios-http.com/kr/docs/intro
라이브러리 설치에 의한 의존성 상승

---

## location 객체

    자바스크립트의 window가 갖는 빌트인
    그러나 window는 생략이 가능
    현재 인터넷 창의 URL(주소)를 나타내는 객체

### 메서드

    객체의 속성의 값으로 함수가 들어갈 수 있을까?
    객체의 프로퍼티의 값이 함수일 때 일반 함수와 구분을 위해 메서드라고 부른다

    ex)
        let console = {
            log : function(message){
                console.log(message)
            },

            print(message){
                ...
            },

            print(message){
                ...

            }   // 제일 많이 사용하는 방법
        }

    message.print("장상준")
    console.log() - 메서드

    키 = print , value = function
    화살표 함수는 특정한 경우에 오류가 날 수도 있기에 주의해서 사용할 것(자바스크립트에서만)
    console.log() => console이라는 함수에 log라는 키값과 ()안에 value로 이루어져있는 것 => 이것도 메서드이다!!
        => 자바스크립트안에 빌트인 객체이다.

### 속성

    hash = 도메인에 #뒤에 붙은 값을 가지고옴
        ex) www.seongyong.com#blog
        ==> blog

    hostname = URL의 도메인
    origin = 프로토콜 + URL 도메인 + 포트번호
    pathname = 원본 주소 제외한 나머지 경로
    ex) www.seongyong.com/post
        ==> post

    port = 포트번호
        서버 -> 호텔
        포트 -> 방

    protocol = http/https

    ** search = URL에 추가된 쿼리 스트링을 가지고 옴
        ex) www.seongyong.com/goods?good_idx=380502
        good_idx = 380502

    - 이전 페이지의 대한 값을 다음 페이제이서 가지고 있을 수 없기 때문에 주소로 통해 데이터를 전달
    - 같은 페이지 내라고 하더라도 사용자에게 현재 위치를 알려주고 주소의 history를 남겨 뒤로가기를 지원하기 위하여 전달
    * href = 현재의 URL을 반환, 해당 속성의 값을 바꿔주면 페이지가 이동

    histroy 객체
        사용자가 방문한 URL의 기록
        이전 페이지 혹은 다음 페이지로 이동 시킬 수 있는 객체
