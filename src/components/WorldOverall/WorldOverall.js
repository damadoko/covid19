import React, { Component } from "react";

import classes from "./WorldOverall.module.css";

import OverallReport from "./OverallReport/OverallReport";
import Reports from "./Reports/Reports";
import News from "./News/News";

class WorldOverall extends Component {
  render() {
    return (
      <div className={classes.WorldOverall}>
        <OverallReport />
        <Reports />
        <News />
      </div>
    );
  }
}

export default WorldOverall;
