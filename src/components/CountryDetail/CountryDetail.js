import React from "react";
import classes from "./CountryDetail.module.css";

import CountryInfo from "./CountryInfo/CountryInfo";
// import CountryNews from "./CountryNews/CountryNews";

const CountryDetail = () => {
  return (
    <div className={classes.CountryDetail}>
      <CountryInfo />
      <div>News</div>
    </div>
  );
};
export default CountryDetail;
