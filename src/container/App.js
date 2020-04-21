import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Layout from "../hoc/Layout/Layout";
import WorldOverall from "../components/WorldOverall/WorldOverall";
import CountryDetail from "../components/CountryDetail/CountryDetail";
import Prevention from "../components/Prevention/Prevention";
import Chart from "../components/Utilities/Chart/Chart";

const App = (props) => {
  return (
    <Layout>
      <Switch>
        <Route path="/chart" component={Chart} />
        <Route path="/country" exact component={CountryDetail} />
        <Route path="/country/:name" exact component={CountryDetail} />
        <Route path="/prevention" exact component={Prevention} />
        <Route path="/home" render={(props) => <WorldOverall {...props} />} />
        <Redirect from="/" to="/home" />
      </Switch>
    </Layout>
  );
};

export default App;
