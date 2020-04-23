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
        <Route path="/covid19/chart" exact component={Chart} />
        <Route path="/covid19/country" exact component={CountryDetail} />
        <Route path="/covid19/country/:name" exact component={CountryDetail} />
        <Route path="/covid19/prevention" exact component={Prevention} />
        <Route
          path="/covid19/home"
          render={(props) => <WorldOverall {...props} />}
        />
        <Redirect from="/" to="/covid19/home" />
      </Switch>
    </Layout>
  );
};

export default App;
