import React from "react";
import classes from "./Card2.module.css";

const card2 = (props) => {
  return (
    <div className={classes.cardOuter}>
      <div className={classes.heading}>{props.header}</div>
      <hr></hr>
      <div className={classes.content}>
        <img src={props.image} className={classes.contentImage}></img>
      </div>
    </div>
  );
};

export default card2;
