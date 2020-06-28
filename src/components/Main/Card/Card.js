import React from "react";
import classes from "./Card.module.css";

const card = (props) => {
  let inlineStyle = null;
  if (props.header === "Total Connections") {
    inlineStyle = {
      backgroundColor: "#FFD5A9",
      color: "#80490F",
    };
  } else if (props.header === "Profile Visits") {
    inlineStyle = {
      backgroundColor: "#C9DEFF",
      color: "#002661",
    };
  } else if (props.header === "Following Peers") {
    inlineStyle = {
      backgroundColor: "#C4EFB5",
      color: " #1A6500",
    };
  } else if (props.header === "Following Companies") {
    inlineStyle = {
      backgroundColor: "#FDC0C3",
      color: "#640005",
    };
  }
  return (
    <div className={classes.cardOuter} style={inlineStyle}>
      <div className={classes.heading}>{props.header}</div>
      <div className={classes.inner}>
        <div className={classes.text}>{props.number}</div>
        <div className={classes.image}>
          <img src={props.image}></img>
        </div>
      </div>
    </div>
  );
};

export default card;
