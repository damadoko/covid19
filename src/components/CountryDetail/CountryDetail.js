import React from "react";
import classes from "./CountryDetail.module.css";

import CountryInfo from "./CountryInfo/CountryInfo";
import News from "../WorldOverall/News/News";

const CountryDetail = () => {
  return (
    <div className={classes.CountryDetail}>
      <CountryInfo />
      <News />
    </div>
  );
};
export default CountryDetail;
