import React from "react";
import classes from "./Logo.module.css";
import Aux from "../../../hoc/Aux/Aux";

const Logo = () => {
  return (
    <Aux>
      <div className={classes.Logo}>
        <p>
          <strong>Covid19</strong>
        </p>
        <p>LIVE UPDATE</p>
      </div>
      <div className={classes.LogoFixed}>
        <p>STAY HOME</p>
        <h1>COVID-19</h1>
      </div>
    </Aux>
  );
};

export default Logo;
