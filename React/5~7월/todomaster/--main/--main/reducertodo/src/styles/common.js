import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

//common이랑 global이랑 파일이 바뀜
//경로때문에 그냥 씀
//globalStyle도 App.js에서 import 해서 씀
//전역(모든 컴포넌트에서 사용하는 것)으로 쓰는 거는 APp.js에서 임포트
const GlobalStyles = createGlobalStyle`
//reset css. css를 기본으로 만드는 것
${reset}
*{
    box-sizing: border-box;
}
body{
    //body에서 쓰는 색상
    background-color: #e7e7e7;
}
button{
    border:none;
    //css적용되고 있음
    /* padding-bottom:30px; */
}
ul>li{
    list-style: none;
}

`
export default GlobalStyles
