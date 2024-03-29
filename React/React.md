# ReactJS ?

    복잡한 사용자 인터페이스를 쉽게 주축하기 위해 페이스북팀에서 제작한 자바스크립트 기반의 라이브러리

## ReactJS의 구동원리와 핵심 컨셉

    Components
    - 한가지 이상의 기능을 수행하는 UI 단위로 분리한 페이지 조각
    - 재사용이 용이하고 유지보수에 효율적

    Virtual DOM
    - React가 가지고 있는 가상 돔, 돔의 복사본
    - state(상태)의 변화를 react에서 감지하고 있으며 state의 변화가 생긴다면
        해당 state를 가지고 있는 Components의 가상 돔과 실제 돔을 비교하여 변화가 생긴 Components만 리랜더링

    KeyPoin
        state(상태)
        Components(UI 분리)
        Virtual DOM(가상돔 -state변화 - 감지 - 비교 - 리랜더)

---

## CSR, SSR

    주체
    CSR (Client Side Rendering)

    장점
    페이지에 필요한 리소스를 전부 사전에 불러와 데이터를 캐싱하고 있다가 현재 URL에 맞는 페이지를 보여주기 때문에 초기 랜더링 이후 속도가 빠르다.

    단점
    초기 페이지 로딩이 SSR보다 느립니다 => 모든 리소스를 SEO(검색 엔진 최적화)에 불리 => 빈 화면
    백엔드에서 데이터를 받아오는 동안 사용자가 빈 리소스를 보게 될 가능성이 큼
    => ex) 사용자가 페이지 로드시 비어있느 상품 이미지를 보게 된다.

    SSR (Server Side Rendering)

    장점
    SEO에 유리 => 서버에서 완성된 페이지 전달, 검색 엔진이 수집하기 용이
    서버에서 랜더링을 부담하기 때문에 사용자 하드웨어 의존X

    단점
    서버의 부담 증가(생산 비용 증가)
    SSR을 위한 코드 작성 필요(생산 비용 증가, 추가 러닝 커브)
    무거운 페이지라고 한다면 초기로딩이 오히려 CSR보다 오래 걸릴 수 있음

    KeyPoint
    - 페이지를 완성하는 주체가 누구인지(Client, Server)
    - 빈화면, 완성된 화면
    - 캐싱, 재요청

---

## SPA, MPA

    SPA(Single Page Application)
    html 파일이 하나인 애플리케이션
    reactJS와 같이 컴포넌트 기반 라이브러리 및 프레임워크는 SPA에 최적화
    사용자가 웹 사이트 접속 당시 번들링 된 리소스들을 한 번에 전달
    URL이 변경 됨에 따라 html을 해당 URL에 맞는 리소스를 랜더링한다.
    따라서 통상적으로 react의 파일 구조는 index.html 하나로만 구성되어있다.

    MPA(Multi page Application)
    html 파일이 여러개인 애플리케이션
    요청마다 해당 페이지에 필요한 리소스를 불러와 화면을 랜더링한다.

    KeyPoint
    페이지 개수
    SPA ->  URL

---

### React는 CSR, SPA에 최적화

---

## 패키지 관리툴

    라이브러리들을 관리하고 설치할 수 있는 도구

    npm, npx, yarn, yarn2,3(yarn berry)

    *npm
    node에서 기본적으로 내장되어있는 패키지 관리 툴
    ex)
    npm i(install) 라이브러리명 -- 설치
    npm rm(remove) 라이브러리명 -- 삭제
    npm i -g 라이브러리명 (노드 환경에 자체에 설치)
    npm i -D 라이브러리명 (개발자 환경에서 설치)

    *npx
    npm과 달리 설치하지 않고 라이브러리를 실행시켜주는 도구
    npm과 마찬가지로 node5.2버전 이상부터 기본 내장
    일회성으로 무거운 패키지를 설치해야할 때
    ex) npx create-react-app 프로젝트명
        npm - 설치하는 명령어
        npx - 설치하지 않고 실행시키는 명령어

    *yarn
    과거에는 npm보다 속도,안정성,보안 모두 뛰어나서 이목을 끌었지만 현재는 거의 차이가 없습니다.

    *yarn berry
    npm과 yarn의 경우는 설치된 라이브러리를 node_modules라는 파일로 관리
    pnp라는 방식을 도입 zero install
    .zip 파일을 관리하기 때문에 프로젝트 자체가 가볍고 빌드 속도가 빠릅니다.

    ** 모노레포
    하나의 워크스페이스에 여러 프로젝트를 담고 관리
    그러나, 다른 프로젝트를 한페이지에 담고 관리한다는 것은 폴더 구조나 신경을 써야하는 부분들이 배로 늘어난다는 이야기 따라서 초기에 적용하는 것은 좋지 않고, 이미 사용자가 충분히 확보된 복잡한 프로젝트를 간단하게 만들기 위해 사용

---

## webpack(모듈 번들러), babel

    webpack
    모듈 번들러
    모듈 -> 한가지 이상의 기능을 하는 분리된 코드의 집합
    번들러 -> 묶어주고 정리하는 것
    html, css, js, media
    너저분하게 관리되어있는 리소스들을 확장자명이나 특징 기준으로 분류하여 묶어주는 역할
    웹팩은 이런 모듈 번들로의 일종으로 CSR 특성상 URL에 따라 해당 페이지는 리소스를 찾아와 보여주어야 하는데 이러한 탐색 시간을 줄여 네트워크 연산 비용을 줄일 수 있음
    1. 모듈 단위의 개발
    2. loader를 통해 js가 로드할 수 없는 파일도 로드할 수 있는 상태로 변환

    babel
    트랜스파일러
    최신 문법들을 이해하지 못하는 하위버전의 웹 브라우저 로더들이 최신 문법을 이해할 수 있도록 저레벨의 문법으로 트랜스파일하여 변환

    ES6(ES2015)
    ES-NEXT(2020 이후) --- 이해 못하는 브라우저 --> 이해 가능하도록 변환
    react에서 사용중인 babel은 총 4종류
    1. @babel/core --- 바벨을 구동시키기 위한 핵심 요소
    2. @babel/cli --- 쉘에서 바벨 명령어 사용가능
    3. @babel/preset-env --- 바벨의 가장 기본 설정
    4. @babel/preset-react --- 바벨을 JSX문법(react문법)을 이해할 수 있게 만듬

---

## 리엑트 프로젝트 구조

    .git
    node_modules -  현재 프로젝트에 설치된 라이브러리의 파일
                    용량이 높은 편, gitignore에 들어가 있음
                    따라서 github으로 프로젝트를 다운로드 받으면 반드시 npm i <-- 라는 명령어를 사용
                    npm i, package.json에 등록된 모든 라이브러리를 설치
    public - 정적 파일 보관소(index.html, favicon, robots)
    ** src - source, 실제 개발이 이루어지는 폴더
    .gitignore
    package.json    - 설치된 라이브러리 버전 및 목록 관리, 실행 스크립트(명령어)
    package-lock.json - 라이브의 실제 설치 주소와 버전을 관리
    READMD.md

---

## src의 구조

    App.css
        app.js에 참조되어있는 기본 css파일
        - index.js와 app.js는 react 구조상 가장 최상위 컴포넌트
        - app.css는 모든 컴포넌트에 적용되는 전역 css파일
        - 그러나 현재 실무에서 가장 많이 사용되는 것은
        - 일반적인 css보다는 css-in-js가 더 많습니다.
        - 이 경우는 app.css가 필요 없어짐
        - +1 그러나, 현재 가장 주목 받고있는 것은 css-in-js가 아님

    App.js
    - routing (주소 설정, 주소에 맞는 리소스를 보여줌)
    - 라이브러리의 기본 설정 (provider, root ...)
    - 최상위 컴포넌트 중 하나

    App.test.js - test 코드의 샘플

    index.css
    - app.css와 동일
    - 컴포넌트 조립 페이지화 -> 라우팅 설정 -> app.js -> index.js
    -> public/index.html

    index.js - 최상위 컴포넌트

    reportWebVitals.js - 프론트 엔드 성능 체크 (X)

    setipTests.js - testcode 작성을 위한 전역 참조 설정

---

## hooks 함수

    react가 화면을 랜더링하는 시점
    react -> 상태가 변경되었을 때 -> 가상돔 : 실제돔 -> 상태가 변화된 컴포넌트를 리랜더링

    class
    class Todoapge {
        ...
    }
    라이프사이클 (생애주기) ---> hook 함수

    1. useState
        - react의 상태관리 함수
        - state의 생성 및 갱신이 가능
        - state의 값이 변화하면 해당 컴포넌트를 리랜더링 (해당 컴포넌트 함수를 재실행)

    2. useRef
        - ref 객체 내부 값은 reneder와 상관없이 유지
        - html(실제돔)의 요소에 접근하기 위해서도 사용
          그런, react에서 DOM API의 접근을 사용하는 것을 지양

    3. useMemo
        - 연산된 *결과*를 캐싱하고 저장
        - 화면이 다시 리랜더링 되어도 연상 과정을 거치지 않고 해당 값을 재사용

    4. useCallback
        - 특정 함수를 캐싱, 화면이 다시 리랜더링 되어도 재선언하지 않고 재사용
        - 가독성 + 성능을 위해 콜백함수를 유즈콜백으로 사용하는 경우
        메모이제이션(메모아이제이션, 메모라이제이션)
        캐싱(저장)
        리엑트에서 어떤 함수가 선언되거나 연산하는 과정을 오래걸린다 (3초)
        그렇다면 리엑트는 리랜더링 할 때 마다 이 연산을 다시 해야합니다.


    5. useEffect
        - 마운트/언마운트/부수효과 (state가 변하고 나서 생기는 사이드 이펙트)
        - 의존성배열
          해당 배열 내부의 state 값 혹은 값이 변경되면 해당 이펙트(함수)를 재실행

---

## msw

    1. .env
    가장 우선 순위가 낮은 환경변수 설정 파일

    2. .env.develpoment
    개발 환경에서만 작동되는 환경변수 설정 파일

    3. .env.production
    배포 환경에서만 작동되는 환경변수 설정 파일

    4. .env.test
    테스트 환경에서만 작동되는 환경변수 설정 파일

    각각 파일에는 local 파일이 존재하며 (ex .env.local, .env.develpoment.local)
    local 파일은 기존에 있던 파일보다 우선 순위가 높습니다

    .env < .env.local < .env.develpoment/production/test < .env develpoment/production/test.local

    - 주의사항
    .env는 git과 같은 원격 저장소나 버전관리 저장소에 올라가도 되는가?
    안됩니다. 환경변수는 배포 환경에서 직접 설정해줄 수 있어요

    5. .env.sample
    배포 시 환경변수의 key값이 어떤 것을 의미하는지 정의한 문서
    ex) REACT_APP_BACK_URL : 계좌 관련 API 백엔드 URL

---

## 토큰

### 인증 토큰, 재발급 토큰

        인증 토큰, 유저의 정보가 암호화 된 토큰이며 해당 토큰이 있어야 해당 사용자는 인증된 사용자
        보통 해당 인증 토큰이 없다면 response ststus code 401 (unauthorized)
        토큰이 있지만 허가되지 않은 사용자는 reponse ststus code 403(forbidden)
        따라서 해당 토큰이 만료되면 401, 403을 return
        프론트 엔드 개발자가 401과 403을 비동기 통신의 응답 결과로 반환 받으면 어떻게 해야할까요?

        1. refresh token o
        axios interceptor 해당 에러 발생하면 refresh token으로 access token을 재발급 받고 실패한 요청을 다시 재요청

        2. refresh token x
        refresh token이 없다면 프론트 엔드에서는 로그아웃 로직을 실행

### 토큰 관리 방법

    1.  웹스토리지
        브라우저를 통해 데이터를 저장
        DB에 저장되는 데이터와 달리 삭제되어도 상관 없는 소량의 데이터를 저장할 때 사용
        사용자에게 데이터 저장을 부담 -> 사용자의 하드웨어에 의존하는 소프트웨어 탄생

        로컬 스토리지
        영구적인 스토리지, 다른 탭에서도 데이터가 공유되는 특징
        웹 페이지의 세션이 끝나도 데이터가 삭제되지 않음

        ex) - 인증 토큰을 저장
            - 비회원 로직 구성, 비회원 인덱싱 키 값이 없음, 그러나 인덱싱 키가 있다면
              DB에 저장 가능

        세션 스토리지
        웹 페이지의 세션이 끝나면 데이터가 함께 삭제
        다른 탭에서 데이터가 격리되어 저장

        사용법
        localstorage, sessionstorage
        .setITem(key, value) -> 해당 key, value 쌍으로 저장
        .getItem(key) -> 해당 key 조회
        .removeIte(key) -> 해당 key 삭제
        .clear() -> 모든 데이터 삭제

    2.  쿠키
        브라우저에 저장된 key-value로 이루어진 작은 데이터 파일
        따로 설정하지 않아도 서버와의 데이터 교환이 가능하며 https나 secure 옵션을 통해서 https 환경에서만 교환이 가능하거나 외부에서 접근이 불가능 하도록 설정이 가능
        브라우저가 닫히면 삭제, 유효기간을 명시하면 닫혀도 삭제되지 않습니다.
        ex)
        refresh-token
        session-id
        자동 로그인
        팝업창(모달창) 3일 동안 보지 않기

    3.  state
        웹스토리지에 저장된 로그인 정보는 영구적으로 혹은 반영구적으로 유지할 수 있지만
        state가 맞을까요?

        로그인 완료 되었을 때 실행해야하는 로직이 있다면 그 로직이 있고 UI를 변경시켜야 한다면?
        1. 새로고침, 페이지이동 -> 페이지의 깜빡임
        2. 전역 상태로 가지고 있는 것

### 백엔드에서 프론트 엔드에 토큰을 전달하는 방법

    1. res.body
    2. res.header
    3. cookies

### 프론트엔드에서 백엔드에 토큰을 전달하는 방법

    1. req.body
    2. cookies
    - axios 인스턴스 생성 시 withCrdentials = true
    - 서버 간의 통신에서 쿠키를 서로 교환 가능 하도록 옵션
    3. res.header (o)
    - axios interceptor
    - axios 인스턴스 생성의 default

---

1. todo, accessToken, api call의 관심사(SOC - 의존성 주입 방법) 분리 (전역 상태 관리 자유)
2. delete, update -> axios.delete('/todo/3')
   axios.put('/todo/3, { content, state })

---

    1. 백엔드에게 데이터 요청을 보냈으면, 요청의 주인이 나(사용자)라는 사실을 알려줘야함
    - 게시글을 쓰거나 데이터를 저장할 때 해당 사용자의 고유번호도 저장해야하기 때문에

    2.  알려줄 수 있는 방법에는 인증토큰, sesion
    - 인증 토큰은 주로 jwt(json web token)을 사용하며 서버의 부담이 없이 어떤 서버에서든 토큰을
      주고 받을 수 있다는 장점
    - sesssion은 서버에 부담이 큰다는 대신, 인증 토큰보다 보안에 더 안정된 상황에서 데이터를 주고
      받을 수 있다는 장점

    3.  세션의 경우 로그인 시 백엔드에서 세션-id를 보통 쿠키를 통해 프론트 엔드에 전달
    인증 토큰의 경우 응답 데이터에 토큰과 이를 재발급할 수 있는 refresh 토큰을 전달

    4.  인증 토큰은 인증이 필요한 api 요청에 항상 header에 실어서 보내야하며
    토큰을 보내는 방법에는 2가지 방법이 존재합니다.

    - axios 인스턴스를 생성할 때 기본 값으로 토큰을 설정하며
      baerer는 해당 토큰이 jwt 토큰이라는 것을 알려주는 일종의 분류이므로 앞에서 붙여 사용

    - axios의 인터셉터를 사용하여 백엔드에 요청을 보내기 전에
      데이터를 가로채 해더에 토큰을 심어서 전송

    5.  인증 토큰은 짧은 만료 기한을 가지고 있으며 만료된다면 프로덕트의 로직에 따라 로그아웃을 로직을
    실행하거나, 만료 되었다는 에러와 함께 응답데이터가 전달되면 리프레쉬 토큰으로 재발급 후 재요청

        - axios의 인터셉터를 사용하여 프론트엔드가 응답을 받기 전에
          데이터를 가로체 백엔드에 jwt 재발급 요청을 보내고 다시 토큰을 실어서 재요청

        - 모든 것은 사용자가 데이터를 받기 전에 이루어지므로
          사용자는 리프레쉬 토큰이 있다면, 토큰이 만료된 것을 모르고 사이트를 이용

        미들웨어 -> 백엔드의 데이터를 상태로서 관리하게 해주고 데이터를 캐싱하여 불필요한 통신을 일으키지 않는 미들웨어

    recoil,, react-query
    프론트는 UI와 관련된 state만 신경쓸 수 있도록 해주는것
    rtk는 차후에 실직....
    실무 49% rtk -> redux도 있고, angular, js, jquery등등 많이 사용하니까 어느정도는 전부 익혀 둘 것

    - recoil
    redux -> react에서 만든 상태관리 라이브러리가 아님
    recoil은 2020년 5월 facebook에서 고안하여 hooks 함수를 기반하여 제작된 react전용 상태관리 라이브러리입니다.
    redux 역시 facebook에서 고안한 flux 패턴을 기반으로 설계되었고 충분히 훌륭한 전역 상태 관리 라이브러리지만
    문제점
    1. react 전용 관리 라이브러리 -> 안정성 및 호환성 감소
    2. 복잡한 초기세팅과 보일러 코드가 존재
    3. 비동기 데이터를 통신하기 위해 추가적으로 미들웨어를 설치(thunk, saga)

    recoil은 사용하고자 하는 atom들을 컴포넌트들이 구독하면서 상태 관리가 가능
    ex)
    const [state, setState] = useRecoilState(아톰명)
    const state = useRecoilValue(아톰명)
    const setState = useSetRecoilState(아톰명)
    const reset = useResetRecoilState(state명)
    reset()

    - selector (이제는 잘 사용하지 않는 개념)
    react-query를 사용하지 않는다면 굉장히 유용, 그러나 react query로 서버에서 받아온 데이터(비동기)를 자동 전역상태관리 해주는데
    왜 필요하나?

    const postListSelector = selector({
    key : 'postList',
    get : async(get => ({ 1.
    const id = get(focusAtom).id
    //내가 선택한 게시물의 고유번호 전역상태(아톰)
    const allPost = get(postListAtom)
    // 모든 게시물이 들어가있는 전역상태 (아톰)
    //기존 아톰을 변형하여 새로운 전역상태 관리를 위한 아톰을 생성
    const post = allPost.find(...)
    // 기존에 있던 두가지의 아톰을 가지고 와 새로운 형태의 아톰을 생성
    // 복잡한 로직 최소화
    2.
    const post = await PostApi.getAllPost();
        // useEffect를 쓰지않고, atom을 생성하지 않아도
        // 백엔드에서 받아온 데이터를 새로운 아톰으로 생성해주는 메서드
    return post
    }))
    })

    export const focusAtom = atom('')

---

## react-query (tanstack/query)

    서버 데이터의 전역상태 관리, 미들웨어, 데이터패칭 라이브러리
    staleTime
    - (신선하지 않은 시간) -> 유효기간 지났다 -> 최신화가 필요하다.
    - react-query server에 받아온 데이터를 캐싱하고 있기 때문에 서버에 데이터가 변했을 수도 있기 때문에 유효기간을 상정하여
    - 해당 유효기간이 지나면 데이터를 새로 받을 수 있도록, ui의 변동 있음 (상태로서 관리)

    cacheTime
    - 저장하고 있는 시간
    - 서버에서 받아온 데이터는 캐시타임으로 정해진 시간 동안만 데이터가 저장되어 있음
    - 만약 캐시타임이 지나거나 0이 되면 데이터를 새로 받아옴, ui를 업데이트하지 않음.

    staleTime을 4분 정도로 설정하면 cacheTime 5분 설정
      option : {
        refetch
        retry
        useQueryClient : react-query context로 내가 지정한 query를 신선하지 않은 상태로 바꿔줄 수 있음
        // 개발자가 원할 때 새로운 데이터를 받아올 수 있다는 이야기
        // staleTime과 무관하게, 개발자가 의도하는대로 데이터를 캐싱하고, 캐싱하지 않을 수 있다는 이야기
        // 캐싱이 되었을때 장점은 백엔드와 현재 프론트엔드 데이터가 일치하다면 재요청할 필요가 없음
      }

---

## MSW

    MSW ( Mocking Service Worker ) -> 가상 서비스 일꾼
    -> 웹 페이지와 브라우저 사이에서 일하는 일꾼을 가상으로 만들어 실제 서비스 워커 대신 api, 캐싱, 푸시, 동기화 등을 담당하여 실행할 수 있다.
    가상으로 웹 페이지와 같은 역할을 할 수 있는 일꾼을 만들어내는 것을 이야기

    -> 테스트 코드?
    a를 개발하기 위해 모듈을 수정 -> b,c,d,e,f 의존관계 가능성
    a를 수정하면 b,c,d,e,f --> 하나는 에러가 날 수도 있음
    b,c,d,e,f를 여러분이 직접 눌러보면 에러가 있는지 확인 해야할까요?
    그렇다고 테스트를 안하면? 사용자 이용 간에 버그를 확인할 수 있음

    테스트코드는 사람이 하는 것보다 더 정확하고 빠른 컴퓨팅 테스트를 도입함으로서
    QA(품질평가) 비용을 줄이고, 인건비에 대한 코스트를 감소 시키는 역할을 할 수 있음

    -> 테스트하면서 실제 백엔드 db에 데이터가 들어가면 될까?
    보통은 비동기 통신 테스팅은 하지 않습니다.
    비동기 통신을 가로채서 무효화 시킨후 mocking api를 테스트 많이하게 됩니다.

    = 테스트할 때 비통기 통신 가로채서 무효화 후 msw로 테스팅하는 방법도 있다.
    = 서비스 마다 달라짐, 비동기 통신 테스트 서버로 테스팅하는 것이 있음

    -> 백엔드 api가 없어도 동일한 환경에서 가상 api를 만들어 프론트엔드를 구현할 수 있다
        (API 서버가 다운 되거나 없어도 Mocking API를 활용하여 프론트엔드 개발 가능)
        (개발초기 단계에서 백엔드 없이도 프로토타입을 빠르게 제작 가능)

---

## redux-tool-kit (RTK)

    redux에서 기존에 갖고 있던 문제점을 보안하기 위해 만든 해결책
    탬플릿 코드가 기존 redux에 굉장히 많은 양이 감소했고, 불변성을 위한 immer나
    다른 라이브러리를 설치해야하는 미들웨어 (devtools)와 같은 것들을 자체적으로 지원해주는 라이브러리
    => 리덕스를 보다 쉽게 사용할 수 있게 하는 라이브러리
    그러나, 이런 장점에도 불구하요 여전히 템플릿 코드는 많으며 사실상 잘 찾지 않게 되는 코드가 되었음
    보통 실무에서는 redux-saga와 rtk로 구현된 코드를 볼 가능성이 가장 높습니다.

---

## redux-middleware

    데이터를 효율적우로 윤용할 수 있도록 중간에서 데이터 변환 및 중개
    비동기 통신에 관련된 미들웨어를 배워볼 것
    redux-saga, redux-thunk
    redux는 기본적으로 동기적인 작업만 처리합니다.
    따라서 비동기 데이터를 다루기 위해 제약사항이 많이생길 수 밖에 없다
    ex)
        dispatch({
            type: "GET_LOADING"
        })
        try{
            const res = await api통신...
            dispatch({
                type: "GET_SUCCESS"
            })
        } catch {
            dispatch({
                type: "GET_ERROR"
            })
        }

    redux thunk란 비동기 통신함수를 다시 한번 함수로 감싸는 형태로 비동기 통신을 지원해주는 미들웨어

    dispatch(fetchData())
             ----------->> 백엔드 통신과 dispatch를 인자로 받아 로직을 view 외부에서 사용 가능

    실제 백엔드 데이터 로직은 thunk 함수 안에서 구현하고 UI는 하나의 dispatch만 보내면
    api 데이터 통신, 그에 따른 비동기로 받아온 데이터의 전역 상태 관리가 자동으로 이루어집니다.

    -------

    그러나 redux thunk를 직접 라이브러리를 설치하여 구현할 수 있음에도 rtk내에서 thunk를 자체지원하고 + 훨씬 쉽게만들어줌
    saga가 유행했다가 다시 rtk로 변환

---

### useContext

    - 전역 상태 관리를 위한 훅함수
    - 보통은 전역 상태이기 때문에 업데이트 로직을 재사용할 수 있는 reducer와 함께 쓰임
    - 프론트 엔드의 DI에 응용 가능

    추상체
    const ValidationService = {
        emailValidation : (email) => {
            return vaildation(email)
        },
        password,
        phone...
    }

    구현체
    const vaildation = () => {
        ...유효성 검사
    }

    validationService

## React?

    복잡한 사용자 인터페이스를 쉽게 구축하기 위해서 메타에서 제작한 라이브러리
    라이브러리(도서관-코드 보관소, 이미 작성된 오픈 소스 코드를 가져다가 사용하는 것)
    자바스크립트를 조금더 편하게 사용하기 위해서 사용하는 것
    상위호환이라기엔 맞지 않는 것 같고 조금이라도 더 쉽게 개발하기 위해서 만들어진 것
    자바스크립트 빡세게 해야 리엑트의 이해도 쉬워진다

### 프레임워크 라이브러리의 차이

    - 프레임워크 : 코드를 작성할 때 필요한 틀(가이드라인)을 제공해주는 것 - 도구 같은 것
        ex) spring, django, angular
        내가 로그인 서비스를 만들려고 할 때 로그인 기능에 관한 기본적인 가이드라인을 제공해준다.

    - 라이브러리 : 선택권을 주는 것, 같은 로그인이더라도 paport, gortrue, 개발자가 코드의 다양한 선택권과 제어권을 가지고 있는 것
        ex) nodeJS로 설치되는 모든 패키지, reactJS, jquery

---

## React의 구동 원리와 핵심 컨셉

    복잡한 사이트 구조는 재사용성이나 사용성이 낮아지기 때문에 구역별로 나누어 제작한다.
    이 두가지 컨셉이 제일 중요한 2가지

### Components (조각)

            - 하나의 페이지를 한가지 이상의 기능을 수행하는 UI단위로 분리한 것
            - 재사용이 용이

        Virtual Dom (가상 돔) 매우중요!!
            - React가 가지고 있는 가상 DOM, DOM의 복사본
            - state(상태)를 react 구독, 만약 상태의 변화가 생기면 그때 화면을 리랜더
            - 멀쩡한 화면을 납두고 복사본 화면을 사용하는 이유
                - 사용자에게 화면을 다시 보여주기 위해서는 코스트(비용)이 든다.
                - 단순하게 교체만 하는 것이 아닌 처음부터 그려줘야 한다.
                - 가상돔을 이용해서 state라는 고유의 변수값이 변경될 때 이 때 사용자 화면을 바꿀 수 있다.
                - 개발자가 사용자 화면변환의 타이밍을 정할 수 있다.

        사용자가 어떤 상황일 때 레이어를 교체할지 개발자가 지정할 수 있음
        자바스크립트는 그 순간순간 바로 바뀜

        반드시 알아둬야 할 것 !!!!!!!!!!!!!!!!!!! 이 세가지가 제일 중요함 !!!
        * 컴포넌트, 가상 돔, 상태(실제돔과 비교, 변화가 있으면 화면을 랜더 위한 변수)

        쪼개고 분해했다가 나중에 모아서 완성하는 것

---

    React는 CSR, SPA이다.

        CSR(Client Side Rendering) -> 사용자 측에서 화면을 그린다. -> 사용자가 웹페이지에 접속
                                -> 프론트엔드는 화면을 그리기 위한 리소스 전달

                                장점 : 페이지에 필요한 리소스를 한번에 전달, 해당 데이터를 통해서 다시 프론트엔드 서버와 소통 없이도 랜더링이 가능
                                초기 첫 페이지 랜더링 속도가 느림, 그러나 그 이후의 랜더링 속도는 상대적으로 빠름

                                단점 : 초기 페이지 랜더링 느림, SEO(검색 엔진 최적화)에 불리, 사용자 하드웨어에 의존

        SSR(Server Side Rendering) -> 서버에서 페이지를 그린다. -> 사용자가 웹페이지 접속 -> 서버에서 페이지 랜더링 -> 완성된 페이지 전달
                                JS를 실행하지 않아도 화면을 보여줄 수 있음(완성된 페이지를 빨리 볼 수 있음)
                                하지만 JS는 브라우저에 의해 실행되므로 사용자에게 먼저 페이지를 보여주고 하이드레이션(수분공급)을 통해 JavaScript를 브라우저에 실행

                                장점 : SEO에 유리, 웹사이트를 검색엔진이 크롤링할 때 페이지의 완성본을 조회하기 때문에, 수집할 수 있는 데이터가 많아지고
                                검색엔진 최적화에 유리
                                완성된 페이지가 보이는 속도가 빠름

                                단점 : 서버 부담 증가(생산 비용 증가), 무거운 페이지라면 오히려 CSR보다 속도가 느림

---

    SPA(Single Page Application)
        말 그대로 페이지가 1개인 애플리케이션(.html)
        reactJS와 같이 컴포넌트로 분리된 라이브러리나 프레임워크는 SPA에 최적화

    MPA(Multi Page Application)
        페이지가 여러개인 애플리케이션(.html)

---

    React = CSR, SPA 최적화 되어있다. (사용자가 화면을 그리고 페이지가 하나인 앱)

---

    패키지 관리툴(npm, npx, yarn, yarn2) - 라이브러리를 관리하고 설치할 수 있는 도구
    npm, npx, yarn, yarn berry(yarn2)

    npm - nodeJS에서 기본적으로 내장되어있는 관리 툴
    ex) npm i(install) 라이브러리명 : 설치
        npm rm(remove) 라이브러리명 : 삭제
        npm i -g 라이브러리명 : 노드 환경 전역에서 설치
        npm i -D 라이브러리명 : 개발 환경에서만 사용할 라이브러리

    npx
        npm과 달리 라이브러리를 설치하지 않고 실행시켜주는 도구
        개발하는 입장이라면 npm과 npx의 차이를 모를 수 있지만
        npx를 사용해야하는 경우는 내프로젝트에 라이브러리를 추가하지 않고
        일회성으로 실행만 하는 경우, 너무 무거워서 실행해야하는 경우 사용하는 툴
        npm과 마찬가지로 내장되어있다.

        ex) npx create-reat-app 프로젝트명

    yarn
        npm보다 속도도 뛰어나고 안정성 및 보안성 모두 월등한 기능
        하지만, npm의 패치로 인하여 현재로서는 그 차이를 느끼기에는 애매함

        yarn add 라이브러리명
        yarn remove 라이브러리명

    yarn berry
        npm과 yarn으로 설치된 라이브러리들은 node_modules라고 하는 파일에 저장,
        그러나 이러한 node_modules가 용량이 너무 크기 때문에 배포하는 과정에서 시간이 소요

        이러한 획기적으로 줄이기 위하면 Plug'n'Play 방식을 도입 Zero install 알집으로 파일을 관리 프로젝트 관리 및 빌드가 빠르다.

    monorepo,multirepo

---

### React 프로젝트 생성

    1. CRA(create-react-app)
    2. vite - 최근에는 대부분 더 많이 사용된다. / 더 빠른 속도와 설치 속도 / 하지만 안정성때문에 일단은 공부할 때는 CRA 사용
            - (esbuild, 번들링 없이 프로젝트 빠르게 빌드한다.)

    1. 터미널 경로 지정
    2. 생성 명령어 입력 npx create-react-app 프로젝트명

---

## 프로젝트 구조

    node_modules : 현재 프로젝트에 설치된 라이브러리들의 실제 코드들이 저장 용량이 큼, git에 올리지 않음
                    -- package에 의해서 설치되었었던 목록이 이미 저장
                    -- npm install
                    -- package.json에 있는 라이브러리를 자동으로 설치
                    -- 실제 리엑트에서 대부분의 용량을 차지 / git에서는 제외

    public : 정적 파일 관리, 페비콘, index.html, sitemap.xml, robots.text
            나중에 SEO에 필요한 파일, 검색엔진에 가이드라인을 제공하는 파일, 검색엔진에 어떤것이라는지 설명 + 이런 것을 노출하고 싶지않다라는 설명
    src : 개발이 진행되는 곳 / 내가 개발하는 고의 모든 파일이 들어있다.
    gitignore : git에 커밋하고 싶지 않은 파일을 정리. 기본 세팅이 있긴하지만 추가하고 싶으면 직접 작성해서 추가한다.
    package-lock.json : 해당 라이브러리의 설치 가능한 주소들이 저장
    package.json : 설치된 라이브러리의 목록과 버전을 관리, 실행 스크립트(명령어) 관리
                -- npm start 로컬 환경에서 프론트엔드 서버를 실행
                -- npm run build 프로젝트 배포 이전에 가능한 최소한의 경량화된 사이즈로 코드를 빌드
                -- npm run test 테스트 코드 실행 - QA넘기기 전에 개발자들이 먼저 테스트를 해보기 위해 만들어진 코드
                -- npm run eject 숨겨진 설정 파일을 보여주는 것
                -- 스크립트는 커스텀도 가능
                번들링을 통해 작은 파일로 만들어 배포한다.

### src의 구조

    App.css -> App.js에 참조되는 기본 css파일 - 변경 가능
    App.js  -> index.js를 통해 index.html에 전달되어 보여지는 실제 컴포넌트
            -> 라우팅(주소 설정), 라이브러리 설정
    App.test.js -> 테스트 코드 샘플
    index.xss -> app.css와 동일
    index.js -> 최상위 컴포넌트, index.html의 root에 app.js를 랜더링시키는 역할
    reportWebvitals.js -> 프론트엔드 성능 체크, 더 좋은 도구가 많아서 사용X
    setupTests.js -> test-code에 필요한 라이브러리 전역 설정

---

## Webpack

    webpack : CRA에 기본 설정으로 되어있는 모듈 번들러
    모듈 : 한 가지 이상의 기능을 분리한 코드의 집합, 분리한 코드 덩어리
    번들러 : 묶어주는 것

    너저분하게 분리되어있는 리소스들을 특정 카테고리나 묶음으로 묶어서 정리해주는 역할
    연산 시간이 줄어들어 랜더링 비용이 감소
    이거 없으면 리액트 없었다.

    * 장점 - 모듈단위의 개발이 가능, 네트워크 연산 비용 감소, loader를 통해 js가 로드된다.

---

## babel (트랜스파일러)

    ES6 이후를 모던 자바스크립트
    최신 문법을 이해하지 못하는 웹 브라우저들이 존재
    해당 브러우저에 존재하는 로더가 문법을 이해할 수 있도록
    저레벨의 문법으로 트랜스파일(변환)하는 과정
    *react는 그 중 바벨의 4가지 모듈
    1. @babel/core : 핵심요소
    2. @babel/cli : 명령어를 통해 바벨을 사용할 수 있도록
    3. @babel/preset-env : 바벨의 기본적인 설정
    4. @babel/preset-react : 바벨이 JSX문법을 이해할 수 있도록

    이 모든게 없어도 react를 javascript에서 돌아갈 수 있도록 할 수 있지만 webpack과 babel을 대체할 수 있는 것을 스스로 만들어야 한다.
    그러므로 webpack과 babel은 필수다.

---

## 리엑트의 폴더 구조

    1. Container/Presentational 폴더 구조
        - 예전에 많이 사용하던 폴더 구조
        - Dan Abramov(리덕스의 창시자, 리엑트 개발 참여자)이 처음 고안
        - 이 패턴은 2019년 훅함수의 등장 이후로 더 이상 사용하지 말라고 언급

        pages
            board
                container.js (logic)
                Presenter.js (view)

    * 2. Hooks 폴더 구조 - 최근에 제일 많이 사용되는 방식. 전체의 90%는 사용된다

        components --- 모든 페이지에서 사용될 수 있는 컴포넌트(조각)  재사용되도 쪼개도 좋고, 재사용이 안되더라도 쪼개도 좋다.
        hooks --- 훅함수 (재사용되는 비즈니스 로직)
        pages
            boarder
                hooks --- boarder 내에서 재사용되는 훅함수
                coponents --- boarder내에서 사용될 수 있는 컴포넌트 (조각)

    3. Atomic 패턴 - 대부분의 개발자들이 싫어하지만 종종 적용되는 경우가 있음

        가장 작은 단위의 컴포넌트를 설계하여 재사용이 용이하게 하는 패턴
        Atomic을 따르기 위해서는 디자이너와 협업되어 최대한 재사용이 용이하게 진행

        atoms -- 더이상 쪼갤 수 없는 컴포넌트
        molecules -- 여러개의 atom이 모여 하나의 목적성 있는 컴포넌트
        organisms -- 여러개의 molecules이 모여 하나의 기능이 가능한 UI를 제공할 수 있는 인터페이스
        templates -- 레이아웃과 비슷, 프레임
        pages -- organisms들이 합쳐져 하나의 최종 컨텐츠

        회사마다 가치관과 사용기술이 다르기 때문에 그때 그때 맞춰서 사용하면 된다.

---

## react-router-dom

    router : 네트워크 데이터 전송 (소포)
    => react에서 dom을 전달하기 위해 사용하는 소포 (주소에 따른 보여줄 DOM 설정에 관한 라이브러리)
    => SPA에 최적화
    npm i react-router-dom
    react-routerdom 깃허브에 많은 자료가 있다
    공식문서에도 많은 예제와 기본 개념이 있다.
    (1순위 찾아볼 곳)

---

### todoList 폴더 구조 - 폴더의 이름은 무엇이라도 바꿀 수 있다. 이름에 집착 금지!!

    src
        components
            Button
                Button.js
            Layout - 공용 사용이라 바깥에 빼도 상관없고 넣어도 상관없음
                Footer
                    Footer.js
                Header
                    Header.js
                Layout.js
        pages
            Home
                components
                    SignForm.js
                    LoginForm.js
                Home.js(index.js 가독성을 위해서 폴더명이랑 일치시켜두는 경우도 있다.)  -- 인덱싱 가능한 페이지, 초기 렌더 파일, 엔트리 파일, 최초 시작점
            Todo
                components
                    AddFormModal.js
                    todoList.js
                    OneTodo.js
                index.js - 최종파일(우리가 볼 수 있는) 모든 컴포넌트를 모은 파일
                index.js로도 사용하긴하지만 너무 많으면 폴더 관리하기 힘들기에 회사마다 컨벤션마다 다르다.
                index로 하면 좋은 점 : 파일을 따로 지정해두지 않아도 자동으로 default값으로 지정되어 있다.
                index보다 다른 파일로 지정하는게 효율상 아주 조금 더 좋지만 프론트엔드상에서는 차이를 못느끼고 막 몇십만개 파일을 관리하는 수준이 아닌 이상 차이를 느끼기 힘들지만 대형 회사같은 경우는 다르게 관리한다.
        routes
            routing.js - 라우팅해서 app.js에 전달 - 라우터와 연결되어 있다.
        styles
            common.js -- 공용 css
            global.js -- 전역 css
            theme.js -- 디자인 코인 - 회사마다 각각의 브랜드 컬러를 가지고 있는 경우가 대다수여서 통합적으로 스타일을 관리하는 곳이 있다.
        App.js -index로 전달
        index.js -html로 전달

---

### React에서 CSS 적용 방법

    1. css-in-js
    ex) css 파일 없이도 하나의 js에서 css 작성 가능
    - styled-components, emotion
    npm i styled-components

    2. pure css(scss) + post css
    ex) app.module.css

    3. tailwind
    ex) 이미 작성된 class명으로 css 작성, 생산성 증가
    - <div className="" />
    클래스명만 잘 써주면 된다.

    css skill에는 큰 부담을 갖지 않아도 괜찮음
    css를 알고 있으면 어떤 것이는 적용하는데 큰 어려움이 없음
    모르는 것이더라도 배우는데 얼마 안걸린다.

---

## hook 함수

    react에서 화면이 랜더링되는 조건?
    react의 컴포넌트에는 상태(state)라는 값이 존재, 해당 state가 변경되어야만 UI를 업데이트 합니다.

    과거에는 class component를 사용했고 life cycle(생명 주기)이라고 하는 이벤트 관리가 존재했습니다.
    페이지가 처음 열렸을 때 ~ 닫혔을 때까지의 상태 변화나 이벤트(함수) 트리거 등을 담당

    그러나 react 16버전(2018, 2019) 이후로 class 컴포넌트는 더이상 리엑트에서 개발 지원을하지 않으며
    함수형 컴포넌트가 생김으로서 life cycle 대신에 상태를 관리하고, 이벤트를 트리거 해주는 hooks 함수가 등장

    (1) useState
        - react의 상태를 생성하고 변경할 수 있는 훅 함수
        - useState로 생성된 상태의 값이 변경될 떄마다 리랜더링 한다

    (2) useRef
        - 상태는 아니지만, 리랜더 되어도 값이 유지
        - html 요소에 접근하기 위해 사용, 그러나 react에서 dom api에 접근하는 행위는 지양

    (3) useMemo
        - * 함수가 실행되어 반환(return)하는 값 * 을 캐싱하고
          랜더링 되어도 연산을 다시하지 않고 (랜더링 함수가 재실행되면 함수 연산도 재실행되어야하지만 다시 하지 않음)
          값을 캐싱(저장)하여 재사용

    (4) useCallback
        - 랜더링 함수가 리랜더링 되면 함수나 변수등도 다시 선언하게 되는데, useCallback을 사용하여 선언한 함수는
          랜더링 되어도 ** 다시 선언하지 않고 * 저장되어있던 값을 재사용   / 선언과 결과값이 중요!!!

        ex)
        상태가 변했어요! -> 리랜더링 -> 랜더함수 재실행 -> 복잡한 함수 실행시간 지연 -> 랜더링 지연

        1. 반드시 연산해야하는 경우 -> 랜더링 될 때마다 값이 달라지는 경우
        2. 값이 랜더링 되어도 똑같은 함수라면 연산을 다시 할 필요가 있을까요?

        메모이제이션(메모라이제이션) - 캐싱되어있는 연산 값을 사용

        메모이제이션은 반드시 하는게 좋을까요?
            저장한다는 것은 코스트(비용)가 있을까요 없을까요? 이미 저장하는 것만으로도 코스트는 들어갑니다.
            따라서, 적절한 경우에 맞춰 메모이제이션을 활용하는 것이
            좋은데, 그렇다면 useMemo와 useCallback이 저장되는 코스트보다 효율적인 시점을 알 수 있을까요?
            렌더링 시간을 하나하나 체크하면서 비교하면 비교를 할 수는 있지만 실무에서는 그럴 수는 없다.

            각 함수마다 실행 시간이 다르기 때문에 이를 예측하는 것은 매우 어려운 일
            따라서 컨벤션이나 자기만의 규칙을 만들어 메모이제이션을 하는 것이 가장 생산성 있는 작업

            * useCallback과 useMemo는 어느 시점에 사용해야할까요? - 회사 면접 질문
            예시) 강사님 - 시간복잡도가 On2(반복문), axios 요청이 2회 이상 일어날 때
            기준은 내가 만들어야 한다. 제일 좋은 방법 - 시간 측정해서 퍼포먼스를 측정하는 것

    (5) useEffect

        페이지의 생명주기 동안 일으키고 싶은 외부 효과등을 제어할 수 있는 훅 함수
        => 페이지가 열려있는 동안, 여러분들이 특정 함수를 원하는 시기에 호출할 수 있음
        마운트(페이지가 처음 열렸을 때), 언마운트(페이지가 닫혔을 때), 의존성 배열의 값이 바뀌었을 때

---

## 전역 상태 관리

    (global) --> 어떤 곳에서든 사용할 수 있는 상태

    어디서든 사용가능한 상태가 왜 필요할까?
        a(컴포넌트) - A(상태)
        |
        ---- props
        |
        b(컴포넌트) ---------> 징검다리가 되어야함 (props의 깊이가 깊어질 수록 상태에 관한 디버깅이 복잡해짐) -> 프롭스 드릴링 -> 해소 (전역 상태 관리)
        |
        ---- props
        |
        c(컴포넌트) - A(상태)

    어떠한 방식으로 이루어질까 ?
    1. Top to Bottom (flux)
        flux 패턴
        페이스북에서 고안한 백엔드에서 View 로직을 관리하던 MVC패턴을 벗어나기 위한 단방향 패턴
        MVC( Model, View, Controller)
        백엔드에서 View와 관련된 로직도 관리, 어떠한 Model이나 어떤 Controller에서 에러가 났는지 발생하기 어려움
        model -> 백엔드에서 db와 연결된 부분
        controller -> 백엔드의 실제 로직
        view -> 화면

        action(데이터) -> dispatcher(매개체) -> model(store) -> view
        action -> 실제 데이터 객체 {}
        dispatcher는 action을 store에 전달하기 위한 이벤트 핸들러
        store는 실제 데이터가 저장되는 장소
        view는 화면, store에 저장된 데이터를 가져다가 사용함

    React에서는 자체적으로 useContext hooks function -> DI(의존성 주입) -> 실무에서 굉장히 자주 사용
    -> 단점, 사용법이 불편함

    불편한 점을 보완한 상태 관리 라이브러리들의 등장
    1. redux
        - 채용시장에서 가장 많은 부분을 차지
        - 가장 빨리 망할 라이브러리 1위, 3~4년 전에 전성기
        - 이미 redux로 개발 된 프로젝트들이 존재, 유지보수를 위해서 익혀야함 (o)
        - 준비를 위한 코드가 엄청 길었음

    2. mobx
        - redux의 대체제, 간편하게 사용할 수 있는
        - 1년 정도 반짝 인기 좋았음, 간혹 사용하는 곳이 있지만, 찾기 어려움 (x)

    3. rtk
        - redux-tool-kit
        - redux가 자체적으로 단점을 보완하고 탄생시킨 최신 버전의 redux
        - 하지만 마찬가지로 별로 주목을 끌지 못했음
        - 실무에서는 redux를 rtk로 마이그레이션(변환)하여 사용하는 경우가 많음 (o)

    4. recoil
        - react에서 개발한 react만을 위한 상태관리 라이브러리
        - 현재 가장 인기 있는 라이브러리 중 하나
        - 스타트 업의 경우 실무에서 사용하는 빈도가 높음 (o)

    5. jotai, zustand
        - 현재 가장 성능이 좋고 평이 좋은 상태 관리 라이브러리
        - 이미 실무에서 많이 사용
        - jotai는 recoil 경량화 버전, zustand의 redux 경량화 버전 (시간부족 - x)

---

## Redux

    redux: 전역 상태 관리 라이브러리
    useReducer와 context 기반, 사용법도 거의 유사, 단 조금 더 편리
    dev-tools나 백엔드와의 데이터 통신을 위한 middle ware, logger 개발 편의 도구 등을 지원
    치명적인 단점, 코드가 길어집니다. 구조가 복잡해요
    npm i redux react-redux

    * 미들웨어 (middle ware)
    중간 통로 => 중간에서 데이터 조작 (로그, 인터셉터, 개발자 도구를 호출)
    npm remove redux-devtools-extension redux-logger
    npm i -D redux-devtools-extension redux-logger (rtk에서는 자동 지원)

---

    보일러 템플릿용 세팅 방법

    MSW (Mocking Service Worker) 가상 일꾼
    -> 웹 페이지와 브라우저 사이에서 일하는 가상의 일꾼을 만들어
    백엔드와 데이터 통신, 오프라인 캐싱, 푸시, 동기화 등을 담당
    * 백엔드가 없어도 가상 일꾼을 통해 본인의 서버와 통신하여
    데이터를 주고 받을 수 있음

    장점 1. 개발 초기 단계, 백엔드의 개발이 진행되지 않았을 수 있음
    -> msw가 있으면 백엔드 없이도 빠르게 프로토 타입 제작이 가능
    즉, 프론트엔드 개발자가 백엔드와 통신을 유사하게 구현

    * 프론트엔드 개발자의 중요한 덕목
    내가 만들고자하는 화면에 백엔드에서 받와야하는 데이터는 과연 무엇일까?
    이를 json data로 구현할 줄 알아야함

    2. 백엔드 서버가 다운되어도 별개로 테스트를 통한 구현이 가능
      -> 백엔드 서버에 이상, 대체하여 백엔드 서버와 별개로 구현 가능
      -> api 응답 속도가 느릴 수 있는 경우에도 대체, 더 빠른 개발 가능

    3. 다양한 시도와 시뮬레이션이 가능 -> 백엔드에게 데이터 요청
    npm i msw
    npx msw init public

---

## RTK(redux tool kit)

    기존의 redux보다 짧은 보일러 코드, 자체적인 미들웨어 지원을 통한 DX(개발자경험) 향상
    하지만, 여전히 사용에 불편함이 있던 것은 크게 달라지지 않았고 결국엔 사용하기 편리한 다양한 라이브러리들이 등장하면서 빛을 발하지는 못했습니다.
    그러나 기존에 redux를 사용한 회사는 rtk로 많이 전환했다

    redux의 백엔드와의 api 통신을 통해 받아온 상태의 전역 관리를 위한 미들웨어
    1) saga
    - 제너레이트를 활용, 중간 중간 함수를 중단시킬 수 있음
    - 작성해야하는 코드량이 많음
    2) thunk
    - dispatch를 매개변수로 삼는 고차함수를 활용
    - redux tool kit에서 자체 지원
    eslint, prettier - 협업하며 코드를 작성할 때, 코드의 포멧과 문법을 일치시켜주는 라이브러리

---

## husky

    보통 eslint와 prettier 파일 형태로 양식에 맞게 작성
    그러나 적용을 위해선 특정 명령어를 터미널에 입력해 주거나 모든 파일을 저장
    그렇지 않으면 코드 포멧팅이 일치하지 않은 상태로 원격 저장소에 올라갈 수 있음
    커밋/푸쉬 전에 자동으로 특정 명령어를 실행시켜 줌으로서 eslint, prettier를 자동으로 모든 파일에 맞춰줄 수 있는 라이브러리
    npm i -D prettier eslint eslint-plugin-prettier eslint-plugin-react
    npm i -D eslint-plugin-unused-imports husky

### 확장 프로그램

    eslint-plugin-prettier : 기존에 있는 eslint에 prettier 기능과 prettier 충돌
    eslint-plugin-react : eslint가 react 문법에 맞게 적용
    eslint-plugin-unused-imports : 사용하지 않는 import를 자동 삭제

    개발도중 생긴 에러, 라이브러리 최신 버전의 문제, 깃허브나 퍼블릭 포럼을 이용하여 해결 방법을 찾고
    일회성으로 도입, 물론 이 이슈는 해결이 되지 않아서 앞으로도 계속 이렇게 될 수는 있음

    eslint-plugin-unused-imports -> v3 -> @typescript-eslint/eslint-plugin v6.00
    @typescript-eslint/eslint-plugin -> 5.60 -> update

    npm i -D @typescript-eslint/parser@latest
    npm i -D @typescript-eslint/eslint-plugin
    npm i -D eslint-plugin-unused-imports

### husky

    1. npx husky install --> .husky
    2. package.json -> script
    "postinstall" : "husky install" -> npm i 하기 전에 npx husky install부터 한다
    -> 다른 개발자들(협업)이 husky를 사용할 수 있도록
    3. commit/push 이전에 실행할 명령어
    npx husky add .husky/pre-commit "npm run format && npm run lint:fix"
    git add . git commit

---

    npm run --> package.json의 scripts에 정의된 명령어를 실행
    => prettier, eslint => 왜 사용해야하는가 => 똑같은 설정 위해 rc 파일 작성 및 공유 => husky로 깃훅 셋팅(pre-commit, pre-push)

    Q1. 리액트를 사용하는 이유를 설명해보세요 (2가지 이상)
    - 재사용 가능한 UI 구성 요소를 만들 수 있습니다. Components
    - 페이지 전체를 렌더링 하지 않고 렌더링이 필요한 부분만 렌더링 할 수 있습니다. Virtual DOM

    Q2. (Q1)을 통해 얻을 수 있는 장점은 무엇일까요? - 재사용이 용이하고 유지보수에 효율적 - state(상태)의 변화를 react에서 감지하고 있으며 state의 변화가 생긴다면 해당 state를 가지고 있는 Components의 가상 돔과 실제 돔을 비교하여 변화가 생긴 Components만 리랜더링

    Q3. 리액트가 가상 돔을 사용하는 이유는 무엇일까요? - 불필요한 렌더링 과정을 최소화하기 위해서 - 변화를 한 해당 state를 가지고 있는 Components의 가상 돔과 실제 돔을 비교하여 변화가 생긴 Components만 리랜더링 - 개발자의 수고를 줄이기 위해서

    Q4. 리액트가 가상 돔과 돔 트리를 비교하여 바뀐 부분이 있다면 화면을 다시 그리는 행위를 무엇이라 할까요? - 리랜더(Re-render)

    Q5. (Q3)의 행위를 통해 얻을 수 있는 이점은 무엇일까요? - 브라우저의 불필요한 렌더링 과정을 최소화해서 자원의 누수를 줄이고 개발자의 노동력적인 부분에서의 절약도 얻을 수 있다.

    Q6. (Q3)은 리액트에서 어느 순간에 실현될까요? - 가상 돔과 실제 돔을 비교하여 Components에 변화가 생겼을 때

    Q7. 훅 함수는 왜 만들게 되었을까요? 코드 재사용성을 위해서 만들어졌다.

    아래의 훅 함수는 각 언제 선언되어야 할까요?
    (1) useState - state의 값이 변화하면 해당 컴포넌트를 리랜더링
    (2) useRef - html(실제돔)의 요소에 접근하기 위해서도 사용
    (3) useEffect - 화면이 다시 리랜더링 되어도 연상 과정을 거치지 않고 해당 값을 재사용 때
    (4) useCallback - 가독성 + 성능을 위해 콜백함수를 유즈콜백으로 사용하는 경우
    (5) useMemo - 해당 배열 내부의 state 값 혹은 값이 변경되면 해당 이펙트(함수)를 재실행할 때

    Q8. 커스텀 훅을 제작하면서 얻을 수 있는 이점은 무엇이고 어느 때 만들어야 할까요? - 코드, 로직의 간결해지고 가독성이 좋아진다 - 필요없는 반복을 줄이고 재사용성을 높인다 - 수정사항이 있을 시 커스텀 훅에서만 수정하면 되기 때문에 유지보수에 용이하다
    - 어느때 만들어야 하는가????

    Q9. 리액트로 프로젝트를 만들려고할 때 고려해야하는 사항들을 아는대로 작성해보세요 (3가지 이상) - 유지보수성
    - 확장성 - 재사용성

    Q10. 만약 위의 질문에 모두 답을 했다면, 현재 부족한 것은 리액트가 아닌 자바스크립트 일 수 있습니다
    이전 풀어보았던 자바스크립트 API 문제 1~4와 board 문제를 현재 풀이할 수 있는지 확인해보세요
    react로 풀이를 한다고 가정했을 때와 (직접 바꿔보지는 말 것, 예제 문제와 유사)
    vanilla js(java script)로 풀이한다고 하였때 와의 차이점은 무엇일까요?

    Q11. 리액트에서 컴포넌트를 나누는 기준은 어떻게 되어야할까요?
    또한, 이러한 관점은 개발자마다 다를 수 있는데 왜 그럴까요?
    - 컴포넌트는 재사용이 가능한 최소 UI 단위 / 하지만 웹이 수행하는 역할에 따라 다양하게 나뉘어질 수 있다.
    - view, 로직, state등 다양한 기준으로 컴포넌트를 분리하기 때문에 개발자마다 다를 수 있다.
