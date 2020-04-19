import React from "react";
import { connect } from "react-redux";
import classes from "./Reports.module.css";

import Report from "./Report/Report";

const Reports = (props) => {
  // const reportsData = [
  //   {
  //     country: "usa",
  //     confirmed: 678144,
  //     recovered: 57754,
  //     critical: 13369,
  //     deaths: 34641,
  //   },
  //   {
  //     country: "spain",
  //     confirmed: 184948,
  //     recovered: 74797,
  //     critical: 7371,
  //     deaths: 19315,
  //   },
  //   {
  //     country: "italy",
  //     confirmed: 168941,
  //     recovered: 40164,
  //     critical: 2936,
  //     deaths: 22170,
  //   },
  // ];

  const reports = props.top3Country.map((ctry, index) => (
    <Report
      key={index}
      country={ctry.country}
      confirmed={ctry.cases.total}
      recovered={ctry.cases.recovered}
      critical={ctry.cases.critical}
      deaths={ctry.deaths.total}
    />
  ));

  return (
    <div className={classes.Reports}>
      <div>Top 3 country</div>
      <div>{reports}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    top3Country: state.overall.top3Country,
  };
};

export default connect(mapStateToProps, null)(Reports);
