prettierrc.js
eslintrc.js는
최상위 루트에 만든다.

여기서는 문제가 있어서
다음과 같은 코드를 설정 => 문서에서 추가하였다. (setting.json)
"editor.codeActionsOnSave": {
"source.fixAll.eslint": true
},
"editor.formatOnSave": true

---

husky

git hook을 더 편하게 사용할 수 있는 npm 패키지
git hook이 뭘까??

git 과 관련된 이벤트가 발생했을 때 특정 스크립트를 실행할 수 있도록 하는 기능
=> git event 이후 실행될 특별할 이벤트를 실행시키기 위한 패키지

event?
commit
patch
rebase
merge
push

(pre, post)

pre=> 이벤트 발생 이전
post => 이벤트 발생 이후

husky 설정 방법

1. npm i -D husky
2. script에 husky install
3. npx husky install --> .husky folder 생성
4. npx husky add 경로(.husky/pre-push) 'npm run lint:fix'
5. npx husky add .husky/pre-comment 'npm run formatter'

허스키 설치 => 허스키 폴더 생성 => 명령어 등록

허스키는 깃 명령어 실행 전/후 에 어떤 동작을 실행시켜주는 기능을 한다.

---
