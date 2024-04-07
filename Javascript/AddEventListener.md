# AddEventListener자바스크립트에서 가장 권장되는 이벤트 등록 방식

- 하나의 요소에 여러개의 이벤트를 등록할 수 있다는 장점
  ------ 사용자의 행위

```jsx
ex)
Dom || window.addEventListener("이벤트명", 콜백함수, options)
document.getElementById("user-name").addEventListener('click', ()=>{ console.log("클릭되었습니다")} )
```

## 자주 사용하는 이벤트명

- document

```
    click : 요소를 클릭했을 때
    mouseover : 요소에 마우스를 올렸을 때
    mouseleave : 요소에서 마우스가 떠났을 때
    mousedown : 요소를 누르고 마우스를 아직 때기 이전인 상태
    mouseup : 요소를 누르고 마우스를 땐 상태
    mousewheel : 마우스 휠이 이동되었을 때
    mousemove : 마우스가 움직일 때 마다
```

- input

```
    focus : 폼 요소의 입력 요소가 활성화 되어있을 때
    blur : 포커스에서 벗어났을 때
    change : 폼 요소의 입력 요소의 값이 변경되었을 때
    keypress : 키를 처음 누른 순간
    keyup : 키를 눌렀따가 땐 순간
    keydown : 키를 누르고 때기 이전일 때
    submit : form 태그와 같이 사용, form이 제출되었을 때
```

- widnow, body - 가장 최상위 브라우저

```
  load - 웹 페이지가 로드 되었을 때
  * resize - 웹 페이지의 사이즈가 조정 되었을 때
  scroll - 스크롤바의 움직임이 생겼을 때
  unload - 웹 페이지가 닫혔을 때
```

- 페이지가 리사이즈 되었을 때 변수에 값을 재할당 (돔요소가 전역변수로 활용 되었을 때 동적으로 요소에 접근)

```jsx
let $dom = document.getElementById("seongyong").width;
widnow.addEventListener("resize", () => {
  $dom = document.getElementById("seongyong").width;
});
```

- 특정 이벤트가 일어났을 때 특정 요소의 길이를 선언

```jsx
  document.getElementById("button').addEventListener("click",()=>{
  let $dom = document.getElementById("seongyong").width
  })
```
