import { Outlet } from "react-router-dom";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
const Layout = () => {
  console.log("test");
  return (
    <>
      <Header />
      <Outlet />
      {/* 감싸고 있는 경로중에 맞는 경로를 가져와준다. */}
      <Footer />
    </>
  );
};

export default Layout;
