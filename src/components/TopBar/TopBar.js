import React from "react";
import classes from "./TopBar.module.css";
import Profile from "../../assets/profile.svg";
import Arrow from "../../assets/arrowdown.svg";

const topBar = () => {
  return (
    <div className={classes.outer}>
      <div className={classes.name}>Hello John !</div>
      <div className={classes.avatar}>
        <div className={classes.user}>
          <img src={Profile} alt="&#8900;"></img>
        </div>
        <div className={classes.user}>User Name</div>
        <div className={classes.user}>
          <img src={Arrow} alt="&#8900;"></img>
        </div>
      </div>
    </div>
  );
};

export default topBar;
