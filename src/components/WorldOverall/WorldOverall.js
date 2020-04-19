import React, { Component } from "react";
import { connect } from "react-redux";

import classes from "./WorldOverall.module.css";

import OverallReport from "./OverallReport/OverallReport";
import Reports from "./Reports/Reports";
import News from "./News/News";

class WorldOverall extends Component {
  render() {
    return (
      <div className={classes.WorldOverall}>
        <OverallReport
          total={this.props.overallData.cases.total}
          newCase={this.props.overallData.cases.new}
          recovered={this.props.overallData.cases.recovered}
          deaths={this.props.overallData.deaths.total}
          newDeaths={this.props.overallData.deaths.new}
        />
        <Reports />
        <News newsArr={this.props.newsArr} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    overallData: state.overall.overallData,
    newsArr: state.overall.worldHotNews,
  };
};

export default connect(mapStateToProps, null)(WorldOverall);
