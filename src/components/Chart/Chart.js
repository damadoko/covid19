import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
import { connect } from "react-redux";

class Chart extends Component {
  render() {
    return (
      <div>
        <Bar
          data={this.props.data}
          // width={100}
          // height={50}
          options={{
            title: {
              display: true,
              text: "Worldwide new cases",
            },
            legend: {
              display: true,
              position: "top",
            },
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.chartData,
  };
};

export default connect(mapStateToProps, null)(Chart);
