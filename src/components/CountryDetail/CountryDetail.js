import React from "react";
import { connect } from "react-redux";
import classes from "./CountryDetail.module.css";
import { userSelect } from "../../store/actions/actions";

import CountryInfo from "./CountryInfo/CountryInfo";
import News from "../WorldOverall/News/News";

const CountryDetail = (props) => {
  const { history, match } = props;
  // console.log(props);

  const getName = match.params.name;
  // console.log(getName);

  const selectCountry = (e) => {
    // console.log(e.target.value);
    history.push({
      pathname: `/country/${e.target.value}`,
    });
    props.onUserSelect(e.target.value, props.sizeNews);
  };

  return (
    <div className={classes.CountryDetail}>
      <CountryInfo
        countryName={match.params.name}
        selectCountry={selectCountry}
      />
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
    sizeNews: state.selected.selectedNewsCount,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onMoreNews: () => dispatch({ type: "moreNews", location: "selected" }),
    onHideNews: () => dispatch({ type: "hideNews", location: "selected" }),
    onUserSelect: (name, size) => dispatch(userSelect(name, size)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CountryDetail);
