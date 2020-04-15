import React from "react";

import classes from "./Layout.module.css";
import Logo from "../../components/UI/Logo/Logo";

const Layout = (props) => {
  return (
    <div className={classes.Layout}>
      <Logo />
      <p>Filter</p>
      <main>{props.children}</main>
      <p>Menu</p>
    </div>
  );
};

export default Layout;
