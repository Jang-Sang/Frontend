axios
빌트인 객체x
CDN으로 라이브러리를 가지고 와서 사용, Promise 기반

크로스브라우징에 신경을 썼음 거의 모든 브라우저 호환
다양한 기능을 기원 (timeout, interceoptor ...)

https://axios-http.com/kr/docs/intro

라이브러리 설치에 의한 의존성 상승

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <title>Document</title>
</head>
<body>
    <table>
        <tr>
            <th>제목</th>
            <th>내용</th>
        </tr>
    </table>
    <script>
        const BACKEND_URL = 'https://123.coms';

        const errorHandle = async (message, status) => {
            switch(status){
                case 404:
                    alert('페이지를 찾을 수 없습니다');
                    location.href = './404.html'
            }
        }

        const loadPosts = async () => {
            try{
                // const result = await axios(BAKEND_URL, {
                //     method: "GET"
                // })
                const result = await axios.get(BACKEND_URL)
                const ten_result =  result.data.slice(0,10);
                const $table = document.querySelector('table');


                //1
                const posts = ten_result.map((post) => `
                    <tr>
                        <td>${post.title}</td>
                        <td>${post.body}</td>
                    </tr>
                `).join("")
                console.log(posts)
                $table.insertAdjacentHTML('beforeend', posts)

                //2
                $table.innerHTML += posts

                //3
                for(let post of ten_result){
                    const tr = document.createElement('tr') // <tr></tr>
                    tr.innerHTML = `
                        <td>${post.title}</td>
                        <td>${post.body}</td>
                    `

                    $table.append(tr)
                    // append 사용가능 매개변수에는 elment가 들어가야만함
                    // 그러나 위의 posts는 string
                }

            }catch(err){
                console.log(err)
                errorHandle(err.message, err.response.status)
            }
        }
        loadPosts()
        /*
        axios -> backendUrl request -> response
        axios config / dev tools network tab -- debug
        */
    </script>

</body>
</html>

404

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>페이지를 찾을 수 없습니다</title>
</head>
<body>
    <h1>404</h1>
    <h4>페이지를 찾을 수 없습니다</h4>
    <button>HOME</button>
</body>
</html>
