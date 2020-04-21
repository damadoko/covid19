import React from "react";
import { Route, Switch } from "react-router-dom";

import Layout from "../hoc/Layout/Layout";
import WorldOverall from "../components/WorldOverall/WorldOverall";
import CountryDetail from "../components/CountryDetail/CountryDetail";
import Prevention from "../components/Prevention/Prevention";
import Chart from "../components/Utilities/Chart/Chart";

const App = (props) => {
  // async componentDidMount() {
  // Fetch country data
  // const worldData = await axios({
  //   method: "GET",
  //   url: "https://covid-193.p.rapidapi.com/statistics",
  //   headers: {
  //     "content-type": "application/octet-stream",
  //     "x-rapidapi-host": "covid-193.p.rapidapi.com",
  //     "x-rapidapi-key": "0feb686e78mshebefdcd7b5fe8abp127a2cjsnabf42285f2bd",
  //   },
  // });

  // const worldDataArr = await worldData.data.response;

  // sort top cases country
  // const sortedData = await worldDataArr.sort(
  //   (a, b) => b.cases.total - a.cases.total
  // );
  // console.log("Sorted Data:", sortedData);

  // Fetch Overall News data
  // const APIKey = "a0e915657c944848b87ab3fbf85cf5a4";
  // const today = new Date().toISOString().slice(0, 10);
  // const newsSize = this.props.newsSize;
  // const newsData = await axios({
  //   method: "GET",
  //   url: `https://newsapi.org/v2/everything?q=COVID&from=${today}&sortBy=publishedAt&apiKey=${APIKey}&pageSize=${newsSize}&page=1`,
  // });
  // const newsDataArr = await newsData.data.articles;
  // console.log("News data Array", newsDataArr);

  // Fetch default country news data
  // this.props.storeCountryNews(this.props.selectedCtry, this.props.newsSize);

  // Fetch countrys name data
  // const countryNames = await axios({
  //   method: "GET",
  //   url: "https://covid-193.p.rapidapi.com/countries",
  //   headers: {
  //     "content-type": "application/octet-stream",
  //     "x-rapidapi-host": "covid-193.p.rapidapi.com",
  //     "x-rapidapi-key": "0feb686e78mshebefdcd7b5fe8abp127a2cjsnabf42285f2bd",
  //   },
  // });

  // const countryNamesArr = await countryNames.data.response;
  // console.log(countryNames);

  // Fetch world history for chart Data
  // const worldHistory = await axios({
  //   method: "GET",
  //   url: "https://coronavirus-map.p.rapidapi.com/v1/spots/summary",
  //   headers: {
  //     "x-rapidapi-host": "coronavirus-map.p.rapidapi.com",
  //     "x-rapidapi-key": "0feb686e78mshebefdcd7b5fe8abp127a2cjsnabf42285f2bd",
  //   },
  // });
  // const worldHistoryData = await worldHistory.data.data;

  //   this.props.storeOverallReport(
  //     sortedData,
  //     newsDataArr,
  //     countryNamesArr,
  //     worldHistoryData
  //   );
  // }

  return (
    <Layout>
      <Switch>
        <Route path="/chart" component={Chart} />
        <Route path="/country" exact component={CountryDetail} />
        <Route path="/country/:name" exact component={CountryDetail} />
        <Route path="/prevention" exact component={Prevention} />
        {/* <Route path="/" component={WorldOverall} /> */}
        <Route path="/" render={(props) => <WorldOverall {...props} />} />
        {/* <Route path="/" component={Chart} /> */}
      </Switch>
    </Layout>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     selectedCtry: state.selected.selectedCountry,
//     newsSize: state.defaultFetchNewsNumber,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     storeOverallReport: (data, news, names, history) =>
//       dispatch({
//         type: "storeOverall",
//         dataFetch: data,
//         newsFetch: news,
//         namesFetch: names,
//         historyFetch: history,
//       }),
//     storeCountryNews: (name, size) => dispatch(userSelect(name, size)),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
