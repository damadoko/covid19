import React from "react";

import classes from "./OverallReport.module.css";

const OverallReport = (props) => {
  const { total, newCase, recovered, deaths, newDeaths } = props;
  return (
    <div className={classes.OverallReport}>
      <span>Live</span>
      <div>
        <span>{total}</span>
        <span>({newCase})</span>
        <p>TOTAL CASE</p>
      </div>
      <div>
        <span>{recovered}</span>
        <p>RECOVERED</p>
      </div>
      <div>
        <span>{deaths}</span>
        <span> ({newDeaths})</span>
        <p>DEATHS</p>
      </div>
    </div>
  );
};

export default OverallReport;
