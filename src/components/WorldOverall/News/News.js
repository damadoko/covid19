import React from "react";
import { connect } from "react-redux";
import classes from "./News.module.css";

import Article from "./Article/Article";
import HighLight from "./HighLight/HighLight";

const News = (props) => {
  const highLightData = props.newsArr.slice(0, 1);
  // console.log(highLightData[0].source.name);
  const news = props.newsArr
    .slice(1, 3)
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
      <span>SEE MORE</span>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    newsArr: state.worldHotNews,
  };
};

export default connect(mapStateToProps, null)(News);
