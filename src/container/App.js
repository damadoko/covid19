import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";

import Layout from "../hoc/Layout/Layout";
import WorldOverall from "../components/WorldOverall/WorldOverall";
import CountryDetail from "../components/CountryDetail/CountryDetail";
import Prevention from "../components/Prevention/Prevention";
import Chart from "../components/Chart/Chart";

class App extends Component {
  async componentDidMount() {
    const response = await axios({
      method: "GET",
      url: "https://covid-19-statistics.p.rapidapi.com/reports/total",
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "covid-19-statistics.p.rapidapi.com",
        "x-rapidapi-key": "0feb686e78mshebefdcd7b5fe8abp127a2cjsnabf42285f2bd",
      },
      params: {
        date: "2020-04-17",
      },
    });
    const data = await response.data;
    console.log(data.data);
    this.props.storeOverallReport(data);
    return response.data;
  }

  render() {
    return (
      <Layout>
        <WorldOverall />
        <CountryDetail />
        <Chart />
        <Prevention />
      </Layout>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    storeOverallReport: (data) =>
      dispatch({ type: "storeOverall", dataFetch: data }),
  };
};

export default connect(null, mapDispatchToProps)(App);
