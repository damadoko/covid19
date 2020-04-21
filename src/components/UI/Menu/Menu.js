import React from "react";
import classes from "./Menu.module.css";
import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobeAmericas,
  faMap,
  faChartBar,
  faPumpMedical,
} from "@fortawesome/free-solid-svg-icons";

const Menu = () => {
  return (
    <div className={classes.Menu}>
      <div>
        <NavLink
          to="/"
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
          to="/country/Vietnam"
          className={classes.NavLink}
          activeClassName={classes.active}
        >
          <FontAwesomeIcon size="2x" icon={faMap} />
        </NavLink>
        <span />
      </div>
      <div>
        <NavLink
          to="/chart"
          className={classes.NavLink}
          activeClassName={classes.active}
        >
          <FontAwesomeIcon size="2x" icon={faChartBar} />
        </NavLink>
        <span />
      </div>
      <div>
        <NavLink
          to="/prevention"
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
