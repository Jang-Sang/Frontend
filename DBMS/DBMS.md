    DBMS (DataBase Management System)?
        - 방대해진 데이터를 공통된 주제로 묶어 쉽게 관리할 수 있도록 해주는 도구(시스템)
        - oracle, mysql, mariadb, postgresql, mongodb, msql, redis, dynamo
        - 포트 포워딩(포트 연결)을 통해 하나의 DB 서버로 운영할 수 있음
        - 개발자가 데이터에 접근하기 쉽게 해주고, 여러명에서 데이터를 협업하여 운영

        - RDBMS (관계형 DB)

    DBMS
        - 계층형
        - 네트워크형
        - * 관계형
        - * key-value
        - * nosql

    ------------------------------------------------------------------------------

    RDBMS (Relational Dbatabase Management System)
        - 관계형 데이터에 기초
        - 모든 데이터를 2차원의 테이블 (행과 열로 이루어진 표 형태)로 표현
        - 테이블이 서로 연관되어 있기 때문에 다른 DBMS보다 효율적인 스키마 구성
        - 데이터 관를 위해 SQL이라는 쿼리를 사용
        - oracle, mysql, postgresql, msql ...

     ------------------------------------------------------------------------------

     MySQL(mariadb)
        - oracle과 더불어 세계에서 가장 널리 쓰이는 RDBMS 중 하나
        설치(생략)

    --------------------------------------------------------------------------------

     쇼핑몰
        DBMS에 어떤 것을 저장해야 할까요?

        회원정보
        상품정보
        상품이미지
        주문정보
        쿠폰
        이벤트
        적립금


    --------------------------------------------------------------------------------

    데이터타입
        1. 숫자타입
             - 정수형  : int, bigint
             - 소수형  : float, dobule

        2. 문자타입
             - char, varchar, text

        3. 날짜와시간
             - date, dattitme, timestamp

        4. enum
             - enum('f','m') ==> 괄호 안에 있는 데이터만 허용

        5. json
             - json data


    --------------------------------------------------------------------------------

        회원정보
            고유번호 : 겹치지 않는 값 (uuid, int)
            이름 : 문자
            전화번호 : 문자
            주소 : 문자
            아이디 : 문자
            비밀번호 : 문자
            생년월일 : 문자, 숫자
            가입일자 : 날짜
            ...

    --------------------------------------------------------------------------------

        제약조건

            1. NOT NULL : null을 지정할 수 없음 (required)
            2. UNIQUE : 중복된 값을 지정할 수 없음
            3. DEFAULT : 기본 값 (값을 저장하지 않았을 때 저장되는 값)
            4. PRIMARY key, FOREIGN KEY

                대표키 (후보키) --> 다른 데이터와 구분하여 인덱싱할 수 있는 값 --> UNIQUE, NOT NULL

                외래키 --> 다른 테이블과 현재 테이블과 관계를 짓는 키
                           이상현상 방지, 관련된 테이터를 한번에 삭제할 수 있는 기능

            5. AUCU_INCREMENT
                데이터를 넣지 않아도 자동으로 수가 1씩 증가하여 증가
                중복값이 절대 저장되지 않음, 단 직접 데이터 추가가 불가능
                대표적으로 고유번호 idx 옵션을 사용하지만, 보안적으로 중요한 경우는 uuid로 대체하여 사용하는 경우가 많음

    --------------------------------------------------------------------------------

Data?
의미가 있는(수집 할 수 있는) 최소 단위의 정보와 자료

    ex) 떡잎마을에 사는 5잘 남자아이 짱구님이 유튜브를 통해서 저녁 7시에 스테이크를 요리하는 영상을 봤다
    data? --------------------> (돈)
        사는 곳
        나이
        주제
        이름
        성별
        시간 대
        매체
        +

    알고리즘 - 맞춤광고


    Data === Assets
    데이터가 엄청나게 방대해짐 -> 구분, 분리, 관리 -> 관리할 수 있는 프로그램의 필요성

    DBMS(Database Management System) -> 데이터 관리해주는 도구(프로그램)
    base -> 기지, 군락, 집단 -> 데이터 덩어리(data-base)
    => oracle, mysql, mariadb, msql, postgresQL

    * mysql
    https://www.mysql.com/downloads/ -> 최하단 MySQL Community Downloads
    -> 4번째 MySQL Community Server

---

    RDBMS (Relational DBMS)
        관계형 DBMS
        모든 데이터를 2차원의 테이블(표)형태로 표현
        테이블끼리 서로 연관되어 관계를 지어줄 수 있기 때문에 데이터를 더 효율적으로 운용
        (ex. 이상현상(오류) 방지, cascading 상위 데이터삭제 - 하위 데이터 삭제 )

        스케일업(용량을 키운다) 코스트가 많이듭니다.

---

mysql 설치 마무리, 스키마(제약조건), 모델링 단계, CRUD(SQL)

---

    스키마(제약조건)

        1. NOT NULL : null이 들어갈 수 없음 (required)
        2. UNIQUE : 중복된 값을 저장할 수 없음
        3. DEFAULT : 값이 들어가지 않았을 때 자동으로 저장될 값
        4. PK(Primary Key), FK(Foreign Key)
            --- 대표키          --- 외래키

            키
                기본키 (다른 데이터와 구분할 수 있는 값) - 슈퍼키(대표키) -> PK -> NOT NULL, UNIQUE
                                                      - 후보키

                외래키 (다른 데이터 집군과 현재 데이터의 집군과의 관계) 1:N, 상품(상품번호, 가격) <--> 구매내역(누가, 언제, 수단)
                                                                            게시판 <--> 댓글

                                                                    N:M, 인스타 게시글 #ootd #coding #분좋카 <--> #ootd

                                                                    1:1 -> 사용자(id,pw) <--> 사용자 정보(이름, 생년월일)


                                                                    --> erd

        5. AUTO_INCREMENT : 데이터를 넣지 않아도 수가 1부터 다음 데이터가 하나씩 증가되어있는 형태로 증가

---

    모델링 단계

        개념 모델링
            추상적인 단계
            이 엔티티(테이블)에는 어떤 데이터가 될까?
            그리고 엔티티끼리 서로 관계는 어떻게 될까?

        논리 모델링
            제약 조건, 스키마, 추상적이었던 엔티티끼리의 관계나 스키마를 명확히

        물리 모델링
            실제로 DBMS에 데이터를 추가할 수 있도록 형체화
            user_idx pk bigint default

        중복되는 데이터가 없어야하고, 이상(예외) 현상이 일어나지 않도록 더욱 꼼꼼히 만든다(정규화, 반정규화)

---

    SQL
        DML : 데이터 조작어 (CRUD - inset, select, update, delete) -> data
        DDL : 데이터 정의어 (table, database) -> table, database
        DCL : 데이터 제어어 (권한) -> DBMS에서 접근할 수 있는 계정 관리

        * TCL : 그룹, 롤백, 저장

        => SQL은 대소문자 구분이 없습니다.

---

    DDL, DML

    DDL
        CREATE DATABASE 데이터베이스명; => 데이터베이스 생성
        USE DATABASE 데이터베이스명; => 데이터베이스 선택
        DROP DATABASE 데이터베이스명; => 데이터베이스 삭제

        CREATE TABLE 테이블명 => 테이블 생성
        DROP TABLE 테이블명 => 테이블 삭제
        ALTER 테이블 => 테이블 수정

    DML
        (조회)
        select * from 테이블명 (전체 컬럼(열, 분류))
        select user_email from 테이블명 (특정 컬럼)
        select user_email from 테이블명 where user_name = "장상준"(특정 조건에 일치하는 특정 칼럼)

        (생성)
        inset into 테이블명 (user_email, user_name, ...)

        (갱신)
        update 테이블명 set user_email = "test2@test.com" where user_email = "test@test.com"

        (삭제)
        delete from 테이블명 where user_nickname = "장상준"

---

    순서
        1. 데이터베이스 생성 - 최초 1번만
        2. 데이터베이스 선택
        3. 테이블 생성 - 최초 1번만
        4. 데이터 조작어 (select, table)

---

사용자의 고유 id(pk)는 보안상 민감한 자료로, 백엔드에서 로그인 시
유저 식별을 위해 해당 고유 값을 암호화하여 프론트엔에게 전달하고 프론트엔드는 해당 암호를
그 이후의 요청마다 실어서 백엔드에 전달, 백엔드는 키를 통해 복호화

암호화의 방법

1. session
   백엔드에 user 고유값과 암호키를 매칭한 데이터를 보유하고 있는 것
   프론트 --> 암호 --> 백엔드 (고유 id)

2. - jwt (json-web-token)
     id를 암호화해서, 암호화한 통째로 프론트엔드 전달
     프론트 ---> (토큰) ---> 백엔드(복호화)

3. refresh token
   why? 세션이나 토큰이 만료되었을 때 사용자가 모르게 refresh 토큰을 갖고 있다면 재발급하여
   로그인을 유지하기 위해 사용

---

웹스토리지

local storage - 반영구적인 웹 저장소 -> 웹 사이트가 꺼져도 유지 - key : value, value를 사용할 땐 모두 문자열로 반환 - 비회원 장바구니

session storage - 생명주기가 있는 웹 저장소 -> 웹 사이트가 종료되면 같이 사라짐 - ...

cookies - 보안적인 요소, http 통신을 통해, 백엔드와 프론트엔드 교류 - session id(암호), refresh token

차이 - local session -> 보안 X, 다양한 데이터의 형태, 고용량 데이터(4mb, 5mb)
영문자 1byte, 한글문자 3byte
