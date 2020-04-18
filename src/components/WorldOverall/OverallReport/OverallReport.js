import React, { Component } from "react";
import classes from "./OverallReport.module.css";
import { connect } from "react-redux";

class OverallReport extends Component {
  render() {
    return (
      <div className={classes.OverallReport}>
        <div>
          <span>{this.props.total}</span>
          <p>TOTAL CASE</p>
        </div>
        <div>
          <span>{this.props.recovered}</span>
          <p>RECOVERED</p>
        </div>
        <div>
          <span>{this.props.deaths}</span>
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
  };
};

export default connect(mapStateToProps, null)(OverallReport);
