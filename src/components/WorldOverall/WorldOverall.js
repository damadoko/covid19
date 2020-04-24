import React, { Component } from "react";
import { connect } from "react-redux";

import classes from "./WorldOverall.module.css";
import OverallReport from "../Utilities/OverallReport/OverallReport";
import Reports from "./Reports/Reports";
import News from "../Utilities/News/News";
import Chart from "../Utilities/Chart/Chart";
import * as actionCreators from "../../store/actions/index";

class WorldOverall extends Component {
  componentDidMount() {
    const { fetchWorldNews, fetchWorldHistory } = this.props;
    fetchWorldNews();
    fetchWorldHistory();
  }

  render() {
    const {
      overallData,
      newsArr,
      newsCount,
      onMoreNews,
      onHideNews,
    } = this.props;
    return (
      <div className={classes.WorldOverall}>
        <OverallReport
          total={overallData.cases.total}
          newCase={overallData.cases.new}
          recovered={overallData.cases.recovered}
          deaths={overallData.deaths.total}
          newDeaths={overallData.deaths.new}
        />
        <Chart />
        <Reports {...this.props} />
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
    overallData: state.overall.overallData,
    newsArr: state.overall.worldHotNews,
    newsCount: state.overall.worldNewsCount,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onMoreNews: () => dispatch(actionCreators.onMoreNews("world")),
    onHideNews: () => dispatch(actionCreators.onHideNews("world")),
    fetchWorldNews: () => dispatch(actionCreators.fetchNews(null, 7)),
    fetchWorldHistory: () => dispatch(actionCreators.fetchWorldHistory()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WorldOverall);
