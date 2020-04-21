import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
import { connect } from "react-redux";

import classes from "./Chart.module.css";

class Chart extends Component {
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

export default connect(mapStateToProps, null)(Chart);
