import React from "react";
import classes from "./Article.module.css";

const Article = (props) => {
  const { title, des, img, url } = props;
  return (
    <div className={classes.Article}>
      <a href={url}> {title} </a>
      <p>{des}</p>
      <img src={img} alt={title} />
    </div>
  );
};

export default Article;
