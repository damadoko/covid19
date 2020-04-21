import React, { Component } from "react";
import { connect } from "react-redux";
import classes from "./CountryDetail.module.css";

import CountryInfo from "./CountryInfo/CountryInfo";
import News from "../Utilities/News/News";
import * as actionCreators from "../../store/actions/index";

class CountryDetail extends Component {
  componentDidMount() {
    this.props.fetchWorldNames();
    this.props.onUserSelect(this.props.match.params.name, this.props.sizeNews);
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

    const onSelectCountry = (e) => {
      history.push({
        pathname: `/country/${e.target.value}`,
      });
      onUserSelect(e.target.value, sizeNews);
    };

    return (
      <div className={classes.CountryDetail}>
        <CountryInfo
          countryName={match.params.name}
          onSelectCountry={onSelectCountry}
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
    sizeNews: state.selected.defaultFetchNewsNumber,
    countryNameArr: state.overall.countryNames,
    selectedData: state.selected.selectedData,
    selectCountry: state.selected.selectedCountry,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onMoreNews: () => dispatch(actionCreators.onMoreNews("selected")),
    onHideNews: () => dispatch(actionCreators.onHideNews("selected")),
    onUserSelect: (name, size) =>
      dispatch(actionCreators.fetchNews(name, size)),
    fetchWorldNames: () => dispatch(actionCreators.fetchCountryName()),
    fetchInitData: () => dispatch(actionCreators.fetchInitCountryData),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CountryDetail);
