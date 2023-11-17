import { Outlet } from "react-router"
import Footer from "./footer"
import Header from "./header"

const Layout = () => {
  return <>
    <Header/>
      <Outlet/>
      {/*자식 라우트 중에서 주소와 맞는 컴포넌트를 랜더*/}
    <Footer/>
  </>
}
export default Layout