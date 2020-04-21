import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./Filter.module.css";

const Filter = (props) => {
  return (
    <div className={classes.Filter}>
      <NavLink to="/home" exact activeClassName={classes.active}>
        OVERVIEW
        <span />
      </NavLink>
      <NavLink to="/country/Vietnam" activeClassName={classes.active}>
        EXPLORER
        <span />
      </NavLink>
    </div>
  );
};

export default Filter;
