import React from "react";

import classes from "./Layout.module.css";
import Logo from "../../components/UI/Logo/Logo";
import Menu from "../../components/UI/Menu/Menu";
import Filter from "../../components/UI/Filter/Filter";

const Layout = (props) => {
  return (
    <div className={classes.Layout}>
      <Logo />
      <Filter />
      <main>{props.children}</main>
      <Menu />
    </div>
  );
};

export default Layout;
