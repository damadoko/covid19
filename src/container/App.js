import React, { Component } from "react";

import Layout from "../hoc/Layout/Layout";
import WorldOverall from "../components/WorldOverall/WorldOverall";
import CountryDetail from "../components/CountryDetail/CountryDetail";
import Prevention from "../components/Prevention/Prevention";

class App extends Component {
  render() {
    return (
      <Layout>
        <WorldOverall />
        <CountryDetail />
        <p>Chart</p>
        <Prevention />
      </Layout>
    );
  }
}

export default App;
