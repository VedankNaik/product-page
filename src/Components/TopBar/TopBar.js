import React from "react";
import classes from "./TopBar.Module.css";

const TopBar = (props) => {
  return (
    <nav className={classes.Topbar}>
      <img
        src="https://freepngimg.com/thumb/online_shopping/12-2-online-shopping-png-clipart.png"
        alt="Logo"
      />
    </nav>
  );
};

export default TopBar;
