import React from "react";
import classes from "./Menu.module.css";

const Menu = () => {
  return (
    <div className={classes.Menu}>
      <i class="fas fa-bell fa-2x"></i>
      <i class="fas fa-home fa-2x" data-active="true"></i>
      <i class="fas fa-chart-bar fa-2x"></i>
      <i class="fas fa-pump-medical fa-2x"></i>
    </div>
  );
};

export default Menu;
