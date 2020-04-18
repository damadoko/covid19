import React from "react";
import classes from "./Article.module.css";

const Article = (props) => {
  const { title, des, img, url, time } = props;
  return (
    <div className={classes.Article}>
      <img src={img} alt={title} />
      <span>{time}</span>
      <a href={url}> {title} </a>
      <p>{des}</p>
    </div>
  );
};

export default Article;
