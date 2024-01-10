const $nameInput = document.querySelector('#name')
const $titleInput = document.querySelector('#title')
const $writeBtn = document.querySelector('#write-btn')
const $postBody = document.querySelector('table tbody')

$writeBtn.addEventListener('click', () => {
    //name value, title value
    //tbody, html
    // appendChild, insertBefore, insertAfter
    // innerHTML

    // 내가 어디에 데이터를 추가하고 싶은가?
    // tbody, 아래로 누적, 위로 누적

    // 데이터를 어떤 형태로 추가해야하는가
    /**
     * <tr>
     *  <td>title</td>
     *  <td>name</td>
     *  <td>hits</td>
     *  <td>remove</td>
     * </tr>
     */

    innerHTML
    const newPosts = `
    <tr>
      <td>${$titleInput.value}</td>
      <td>${$nameInput.value}</td>
      <td>hits</td>
      <td>
        <button>
         삭제   
        </button>
        </td>
      </tr>
    `

    $postBody.innerHTML += newPosts;

    //  $postBody.innerHTML = newPosts;

    // const newPosts = document.createElement('tr')
    // 비어있는 tr요소를 생성
    // 해당요소에 html을 채워넣음
    newPosts.innerHTML=`
    <td>${$titleInput.value}</td>
      <td>${$nameInput.value}</td>
      <td>hits</td>
      <td>
        <button>
         삭제   
        </button>
        </td>
    `

    $postBody.insertAdjacentElement('afterend', newPosts)
    // 특정 노드(요소)에 앞 혹은 뒤에 요소를 추가
    // beforebegin 특정 노드 앞
    // afterbegin 가장 첫번째 자식
    // beforeend 가장 마지막 자식
    // afterend 특정 노드 뒤

    // $postBody.insertAdjacentHTML(newPosts)
    // 매개변수로 node(요소), html(X)
    // 자식요소로 해당 요소가 추가됩니다.

    // $postBody.insertBefore(newPosts, null)
    // 해당 요소에 요소를 추가하는데
    // 첫번째 인자로는 새로 추가할 노드(요소)
    // 두번째 인자로는 기준이 되는 노드(노드 앞에서 생성)
    // null이면 부모요소의 끝에 추가

    // 자식으로 추가하느냐 해당 요소의 앞과 뒤냐
    // 여러분이 추가하고자하는 위치에 있는지
})

/**
 * 부모 노드에 접근해서 속성값에 접근하여 해당 값의 고유값
 * 고유값으로 데이터를 삭제(filter)
 * 
 * 반복되는 함수의 모듈화
 * 
 * 백엔드가 있다는 가정하에 가상데이터 post를 만들고 
 * 그 post html에서 조회
 * 
 * 기존의 데이터 수정
 * 
 * -> CRUD ()
 * create
 * read
 * update
 * delete
 */