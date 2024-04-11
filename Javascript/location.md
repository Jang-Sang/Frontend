location 객체
자바스크립트의 window가 갖는 빌트인
그러나 window는 생략이 가능
현재 인터넷 창의 URL(주소)를 나타내는 객체

메서드
replace = 인자로 전달된 주소로 이동, history에 남지않습니다.
reload = 새로고침
assign = 인자로 전달된 새로운 주소로 이동, history가 남습니다.

속성
hash = 도메인에 #뒤에 붙은 값을 가지고옴
ex) www.seongyong.com#blog
==> blog

hostname = URL의 도메인
origin = 프로토콜 + URL 도메인 + 포트번호
pathname = 원본 주소 제외한 나머지 경로
ex) www.seongyong.com/post
==> post

port = 포트번호
서버 -> 호텔
포트 -> 방
protocol = http/https
\*\* search = URL에 추가된 쿼리 스트링을 가지고 옴
ex) www.seongyong.com/goods?good_idx=380502
good_idx = 380502

- 이전 페이지의 대한 값을 다음 페이제이서 가지고 있을 수 없기 때문에 주소로 통해 데이터를 전달
- 같은 페이지 내라고 하더라도 사용자에게 현재 위치를 알려주고 주소의 history를 남겨 뒤로가기를 지원하기 위하여 전달

* href = 현재의 URL을 반환, 해당 속성의 값을 바꿔주면 페이지가 이동

histroy 객체
사용자가 방문한 URL의 기록
이전 페이지 혹은 다음 페이지로 이동 시킬 수 있는 객체

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <title>POST</title>
</head>
<body>
    <h2>상세보기</h2>
    <div id="title"></div>
    <div id="content"></div>

    <table>
        <tr>
            <th>이메일</th>
            <th>내용</th>
        </tr>
    </table>


    <script>
        // 리스트 페이지 location.href = `/detail.html?postidx=${postIdx}&userIdx=${userId}` = /detail.html
        // ?(쿼리스트링 시작) &(and)
        // 쿼리스트링은 주소에 영향을 끼치 않으며 일종의 부가정보로만 사용

        const searchParams = new URLSearchParams(location.search)
        const postId = searchParams.get('postId')
        console.log(postId)

        const BACKEND_URL = 'https://jsonplaceholder.typicode.com'

        axios.get(BACKEND_URL+`/posts/${postId}`).then((res)=> console.log(res))
        axios.get(BACKEND_URL+`/comments?postId=${postId}`).then((res)=>console.log(res))


    </script>
    </body>

</html>
