# 버블링(bubble)

한 요소에 이벤트가 발생되면, 이어서 부모 요소의 핸들러가 동작 => 하위 요소의 이벤트가 부모 요소의 이벤트로 전파

# 캡쳐링(capture)

버블링과는 반대, 부모 요소를 클릭했을 때 하위 요소로 이벤트가 전파되는 것
캡쳐링의 기본 옵션은 false
addEventListener의 options 인자로 t/f를 변동 가능

```jsx
ex)
el.addEventListener('click', function(){}, true)
```

---

## capture

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <style>
            body * {
                margin: 10px;
                border: 1px solid #00f;
            }
        </style>
    </head>
    <body>
        <form>
            FORM
            <div>
                DIV
                <p>P</p>
            </div>
        </form>
        <script>
            const els = document.querySelectorAll('*');
            for (let el of els) {
                el.addEventListener(
                    'click',
                    function (e) {
                        alert(el.tagName);
                    },
                    true // true, false 생략 가능
                );
            }
        </script>
    </body>
</html>

---

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>캡쳐링</title>
        <style>
            body * {
                margin: 10px;
                border: 1px solid #00f;
            }
        </style>
    </head>
    <body>
        <form>
            FORM
            <div>
                DIV
                <p>P</p>
            </div>
        </form>
        <script>
            const els = document.querySelectorAll('*');
            // 모든요소를 가져옴
            for (let el of els) {
                // 각 요소마다 클릭했을 때 이벤트 추가
                el.addEventListener(
                    'click',
                    (e) => {
                        // e.stopPropagation()
                        alert(el.tagName);
                        // 해당 요소의 태그 이름을 alert로 띄워주는 이벤트
                    },
                    true // true, false 생략 가능, 캡쳐링 옵션 변경
                );
            }
        </script>
    </body>
</html>

---

bubble

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Bubble</title>
    </head>
    <style>
        body * {
            margin: 10px;
            border: 1px solid #00f;
        }
    </style>
    <body>
        <div class="DIV1">
            DIV1
            <div class="DIV2">
                DIV2
                <div class="DIV3">DIV3</div>
            </div>
        </div>
        <button>div 추가</button>
        <script>
            const divs = document.querySelectorAll('div');

            const onClickDiv = (e) => {
                // e.stopPropagation();
                console.log(e.currentTarget.className);
                // 겹쳐있는 요소에서 event가 일어난 객체를 가지고 올 때는 currentTarget
                // 아니면 그냥 target
            };

            for (let div of divs) {
                div.addEventListener('click', onClickDiv);
            }

            // const arr = [1,2,3,4,5]
            // arr , map ,set
        </script>
    </body>

</html>

---

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Bubble</title>
    </head>
    <style>
        body * {
            margin: 10px;
            border: 1px solid #00f;
        }
    </style>
    <body>
        <div class="DIV1">
            DIV1
            <div class="DIV2">
                DIV2
                <div class="DIV3">DIV3</div>
            </div>
        </div>
        <button>div 추가</button>
        <script>
            // div 들에게 이벤트리스너를 줄 것
            const divs = document.querySelectorAll('div');

            const onClickDiv = (e) => {
                // e.stopPropagation();
                console.log(e.currentTarget.className);
                // 겹쳐있는 요소에서 event가 일어난 객체를 가지고 올 때는 currentTarget
                // 아니면 그냥 target
            };

            for (let div of divs) {
                div.addEventListener('click', onClickDiv);
            }

            // const arr = [1,2,3,4,5]
            // arr , map ,set
        </script>
    </body>

</html>
