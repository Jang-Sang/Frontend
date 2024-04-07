# attribute(속성)

- setAttribute("속성명", 속성값) - 설정
- getAttribute("속성명") - 속성 값의 조회
- removeAttribute("속성명") - 삭제

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

</head>
<body>
    <div id="attribute">속성</div>
    <input name="attr-name" placeholder="속성명 입력"/>
    <input name="attr-value" placeholder="속성값 입력"/>
    <button onclick="addAttribute()">속성추가</button>
    <button onclick="readAttribute()">속성 조회</button>
    <button>속성 삭제</button>
    <script>
        const $attr1 = document.getElementById("attribute");
        const $attr2 = document.getElementsByName('attr-name')[0]
        const $attr3 = document.getElementsByName('attr-value')[0]  
        function addAttribute(){
            const attrName = $attr2.value 
            const attrValue = $attr3.value
            if( !attrName || !attrValue) return;
            $attr1.setAttribute(attrName, attrValue)
            $attr2.value = '';
            $attr3.value = '';
        }
        function readAttribute(){
            if(!$attr2.value) return alert("속성명을 입력해주세요")
            console.log($attr1.getAttribute($attr2.value));
            $attr2.value = '';
            // input의 value에는 null이나 undefined이 들어갈 수 없다
        }
        function deleteAttribute(){
            if(!$attr2.value) return alert("속성명을 입력해주세요")
            $attr1.removeAttribute($attr2.value);
            $attr2.value = '';
        }
    </script>
</body>
</html>

```jsx
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div class="post-list"></div>
  </body>
  <script>
    const $postList = document.querySelector(".post-list");
    let posts = [
      {
        id: 1,
        title: "title1",
        content: "content1",
      },
      {
        id: 2,
        title: "title2",
        content: "content2",
      },
      {
        id: 3,
        title: "title3",
        content: "content3",
      },
    ];

    function renderPost(postArr) {
      const postHtml = postArr
        .map(
          (post) => `<div data-role=${post.id}>
            <div>${post.title}</div><div>${post.content}</div>
            <button class="delete-post-btn">삭제</button>
        </div>`
        )
        .join("");
      $postList.innerHTML = postHtml;

      const $deletPostBtn = document.querySelectorAll(".delete-post-btn");
      console.log($deletPostBtn);

      $deletPostBtn.forEach((btn) => {
        btn.addEventListener("click", (e) => {
          console.log(e.target.parentNode);
          const parent = e.target.parentNode;
          const targetId = parent.getAttribute("data-role");
          const deletePost = posts.filter(
            (post) => post.id !== parseInt(targetId)
          );
          posts = deletePost;
          // const posthtml = deletePost.map((post)=> `<div data-role=${post.id}>
          //     <div>${post.title}</div>
          //     <div>${post.content}</div>
          //     <button class="delete-post-btn">삭제</button>
          // </div>`).join('')
          // $postList.innerHTML = postHtml
          renderPost(deletePost);
          /*
                e -> 이벤트 객체
                target -> 이벤트 대상
                parentNode -> 이벤트 대상 부모 요소
                */
        });
      });
    }

    renderPost(posts);
    // const postHtml = posts.map((post)=> `<div data-role=${post.id}>
    //     <div>${post.title}</div>
    //     <div>${post.content}</div>
    //     <button class="delete-post-btn">삭제</button>
    // </div>`).join('')
    // $postList.innerHTML = postHtml
  </script>
</html>
```
