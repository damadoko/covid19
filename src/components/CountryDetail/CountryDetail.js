import React from "react";
import { connect } from "react-redux";
import classes from "./CountryDetail.module.css";

import CountryInfo from "./CountryInfo/CountryInfo";
import News from "../WorldOverall/News/News";

const CountryDetail = (props) => {
  return (
    <div className={classes.CountryDetail}>
      <CountryInfo />
      <News newsArr={props.newsArr} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    newsArr: state.selected.selectedHotNews,
  };
};

export default connect(mapStateToProps, null)(CountryDetail);
