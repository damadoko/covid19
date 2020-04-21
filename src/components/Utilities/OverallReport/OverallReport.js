import React, { Component } from "react";
import classes from "./OverallReport.module.css";

class OverallReport extends Component {
  render() {
    const { total, newCase, recovered, deaths, newDeaths } = this.props;
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
          {/* <span>({newRecovered})</span> */}
          <p>RECOVERED</p>
        </div>
        <div>
          <span>{deaths}</span>
          <span> ({newDeaths})</span>
          <p>DEATHS</p>
        </div>
      </div>
    );
  }
}

export default OverallReport;
