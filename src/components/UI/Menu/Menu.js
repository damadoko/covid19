import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobeAmericas,
  faMap,
  faChartBar,
  faPumpMedical,
} from "@fortawesome/free-solid-svg-icons";

import classes from "./Menu.module.css";

const Menu = () => {
  return (
    <div className={classes.Menu}>
      <div>
        <NavLink
          to="/covid19/home"
          exact
          className={classes.NavLink}
          activeClassName={classes.active}
        >
          <FontAwesomeIcon size="2x" icon={faGlobeAmericas} />
        </NavLink>
        <span />
      </div>
      <div>
        <NavLink
          to="/covid19/country/Vietnam"
          className={classes.NavLink}
          activeClassName={classes.active}
        >
          <FontAwesomeIcon size="2x" icon={faMap} />
        </NavLink>
        <span />
      </div>
      <div>
        <NavLink
          to="/covid19/chart"
          className={classes.NavLink}
          activeClassName={classes.active}
        >
          <FontAwesomeIcon size="2x" icon={faChartBar} />
        </NavLink>
        <span />
      </div>
      <div>
        <NavLink
          to="/covid19/prevention"
          className={classes.NavLink}
          activeClassName={classes.active}
        >
          <FontAwesomeIcon size="2x" icon={faPumpMedical} />
        </NavLink>
        <span />
      </div>
    </div>
  );
};

export default Menu;
