import React, { Fragment } from "react";
import { connect } from "react-redux";
import classes from "./CountryInfo.module.css";
import { userSelect } from "../../../store/actions/actions";

import OverallReport from "../../WorldOverall/OverallReport/OverallReport";

const CountryInfo = (props) => {
  const optionList = props.countryNameArr.map((opt, index) => (
    <option key={index} value={opt}>
      {opt}
    </option>
  ));

  return (
    <Fragment>
      <div className={classes.CountryInfo}>
        <p>Country / Region</p>
        <select onChange={(e) => props.onUserSelect(e.target.value)}>
          {optionList}
        </select>
      </div>
      <OverallReport
        total={props.selectedData.cases.total}
        newCase={props.selectedData.cases.new}
        recovered={props.selectedData.cases.recovered}
        deaths={props.selectedData.deaths.total}
        newDeaths={props.selectedData.deaths.new}
      />
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    countryNameArr: state.overall.countryNames,
    selectedData: state.selected.selectedData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onUserSelect: (name) => dispatch(userSelect(name)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CountryInfo);
