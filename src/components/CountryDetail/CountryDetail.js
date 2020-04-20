import React from "react";
import { connect } from "react-redux";
import classes from "./CountryDetail.module.css";

import CountryInfo from "./CountryInfo/CountryInfo";
import News from "../WorldOverall/News/News";

const CountryDetail = (props) => {
  return (
    <div className={classes.CountryDetail}>
      <CountryInfo />
      <News
        newsArr={props.newsArr}
        newsCount={props.newsCount}
        moreNews={props.onMoreNews}
        hideNews={props.onHideNews}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    newsArr: state.selected.selectedHotNews,
    newsCount: state.selected.selectedNewsCount,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onMoreNews: () => dispatch({ type: "moreNews", location: "selected" }),
    onHideNews: () => dispatch({ type: "hideNews", location: "selected" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CountryDetail);
