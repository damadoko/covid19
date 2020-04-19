import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";

import Layout from "../hoc/Layout/Layout";
import WorldOverall from "../components/WorldOverall/WorldOverall";
import CountryDetail from "../components/CountryDetail/CountryDetail";
import Prevention from "../components/Prevention/Prevention";
import Chart from "../components/Chart/Chart";

import { userSelect } from "../store/actions/actions";

class App extends Component {
  async componentDidMount() {
    // Fetch country data
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
    // console.log("Sorted Data:", sortedData);

    // Fetch Overall News data
    const APIKey = "a0e915657c944848b87ab3fbf85cf5a4";
    const today = new Date().toISOString().slice(0, 10);
    const newsSize = 5;
    const newsData = await axios({
      method: "GET",
      url: `https://newsapi.org/v2/everything?q=COVID&from=${today}&sortBy=publishedAt&apiKey=${APIKey}&pageSize=${newsSize}&page=1`,
    });
    const newsDataArr = await newsData.data.articles;
    // console.log("News data Array", newsDataArr);

    // Fetch default country news data
    this.props.storeCountryNews(this.props.selectedCtry);

    // Fetch countrys name data
    const countryNames = await axios({
      method: "GET",
      url: "https://covid-193.p.rapidapi.com/countries",
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "covid-193.p.rapidapi.com",
        "x-rapidapi-key": "0feb686e78mshebefdcd7b5fe8abp127a2cjsnabf42285f2bd",
      },
    });

    const countryNamesArr = await countryNames.data.response;
    // console.log(countryNames);
    this.props.storeOverallReport(sortedData, newsDataArr, countryNamesArr);
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

const mapStateToProps = (state) => {
  return {
    selectedCtry: state.selected.selectedCountry,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    storeOverallReport: (data, news, names) =>
      dispatch({
        type: "storeOverall",
        dataFetch: data,
        newsFetch: news,
        namesFetch: names,
      }),
    storeCountryNews: (name) => dispatch(userSelect(name)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
