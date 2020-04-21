import React from "react";
import classes from "./Article.module.css";

const Article = (props) => {
  const { title, des, img, url, time, src } = props;
  return (
    <div className={classes.Article}>
      <img src={img} alt={title} />
      <span>{src}</span>
      <a href={url}> {title} </a>
      <span>{time}</span>
      <p>{des}</p>
    </div>
  );
};

export default Article;
