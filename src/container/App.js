import React, { Component } from "react";

import Layout from "../hoc/Layout/Layout";
import WorldOverall from "../components/WorldOverall/WorldOverall";
import CountryDetail from "../components/CountryDetail/CountryDetail";

class App extends Component {
  render() {
    return (
      <Layout>
        <WorldOverall />
        <CountryDetail />
        <p>Chart</p>
        <p>Prevention</p>
      </Layout>
    );
  }
}

export default App;
