import React from "react";
import classes from "./Reports.module.css";

import Report from "./Report/Report";

const Reports = (props) => {
  const reportsData = [
    {
      country: "usa",
      confirmed: 678144,
      recovered: 57754,
      critical: 13369,
      deaths: 34641,
    },
    {
      country: "spain",
      confirmed: 184948,
      recovered: 74797,
      critical: 7371,
      deaths: 19315,
    },
    {
      country: "italy",
      confirmed: 168941,
      recovered: 40164,
      critical: 2936,
      deaths: 22170,
    },
  ];

  const reports = reportsData.map((ctry, index) => (
    <Report
      key={index}
      country={ctry.country}
      confirmed={ctry.confirmed}
      recovered={ctry.recovered}
      critical={ctry.critical}
      deaths={ctry.deaths}
    />
  ));

  return (
    <div className={classes.Reports}>
      <div>Top 3 country</div>
      <div>{reports}</div>
    </div>
  );
};

export default Reports;
