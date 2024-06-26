# properties (속성)

```
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
```

```jsx
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <script>
            window.onload = function(){
                /*
                페이지가 열리면 id가 change인 요소의 text를 바꾸고 싶다
                */
                const $change = document.getElementById('change')
                console.log($change)
                $change.innerText = '변경'
            }
        </script>
    </head>
    <body>
        <div id="change">페이지가 열리면 속성을 바꿉니다.</div>
        <button onclick="onClickResetBtn()">클릭하면 원래대로 돌아갑니다</button>
        <div onmouseover="onMouseOverEl()" onmouseleave="onMouseLeaveEl()">
            마우스가 올라가면 속성이 바뀝니다
        </div>
        <input id="user-email"/>
    </body>
    <script>
        const $change = document.getElementById('change')

        // 함수 이름 정하기
        /*
        1. 이름만으로 기능 유추가 가능하게 작성
        2. 클릭 이벤트와 같은 이벤트를 핸들링하는 함수인지(이벤트 핸들러) 작성
        handler, on
        일반 함수와 이벤트 핸들러의 차이를 두기 위해 작명
        */
        // 클릭 되었을 때 속성을 변환
        function onClickResetBtn(){
            $change.innerText = '페이지가 열리면 속성을 바꿉니다'
        }

        // 마우스 오버 되었을 때 속성 변환
        function onMouseOverEl(){
            $change.style.backgroundColor = "#f00"
            // $change.innerText = '<span>배경화면 빨강으로 변경</span>'
            $change.innerHTML = '<span class="red">배경화면 빨강으로 변경</span>'
        }

        // 마우스가 벗어났을 때 속성 변환
        function onMouseLeaveEl(){
            $change.style.backgroundColor = '#00f';
            $change.innerHTML = '<div>배경화면 파랑으로 변경</div>'
        }

    </script>
</html>
```
