# ClassList

- 해당 요소가 가지고 있는 클래스의 목록을 나타내는 DOM properties

```jsx
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

    ** this (이거, 자기 자신)
        자바스크립의 this는 동적으로 바인딩(결정) 되며
        => 누가 this를 불렀는가에 따라서 값이 바뀐다

    addEventListener의 this는 이벤트 자체를 불러옵니다.
    따라서 이벤트가 일어난 대상을 찾기위해선 e.target을 통해 명확한 요소를 불러올 수 있음
```

```jsx
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .flex-center {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .white-font {
            color: #fff;
        }

        nav {
            width: 100%;
            height: 60px;
            background-color: red;
        }

        .hide-menu {
            background-color: blue;
            transition: all 0.5s ease-in-out;
            overflow: hidden;
            height: 0px;
        }

        .on {
            height: 300px;
        }
    </style>
</head>
<body>
    <header>
        <nav class="flex-center white-font">HEADER</nav>
        <div class="hide-menu flex-center white-font">MENU</div>
    </header>
    <script>
        const $header = document.getElementsByTagName('header')[0]
        const $hidemenu = document.querySelector('.hide-menu')

        $header.addEventListener('mouseover', (e)=>{
            console.log(e)
            // $hidemenu.classList.add('on')
            $hidemenu.style.height="300px"
        })

        $header.addEventListener('mouseleave', (e)=>{
            console.log(e)
            // $hidemenu.classList.remove('on')
            $hidemenu.style.height="0px"
        })
    </script>
</body>
</html>
```

```jsx
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .flex-center {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .white-font {
            color: #fff;
        }

        nav {
            width: 100%;
            height: 60px;
            background-color: red;
        }

        .hide-menu {
            background-color: blue;
            transition: all 0.5s ease-in-out;
            overflow: hidden;
            height: 0px;
        }

        .on {
            height: 300px;
        }
    </style>
</head>
<body>
    <header>
        <nav class="flex-center white-font">HEADER</nav>
        <div class="hide-menu flex-center white-font">MENU</div>
    </header>
    <script>
        const $header = document.getElementsByTagName('header')[0]
        const $hidemenu = document.querySelector('.hide-menu')

        $header.addEventListener('mouseover', (e)=>{
            console.log(e)
            // $hidemenu.classList.add('on')
            $hidemenu.style.height="300px"
        })

        $header.addEventListener('mouseleave', (e)=>{
            console.log(e)
            // $hidemenu.classList.remove('on')
            $hidemenu.style.height="0px"
        })
    </script>
</body>
</html>
```
