import React from "react";

import classes from "./Layout.module.css";
import Logo from "../../components/UI/Logo/Logo";
import Menu from "../../components/UI/Menu/Menu";
import Filter from "../../components/UI/Filter/Filter";
import { connect } from "react-redux";

const Layout = (props) => {
  const { loading } = props;
  const loadingScreen = loading ? (
    <div className={classes.Loading}>
      <div>
        <div className={classes.Line}></div>
        <div className={classes.Line}></div>
        <div className={classes.Line}></div>
      </div>
    </div>
  ) : null;

  return (
    <div className={classes.Layout}>
      {loadingScreen}
      <Logo />
      <Filter />
      <main>{props.children}</main>
      <Menu />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.loadingStatus,
  };
};

export default connect(mapStateToProps, null)(Layout);
