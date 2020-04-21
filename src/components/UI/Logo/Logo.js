import React from "react";
import { connect } from "react-redux";

import classes from "./Logo.module.css";
import Aux from "../../../hoc/Aux/Aux";

const Logo = (props) => {
  const { lastUpdate } = props;
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
        <span>Lasted Update: {lastUpdate}</span>
      </div>
    </Aux>
  );
};

const mapStateToProps = (state) => {
  return {
    lastUpdate: state.lastUpdate,
  };
};

export default connect(mapStateToProps, null)(Logo);
