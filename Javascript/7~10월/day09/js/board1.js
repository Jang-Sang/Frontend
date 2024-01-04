/*
crud

read
create
delete
update

*/

import boardMock from './mock/mock.json' assert {type : json}
console.log(boardMock)

// read
// 어디에다가 추가하고 싶은지?
// board list
const $boardList = document.querySelector('.board-list')

// 최종 구현 형태?
/**
  <article class="board-card">
   <h3 class="flex-center">example-title
       <button>삭제</button>
   </h3>
   <div class="flex-center">
       example-content
   </div>
  </article>
 */

const boardList = boardMock.map((board) => {
    return `
    <article class="board-card" data-role=${board.id}>
   <h3 class="flex-center">${board.title}
       <button>삭제</button>
   </h3>
   <div class="flex-center">
       ${board.content}
   </div>
  </article>
  `
}).join("")
// ["article", "article", "article"] -> "article article article"
// 배열 3개를 만들었다가 join을 사용해서 배열 하나로 만든다.
// = string 3개를 만들었다가 기능성 string 하나로 합친다.
$boardList.innerHTML = boardList


// create
// 어디에다가 추가하고 싶은지?
// 최종구현형태

const $writeBtn = document.querySelector('.writeBtn')
const $title = document.querySelector('title')
const $content = document.querySelector('.content') 

$writeBtn.addEventListener('click', ()=>{
    // 예외처리
    if(!$title.value.trim()||!confirm.value.trim()){
        return alert('내용을 입력해주세요')
    }
    // 비어있는 요소생성 -> appendChild는 매개변수로
    const article = document.createElement('article')

    // 요소안에 데이터 추가
    article.innerHTML = `
    <h3 class="flex-center">${board.title}
    <button>삭제</button>
    </h3>
    <div class="flex-center">
    ${board.content}
    </div>
    `

    // appendChild()
    $boardList.appendChild(article)
})