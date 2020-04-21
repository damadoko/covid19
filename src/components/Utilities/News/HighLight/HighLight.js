import React from "react";

import classes from "./HighLight.module.css";

const HighLight = (props) => {
  const { title, des, img, url, time, src } = props;
  return (
    <div className={classes.HighLight}>
      <img src={img} alt={title} />
      <span>{src}</span>
      <a href={url}> {title} </a>
      <span>{time}</span>
      <p>{des}</p>
    </div>
  );
};

export default HighLight;
