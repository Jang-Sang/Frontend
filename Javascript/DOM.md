# DOM API

- (Document Object Model) 문서 객체 모델

  - 흔히 HTML에서 사용하는 div, span, input과 같은 요소를 DOM이라고 한다

- (Application Programming Interface) API

  - 응용 프로그램 사이에서 통신에 사용되는 언어와 메시지를 이야기 합니다.

- DOM selector - 특정한 요소를 선택

```jsx
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
```

- NodeList vs HttpCollection
  HttpCollection: live , 유사 배열 객체 + 이터러블
  NodeList: none-live , 유사 배열 객체 + 이터러블

        ex)
            <div class="red"/>
            <div class="red"/>
            <div class="red"/>

            // const $els = document.getElementsByClassName('red')
            const $els = document.querySelectorAll('.red')

            for(let i =0; i<$els.length; i++){
                $els[i].className = 'blue'
            }

  - 유사배열객체
    객체는 객체인데 배열의 속성을 가지고 있는 객체
    let obj {
    0: '1',
    1: '2',
    length: 2
    }

        for(let i=0; i<obj.length; i++){
            console.log(obj[i])
        }

  - for of(o) for(o)
  - forEach(x) map,filter(x)
  - NodeList는 forEach 사용이 가능, 단 배열 메서드 사용불가

  - HTMLCollection, NodeList을 배열로 사용하고 싶다
    유사배열 객체 배열로 제작할 수 있다.
    (1) Array.from(els)
    (2) const arr = [...els]
    (3) HTMLCollection.prototype.forEach = Array.prototype.forEach (권장x)

---

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script defer src="./script/defer.js"></script>
    <script>
        // 웹 브라우저가 열렸으면 실행시켜라
        // 웹 브라우저가 로드 된 이후의 실행
        // onload에 함수를 정의하는 방식은 브라우저 엔진에게 부담
        // 따라서 onload는 명확히 해당 브라우저가 실행되고 나서 실행되어야하는 로직을 정의
        window.onload = function(){
            const idDom2 = document.getElementById("id")
            console.log(idDom2)
        }
    </script>
</head>
<body>
    <div id="id">ID</div>
    <div class="class">CLASS</div>
</body>
    <script>
        // 스크립트 순서 중요 DOM 생성 전에 읽을 수 없다
        // const idDom = document.getElementById("id")
        // const idSelector = document.querySelector("#id")
        // console.log(idDom, idSelector)
    </script>
</html>

---

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .on {
            background-color : blue;
        }
    </style>
    <!-- <script defer src = ""> </script> 이렇게 사용하면 사용가능 -->
    <script>
        // 브라우저가 열리고 나서(로드 되고나서) 실행
        window.onload = function(){
            // js를 위에 선언하는 것을 위로 올리려는 용도로 사용하는 것이 아니라
            // 실제 페이지가 로드 되었을 때 실행해야하는 이벤트가 있다면 사용
            const $idDom = document.getElementById("id")
            console.log($idDom)
            // $idDom.style.color = "red"
            // $idDom.style.fontSize = "48px"\
            // 개별 dom의 style 요소 추가

            $idDom.classList.add('on')
            $idDom.classList.add('apple')
            $idDom.classList.add('banana')
            // 클래스명 추가 -> 다양한 이벤트/스타일 효과를 추가

            $idDom.classList.remove('on')

            const $classDom = document.getElementsByClassName('class');
            console.log($classDom)  // 여러개 있을 가능성이 있어서 유사배열객체로 반환된다.
            // 유사배열객체 반환 인덱스로 접근 --> Element "s" --> HTML COLLECTION
            // document.getElementsByName('checkbox')
            // document.getElementsByTagName('div')

            $classDom[0].classList.add('on') // 기존클래스 + a
            // $classDom[0].className = 'apple' 클래스명 속성 자체를 바꿉니다.
        }
    </script>

</head>
<body>
    <div id="id">ID</div>
    <div class="class">CLASS</div>
    <script>
        // ID,CLASS의 폰트 색상을 바꿔주고 싶어요
        // script로 내가 바꾸고 싶은 요소 선택 (DOM -SELECTOR)
        const $idDom = document.getElementById("id")
        // DOM 요소 변수, 다른 변수와 혼동되지 말라고 앞에 $를 붙입니다
        // 무조건 안된다 null이 뜬다
        console.log($idDom)
    </script>
</body>
</html>

DomAPI 왜 사용할까?
사용자의 행위에 따라 HTML 요소(div,span)의 properties를 바꾸기 위해 사용합니다 => html, css 정적인 페이지 => 동적으로 만들기 위해서

---

selector

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script defer src="./script/defer.js"></script>
    <script>
        // 웹 브라우저가 열렸으면 실행시켜라
        // 웹 브라우저가 로드 된 이후의 실행
        // onload에 함수를 정의하는 방식은 브라우저 엔진에게 부담
        // 따라서 onload는 명확히 해당 브라우저가 실행되고 나서 실행되어야하는 로직을 정의
        window.onload = function(){
            const idDom2 = document.getElementById("id")
            console.log(idDom2)
        }
    </script>
</head>
<body>
    <div id="id">ID</div>
    <div class="class">CLASS</div>
    <ul id="list">
        <li class="red">list-1</li>
        <li class="red">list-2</li>
        <li class="red">list-3</li>
    </ul>
</body>
    <script>
        // 스크립트 순서 중요 DOM 생성 전에 읽을 수 없다
        // const idDom = document.getElementById("id")
        // const idSelector = document.querySelector("#id")
        // console.log(idDom, idSelector)
    </script>
</html>
