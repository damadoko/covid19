import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
import { connect } from "react-redux";

import classes from "./Chart.module.css";
import * as actionCreators from "../../../store/actions/index";

class Chart extends Component {
  componentDidMount() {
    const { fetchWorldHistory } = this.props;
    fetchWorldHistory();
  }
  render() {
    const { data } = this.props;
    return (
      <div className={classes.Chart}>
        <Bar
          data={data}
          // width={100}
          // height={50}
          options={{
            title: {
              display: true,
              text: "WORLDWIDE NEW CASES",
              position: "bottom",
              fontSize: 20,
            },
            legend: {
              display: true,
              position: "bottom",
            },
            maintainAspectRatio: false,
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.overall.worldChartData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchWorldHistory: () => dispatch(actionCreators.fetchWorldHistory()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Chart);
