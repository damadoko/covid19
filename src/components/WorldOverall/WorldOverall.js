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
    this.props.fetchWorldData();
    this.props.fetchWorldNews();
    this.props.fetchWorldHistory();
  }

  render() {
    return (
      <div className={classes.WorldOverall}>
        <OverallReport
          total={this.props.overallData.cases.total}
          newCase={this.props.overallData.cases.new}
          recovered={this.props.overallData.cases.recovered}
          deaths={this.props.overallData.deaths.total}
          newDeaths={this.props.overallData.deaths.new}
        />
        <Chart />
        <Reports {...this.props} />
        <News
          newsArr={this.props.newsArr}
          newsCount={this.props.newsCount}
          moreNews={this.props.onMoreNews}
          hideNews={this.props.onHideNews}
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
    onMoreNews: () => dispatch({ type: "moreNews", location: "world" }),
    onHideNews: () => dispatch({ type: "hideNews", location: "world" }),
    fetchWorldData: () => dispatch(actionCreators.fetchStatistics()),
    fetchWorldNews: () => dispatch(actionCreators.fetchNews(null, 7)),
    fetchWorldHistory: () => dispatch(actionCreators.fetchWorldHistory()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WorldOverall);
