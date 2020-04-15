import React from "react";
import classes from "./Logo.module.css";
import logo from "../../../assets/logo.svg";

const Logo = () => {
  return (
    <div className={classes.Logo}>
      <img className={classes.LogoImg} src={logo} alt="logo" />
    </div>
  );
};

export default Logo;
