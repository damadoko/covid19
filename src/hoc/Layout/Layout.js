import React from "react";

import classes from "./Layout.module.css";
import Logo from "../../components/UI/Logo/Logo";
import Menu from "../../components/UI/Menu/Menu";

const Layout = (props) => {
  return (
    <div className={classes.Layout}>
      <Logo />
      <p>Filter</p>
      <main>{props.children}</main>
      <Menu />
    </div>
  );
};

export default Layout;
