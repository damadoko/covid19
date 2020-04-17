import React from "react";
import classes from "./Menu.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faHome,
  faChartBar,
  faPumpMedical,
} from "@fortawesome/free-solid-svg-icons";

const Menu = () => {
  return (
    <div className={classes.Menu}>
      <div data-active="false">
        <FontAwesomeIcon size="2x" icon={faBell} />
      </div>
      <div data-active="true">
        <FontAwesomeIcon size="2x" icon={faHome} />
      </div>
      <div data-active="false">
        <FontAwesomeIcon size="2x" icon={faChartBar} />
      </div>
      <div data-active="false">
        <FontAwesomeIcon size="2x" icon={faPumpMedical} />
      </div>
    </div>
  );
};

export default Menu;
