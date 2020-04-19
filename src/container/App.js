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
    // // Fetch overall data
    // const overall = await axios({
    //   method: "GET",
    //   url: "https://covid-19-statistics.p.rapidapi.com/reports/total",
    //   headers: {
    //     "content-type": "application/octet-stream",
    //     "x-rapidapi-host": "covid-19-statistics.p.rapidapi.com",
    //     "x-rapidapi-key": "0feb686e78mshebefdcd7b5fe8abp127a2cjsnabf42285f2bd",
    //   },
    //   params: {
    //     date: "2020-04-17",
    //   },
    // });
    // const dataOverall = await overall.data.data;
    // // console.log(data.data);
    // this.props.storeOverallReport(dataOverall);

    // Fetch top 3 country data
    const worldData = await axios({
      method: "GET",
      url: "https://covid-193.p.rapidapi.com/statistics",
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "covid-193.p.rapidapi.com",
        "x-rapidapi-key": "0feb686e78mshebefdcd7b5fe8abp127a2cjsnabf42285f2bd",
      },
    });

    const worldDataArr = await worldData.data.response;

    // sort top cases country
    const sortedData = await worldDataArr.sort(
      (a, b) => b.cases.total - a.cases.total
    );

    // const allData = await sortedData.filter((ctry) => ctry.country === "All");

    const top3Data = await sortedData
      .filter(
        (ctry) =>
          ctry.country !== "All" &&
          ctry.country !== "Europe" &&
          ctry.country !== "Asia" &&
          ctry.country !== "North-America" &&
          ctry.country !== "South-America" &&
          ctry.country !== "Africa"
      )
      .slice(0, 3);

    console.log(top3Data);
    this.props.storeOverallReport(sortedData);
    return sortedData;
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
