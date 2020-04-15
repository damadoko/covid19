import React from "react";

const Layout = (props) => {
  return (
    <div>
      <p>Logo</p>
      <p>Filter</p>
      <main>{props.children}</main>
      <p>Menu</p>
    </div>
  );
};

export default Layout;
