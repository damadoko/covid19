import React, { Component } from "react";

import Layout from "../hoc/Layout/Layout";
import WorldOverall from "../components/WorldOverall/WorldOverall";
import CountryDetail from "../components/CountryDetail/CountryDetail";
import Prevention from "../components/Prevention/Prevention";
import Chart from "../components/Chart/Chart";

class App extends Component {
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

export default App;
