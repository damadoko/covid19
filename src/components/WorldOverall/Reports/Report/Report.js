import React from "react";
import classes from "./Report.module.css";

const Report = (props) => {
  const { country, confirmed } = props;
  return (
    <div className={classes.Report}>
      <div>{country}</div>
      <div>
        <p>{confirmed}</p>
        <p>Confirmed</p>
      </div>
    </div>
  );
};

export default Report;
