import React from "react";
import { connect } from "react-redux";

import classes from "./Reports.module.css";
import Report from "./Report/Report";
import Aux from "../../../hoc/Aux/Aux";

const Reports = (props) => {
  const { history, top3Country } = props;

  const onSelectCountry = (name) => {
    history.push({
      pathname: `/covid19/country/${name}`,
    });
  };

  const reports = top3Country.map((ctry, index) => (
    <div onClick={() => onSelectCountry(ctry.country)} key={index}>
      <Report country={ctry.country} confirmed={ctry.cases.total} />
    </div>
  ));

  return (
    <Aux>
      <div className={classes.Span}>
        <span>HIGHEST CASES</span>
        <span>By Country, Territory or Area</span>
      </div>
      <div className={classes.Reports}>{reports}</div>
    </Aux>
  );
};

const mapStateToProps = (state) => {
  return {
    top3Country: state.overall.top3Country,
  };
};

export default connect(mapStateToProps, null)(Reports);
