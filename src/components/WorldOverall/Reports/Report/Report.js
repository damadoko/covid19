import React from "react";
import classes from "./Report.module.css";

const Report = (props) => {
  const { country, confirmed, recovered, critical, deaths } = props;
  return (
    <div className={classes.Report}>
      <div>{country}</div>
      <div>
        <p>
          <strong>{confirmed}</strong>
        </p>
        <p>Confirmed</p>
      </div>
      <div>
        <p>
          <strong>{recovered}</strong>
        </p>
        <p>Recovered</p>
      </div>
      <div>
        <p>
          <strong>{critical}</strong>
        </p>
        <p>Critical</p>
      </div>
      <div>
        <p>
          <strong>{deaths}</strong>
        </p>
        <p>Deaths</p>
      </div>
    </div>
  );
};

export default Report;
