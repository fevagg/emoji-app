import React, { useEffect } from "react";
import { Outlet } from "react-router";
import Navigator from "./Navigator/Navigator";
import Footer from "./Footer/Footer";

const onScrollProperty = () => {
  window.addEventListener(
    "scroll",
    () => {
      document.body.style.setProperty(
        "--scroll",
        window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
      );
    },
    false
  );
};

const Layout = () => {
  useEffect(() => {
    onScrollProperty();
  }, []);

  return (
    <main className="App-body">
      <Navigator />
      <Outlet />
      <Footer />
    </main>
  );
};

export default Layout;
