import React, { Component } from "react";
import { connect } from "react-redux";
import classes from "./WorldOverall.module.css";

import Reports from "./Reports/Reports";
import News from "./News/News";

class WorldOverall extends Component {
  render() {
    return (
      <div className={classes.WorldOverall}>
        <div className={classes.Countries}>
          <span>{this.props.countryEffected}</span>
          <p>Country Effected</p>
        </div>
        <Reports />
        <News />
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
