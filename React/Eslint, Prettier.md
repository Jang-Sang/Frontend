eslint-plugin-prettier

lint인 eslint에도 prettier와 같은 code formatting 기능이 있으나
prettier의 code formatting 기능이 더욱 강력하므로 충돌 되는 formatting 요소를 비활성화

eslint-plugin-react
react 기본 추천 옵션 확장 프로그램

---

eslint-plugin-unused-imports
사용하지 않는 import된 컴포넌트 및 모듈들을 제거하는 확장 프로그램

---

coder formatter와 linter는 개발자 협업 간의 코드의 형태, 포맷팅, 구조, 문법 등을 일치 시킴으로서
가동성 및 구독성을 상승시키고 포맷팅 여부에 따라 줄바꿈이나 띄어쓰기 조차 변화로 인지하는 깃허브에서
코드적인 변화가 아닌 부분을 제외하기 위해서 사용

수정 된 부분 => 3만 7천 줄??

---

npm i prettier eslint eslint-plugin-prettier eslint-plugin-react eslint-plugin-unused-imports
\*\*\* 안쓰는 라이브러리는 무조건 지워야 한다.

npm i -D prettier eslint eslint-plugin-prettier eslint-plugin-react eslint-plugin-unused-imports
=> package.json이라는 파일에서 dependencies 가 아닌 devDependencies에 설치된 것을 볼 수 있다.
=> devDependencies는 release가 아니라 개발때만 설치되는 것
