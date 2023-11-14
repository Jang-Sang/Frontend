import { createGlobalStyle } from "styled-components"
import reset from 'styled-reset'

const GlobalStyles = createGlobalStyle`
  // reset.css
  ${reset}
  * {
    box-sizing: border-box;
    list-style: none;
  }
  body {
    background-color: #e7e7e7;
  }
  button {
    border: none;
  }
`
// 이건 회사마다 모두 다르다. 상황에 맞춰 사용할 것


export default GlobalStyles