import axios from "axios";
import * as actions from "./actions";

export const fetchNews = (name, size) => {
  return async (dispatch) => {
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
    const sortedData = await worldDataArr.sort(
      (a, b) => b.cases.total - a.cases.total
    );
    await dispatch(actions.storeCountryData(sortedData));
    // await fetchStatistics();
    // Fetch News data

    const APIKey = "a0e915657c944848b87ab3fbf85cf5a4";
    const today = new Date().toISOString().slice(0, 10);
    const newsSize = size;
    const newsData = await axios({
      method: "GET",
      url: `https://newsapi.org/v2/everything?q=COVID ${name}&from=${today}&sortBy=publishedAt&apiKey=${APIKey}&pageSize=${newsSize}&page=1`,
    });
    const newsDataArr = await newsData.data.articles;
    name
      ? await dispatch(actions.storeCountryNews(name, newsDataArr))
      : await dispatch(actions.storeWorldNews(newsDataArr));
  };
};

export const fetchStatistics = () => {
  return async (dispatch) => {
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
    const sortedData = await worldDataArr.sort(
      (a, b) => b.cases.total - a.cases.total
    );
    await dispatch(actions.storeCountryData(sortedData));
  };
};

export const fetchCountryName = () => {
  return async (dispatch) => {
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
    await dispatch(actions.storeCountryName(countryNamesArr));
  };
};

export const fetchWorldHistory = () => {
  return async (dispatch) => {
    const worldHistory = await axios({
      method: "GET",
      url: "https://coronavirus-map.p.rapidapi.com/v1/spots/summary",
      headers: {
        "x-rapidapi-host": "coronavirus-map.p.rapidapi.com",
        "x-rapidapi-key": "0feb686e78mshebefdcd7b5fe8abp127a2cjsnabf42285f2bd",
      },
    });
    const worldHistoryData = await worldHistory.data.data;
    await dispatch(actions.storeWorldHistory(worldHistoryData));
  };
};

export const fetchInitCountryData = async (name, size) => {
  // return async dispatch => {
  await fetchStatistics();
  await fetchCountryName();
  await fetchNews(name, size);
  // }
};
