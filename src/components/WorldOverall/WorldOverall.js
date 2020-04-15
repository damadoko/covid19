import React, { Component } from "react";
import classes from "./WorldOverall.module.css";

import { connect } from "react-redux";

class WorldOverall extends Component {
  render() {
    return (
      <div className={classes.WorldOverall}>
        <div className={classes.Countries}>
          <span>{this.props.countryEffected}</span>
          <p>Country Effected</p>
        </div>
        <div>Report</div>
        <div>News</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    countryEffected: state.totalEffectedCountry,
  };
};

export default connect(mapStateToProps, null)(WorldOverall);
