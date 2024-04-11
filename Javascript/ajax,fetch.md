백엔드랑 API로 데이터 통신
[https://jsonplaceholder.typicode.com](https://jsonplaceholder.typicode.com/)

---

ajax?
본래 의미는 Javascript를 비동기 통신, 클라이언트와 서버 간의 데이터를 주고 받는 기술

www.naver.com <---- html,css,js
----> com/login <--- html, css, js

- axios, fetch
  기존의 Web에서는 비동기 요청을 보내기 위해 XML HTTP REQUEST(XHR) 객체를 생성했어야함
  그러나 이러한 XHR은 요청의 상태나 변경에 따라 개발자의 의도에 맞게 사용하기는 적합지 않았음
  따라서 이를 보완하기 위하여 HTTP 요청에 최적화 되고 추상화도 되었이는 API들이 생겨나기 시작함
  대표적으로 axios, fetch

fetch
ES6부터 자바스크립트의 빌트인 객체로 내장 되어있음, 안정성이 뛰어남
Promise 기반으로 만들어져 코드 또한 간편함
ex)
fetch(url, option).then().catch()
단 단점이 있다면 데이터 요청 및 응답데이터 수신 시 JSON를 데이터를 받아올 수 없기 때문에
파싱 작업을 해야함

ex)
reoponse.json()
// string -> json
JSON.stringfy()
// json - string

ajax

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ajax</title>
</head>
<body>
    <script>
        const BAKEND_URL = 'https://jsonplaceholder.typicode.com/posts';
        const req = new XMLHttpRequest();
        // req => http request 객체 생성

        req.open('GET', BAKEND_URL)
        // http request 객체에 GET으로  BACKEND_URL 등록
        req.send();
        // request message 전송 ---> backend URL

        req.addEventListener('load', (res) => {
            console.log(res.currentTarget.response)
        })
        // req 실행 시점
        // req 생성 -> 요청 전송 -> 응답 console.log

        /*
        jQuery
            $ajax({
                method: "GET",
                url: BAKEND_URL
            }).then((res)=>{
                console.log(res)1
            })
        */
    </script>

</body>
</html>

fetch

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JSON</title>
</head>
<body>
    <div class="list"></div>
    <script>
        const BAKEND_URL = 'https://jsonplaceholder.typicode.com/posts';
        
        fetch(BAKEND_URL, {
            method: "GET"
        }).then((res)=>res.json())
        .then((res)=>{
            console.log(res)
            const $list = document.querySelector('.list');
            $list.innerHTML = res.map((post)=> `<div class="post_box">${post.body}</div>`).join('')
        })

        const requestPosts = async() => {
            let res = await fetch(BAKEND_URL,{method:"GET"}) //Promise
            console.log(res.json())
            res = await res.json() // Promise
            console.log(res)
        }
        requestPosts();

        /*
        fetch -> backendUrl request -> response -> json Parse -> (Promise) -> then, await
        */

    </script>

</body>
</html>
