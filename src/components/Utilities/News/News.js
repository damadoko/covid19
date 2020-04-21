import React from "react";
import classes from "./News.module.css";
import { connect } from "react-redux";

import Article from "./Article/Article";
import HighLight from "./HighLight/HighLight";

const News = (props) => {
  const { newsArr, newsCount, moreNews, hideNews } = props;

  const noDataArr = [
    {
      title: "No data available",
      description: "No data available",
      urlToImage: "No data available",
      url: "No data available",
      publishedAt: "No data available",
      source: { name: "No data available" },
    },
  ];
  const newsProcessingArr = newsArr.length === 0 ? noDataArr : newsArr;

  const highLightData = newsProcessingArr.slice(0, 1);
  // console.log(highLightData[0].source.name);
  const news = newsProcessingArr
    .slice(1, newsCount)
    .map((item, index) => (
      <Article
        key={index}
        title={item.title}
        des={item.description}
        img={item.urlToImage}
        url={item.url}
        time={item.publishedAt}
        src={item.source.name}
      />
    ));

  return (
    <div className={classes.News}>
      <span>HIGHLIGHT</span>
      <HighLight
        title={highLightData[0].title}
        des={highLightData[0].description}
        img={highLightData[0].urlToImage}
        url={highLightData[0].url}
        time={highLightData[0].publishedAt}
        src={highLightData[0].source.name}
      />
      <div>{news}</div>
      {newsCount === props.newsSize ? (
        <span onClick={hideNews}>HIDE</span>
      ) : (
        <span onClick={moreNews}>SEE MORE</span>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    newsSize: state.defaultFetchNewsNumber,
  };
};

export default connect(mapStateToProps, null)(News);
