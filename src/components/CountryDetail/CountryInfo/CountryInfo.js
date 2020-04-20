import React, { Fragment, Component } from "react";
import { connect } from "react-redux";
import classes from "./CountryInfo.module.css";
import { userSelect } from "../../../store/actions/actions";

import OverallReport from "../../WorldOverall/OverallReport/OverallReport";

class CountryInfo extends Component {
  // componentDidMount() {
  //   const currentSelectedCountry =
  //     this.props.countryName !== undefined
  //       ? this.props.countryName
  //       : this.props.selectedCountry;
  //   this.props.onUserSelect(currentSelectedCountry, this.props.sizeNews);
  // }
  render() {
    const optionList = this.props.countryNameArr.map((opt, index) => (
      <option key={index} value={opt}>
        {opt}
      </option>
    ));
    return (
      <Fragment>
        <div className={classes.CountryInfo}>
          <p>Country / Region</p>
          <select
            onChange={(e) =>
              this.props.onUserSelect(e.target.value, this.props.sizeNews)
            }
          >
            {optionList}
          </select>
        </div>
        <OverallReport
          total={this.props.selectedData.cases.total}
          newCase={this.props.selectedData.cases.new}
          recovered={this.props.selectedData.cases.recovered}
          deaths={this.props.selectedData.deaths.total}
          newDeaths={this.props.selectedData.deaths.new}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    countryNameArr: state.overall.countryNames,
    selectedData: state.selected.selectedData,
    sizeNews: state.selected.selectedNewsCount,
    selectedCountry: state.selected.selectedCountry,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onUserSelect: (name, size) => dispatch(userSelect(name, size)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CountryInfo);
