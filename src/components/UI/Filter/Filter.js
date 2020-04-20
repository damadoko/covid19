import React from "react";
import classes from "./Filter.module.css";
import { NavLink } from "react-router-dom";

const Filter = (props) => {
  // const filterArr = ["ALL", "TODAY", "YESTERDAY"];
  // const filterBar = filterArr.map((item, index) => (
  //   <div key={index} data-active="false">
  //     {item}
  //   </div>
  // ));
  return (
    <div className={classes.Filter}>
      <NavLink to="/home" activeClassName={classes.active}>
        OVERVIEW
        <span />
      </NavLink>{" "}
      <NavLink to="/country" activeClassName={classes.active}>
        EXPLORER
        <span />
      </NavLink>
    </div>
  );
};

export default Filter;
