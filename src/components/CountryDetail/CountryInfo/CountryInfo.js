import React from "react";
import classes from "./CountryInfo.module.css";

import OverallReport from "../../Utilities/OverallReport/OverallReport";
import Aux from "../../../hoc/Aux/Aux";

const CountryInfo = (props) => {
  const { countryName, onSelectCountry, countryNameArr, selectedData } = props;

  const optionList = countryNameArr.map((opt, index) => (
    <option key={index} value={opt}>
      {opt}
    </option>
  ));

  return (
    <Aux>
      <div className={classes.CountryInfo}>
        <p>Country / Region</p>
        <select
          value={!!countryName && countryName ? countryName : `Afghanistan`}
          onChange={onSelectCountry}
        >
          {optionList}
        </select>
      </div>
      <OverallReport
        total={selectedData.cases.total}
        newCase={selectedData.cases.new}
        recovered={selectedData.cases.recovered}
        deaths={selectedData.deaths.total}
        newDeaths={selectedData.deaths.new}
      />
    </Aux>
  );
};

export default CountryInfo;
