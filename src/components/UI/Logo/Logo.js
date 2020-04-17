import React from "react";
import classes from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={classes.Logo}>
      <div>
        <p>
          <strong>Covid19</strong>
        </p>
        <p>LIVE UPDATE</p>
      </div>
      <div>
        <p>STAY HOME</p>
        <h1>COVID-19</h1>
      </div>
    </div>
  );
};

export default Logo;
