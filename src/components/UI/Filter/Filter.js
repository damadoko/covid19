import React from "react";
import classes from "./Filter.module.css";

const Filter = (props) => {
  const filterArr = ["ALL", "TODAY", "YESTERDAY"];
  const filterBar = filterArr.map((item, index) => (
    <div key={index} data-active="false">
      {item}
    </div>
  ));
  return <div className={classes.Filter}>{filterBar}</div>;
};

export default Filter;
