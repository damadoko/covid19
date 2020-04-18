import React, { Component } from "react";
import classes from "./OverallReport.module.css";
import { connect } from "react-redux";

class OverallReport extends Component {
  render() {
    return (
      <div className={classes.OverallReport}>
        <span>Live</span>
        <div>
          <span>{this.props.total}</span>
          <span>(+{this.props.newCase})</span>
          <p>TOTAL CASE</p>
        </div>
        <div>
          <span>{this.props.recovered}</span>
          <span>(+{this.props.newRecovered})</span>
          <p>RECOVERED</p>
        </div>
        <div>
          <span>{this.props.deaths}</span>
          <span> (+{this.props.newDeaths})</span>
          <p>DEATHS</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    total: state.overallData.totalCase,
    recovered: state.overallData.recovered,
    deaths: state.overallData.deaths,
    newCase: state.overallData.newCase,
    newRecovered: state.overallData.newRecovered,
    newDeaths: state.overallData.newDeaths,
  };
};

export default connect(mapStateToProps, null)(OverallReport);
