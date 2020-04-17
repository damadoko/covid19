import React, { Fragment } from "react";
import classes from "./CountryInfo.module.css";

const CountryInfo = () => {
  return (
    <Fragment>
      <h1 className={classes.title}>VietNam</h1>
      <div className={classes.CountryInfo}>
        <div>
          <p>
            <strong>100230</strong>
          </p>
          <i className="fas fa-2x fa-globe"></i>
          {/* total */}
        </div>
        <div>
          <p>
            <strong>100230</strong>
          </p>
          <i className="fas fa-2x fa-wheelchair"></i>
          {/* Recovered */}
        </div>
        <div>
          <p>
            <strong>100230</strong>
          </p>
          <i className="fas fa-2x fa-lungs-virus"></i>
          {/* Active */}
        </div>
        <div>
          <p>
            <strong>100230</strong>
          </p>
          <i className="fas fa-2x fa-grimace"></i>
          {/* Critical */}
        </div>
        <div>
          <p>
            <strong>100230</strong>
          </p>
          <i className="fas fa-2x fa-skull-crossbones"></i>
          {/* Deaths */}
        </div>
        <div>
          <p>
            <strong>100230</strong>
          </p>
          <i className="fas fa-2x fa-vials"></i>
          {/* test */}
        </div>
      </div>
    </Fragment>
  );
};

export default CountryInfo;
