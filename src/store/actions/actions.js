import * as actionTypes from "./actionTypes";

export const storeCountryNews = (name, newsDataArr) => {
  return {
    type: actionTypes.STORE_COUNTRY_NEWS,
    countryName: name,
    countryNews: newsDataArr,
  };
};

export const storeWorldNews = (news) => {
  return {
    type: actionTypes.STORE_WORLD_NEWS,
    newsFetch: news,
  };
};

export const storeCountryData = (data) => {
  return {
    type: actionTypes.STORE_STATISTICS,
    dataFetch: data,
  };
};

export const storeCountryName = (name) => {
  return {
    type: actionTypes.STORE_COUNTRY_NAME,
    namesFetch: name,
  };
};

export const storeWorldHistory = (history) => {
  return {
    type: actionTypes.STORE_HISTORY,
    historyFetch: history,
  };
};
