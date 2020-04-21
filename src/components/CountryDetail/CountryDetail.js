import React, { Component } from "react";
import { connect } from "react-redux";
import classes from "./CountryDetail.module.css";

import CountryInfo from "./CountryInfo/CountryInfo";
import News from "../Utilities/News/News";
import * as actionCreators from "../../store/actions/index";

class CountryDetail extends Component {
  componentDidMount() {
    this.props.FetchWorldNames();
    this.props.onUserSelect(this.props.selectCountry, 7);
  }

  render() {
    const {
      history,
      match,
      countryNameArr,
      selectedData,
      onUserSelect,
      sizeNews,
      newsArr,
      newsCount,
      onMoreNews,
      onHideNews,
    } = this.props;

    const selectCountry = (e) => {
      history.push({
        pathname: `/country/${e.target.value}`,
      });
      onUserSelect(e.target.value, sizeNews);
    };

    return (
      <div className={classes.CountryDetail}>
        <CountryInfo
          countryName={match.params.name}
          onSelectCountry={selectCountry}
          countryNameArr={countryNameArr}
          selectedData={selectedData}
        />
        <News
          newsArr={newsArr}
          newsCount={newsCount}
          moreNews={onMoreNews}
          hideNews={onHideNews}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    newsArr: state.selected.selectedHotNews,
    newsCount: state.selected.selectedNewsCount,
    sizeNews: state.selected.selectedNewsCount,
    countryNameArr: state.overall.countryNames,
    selectedData: state.selected.selectedData,
    selectCountry: state.selected.selectedCountry,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onMoreNews: () => dispatch({ type: "moreNews", location: "selected" }),
    onHideNews: () => dispatch({ type: "hideNews", location: "selected" }),
    onUserSelect: (name, size) =>
      dispatch(actionCreators.fetchNews(name, size)),
    FetchWorldNames: () => dispatch(actionCreators.fetchCountryName()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CountryDetail);
