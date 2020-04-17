import React, { Component } from "react";
import classes from "./OverallReport.module.css";
import { connect } from "react-redux";

class OverallReport extends Component {
  render() {
    return (
      <div>
        <div className={classes.OverallReport}>
          <span>{this.props.countryEffected}</span>
          <p>Country Effected</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    countryEffected: state.totalEffectedCountry,
  };
};

export default connect(mapStateToProps, null)(OverallReport);
