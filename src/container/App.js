import React, { Component } from "react";

import Layout from "../hoc/Layout/Layout";
import WorldOverall from "../components/WorldOverall/WorldOverall";

class App extends Component {
  render() {
    return (
      <Layout>
        <WorldOverall />
        <p>Country Detail</p>
        <p>Chart</p>
        <p>Prevention</p>
      </Layout>
    );
  }
}

export default App;
