import axios from "axios";

export const fetchNews = (name, newsDataArr) => {
  return {
    type: "userSelectCountry",
    countryName: name,
    countryNews: newsDataArr,
  };
};

export const userSelect = (name) => {
  return async (dispatch) => {
    // Fetch News data
    const APIKey = "a0e915657c944848b87ab3fbf85cf5a4";
    const today = new Date().toISOString().slice(0, 10);
    const newsSize = 5;
    const newsData = await axios({
      method: "GET",
      url: `https://newsapi.org/v2/everything?q=COVID ${name}&from=${today}&sortBy=publishedAt&apiKey=${APIKey}&pageSize=${newsSize}&page=1`,
    });
    const newsDataArr = await newsData.data.articles;
    await dispatch(fetchNews(name, newsDataArr));
  };
};
