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

export const onMoreNews = (locate) => {
  return {
    type: actionTypes.MORE_NEWS,
    location: locate,
  };
};

export const onHideNews = (locate) => {
  return {
    type: actionTypes.HIDE_NEWS,
    location: locate,
  };
};

export const showLoading = () => {
  return {
    type: actionTypes.SHOW_LOADING,
    status: true,
  };
};

export const hideLoading = () => {
  return {
    type: actionTypes.HIDE_LOADING,
    status: false,
  };
};
