리엑트 프로젝트 구조
.git
node_modules - 현재 프로젝트에 설치된 라이브러리의 파일 용량이 높은 편, gitignore에 들어가 있음
따라서 github으로 프로젝트를 다운로드 받으면 반드시
npm i <-- 라는 명령어를 사용
\*npm i, package.json에 등록된 모든 라이브러리를 설치

public - 정적 파일 보관소(index.html, favicon, robots)
\*\* src - source, 실제 개발이 이루어지는 폴더
.gitignore
package.json - 설치된 라이브러리 버전 및 목록 관리, 실행 스크립트(명령어)
package-lock.json - 라이브의 실제 설치 주소와 버전을 관리
READMD.md
-- npm start 로컬 환경에서 프론트엔드 서버를 실행
-- npm run build 프로젝트 배포 이전에 가능한 최소한의 경량화된 사이즈로 코드를 빌드
-- npm run test 테스트 코드 실행 - QA넘기기 전에 개발자들이 먼저 테스트를 해보기 위해 만들어진 코드
-- npm run eject 숨겨진 설정 파일을 보여주는 것
-- 스크립트는 커스텀도 가능

src의 구조
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

App.test.js

- test 코드의 샘플

index.css

- app.css와 동일
- 컴포넌트 조립 페이지화 -> 라우팅 설정 -> app.js -> index.js
  -> public/index.html

index.js

- 최상위 컴포넌트

reportWebVitals.js

- 프론트 엔드 성능 체크 (X)

setipTests.js

- testcode 작성을 위한 전역 참조 설정
