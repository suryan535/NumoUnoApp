import React from "react";
import classes from "./NavigationIndi.module.css";
import Arrow from "../../assets/arrow.svg";
import Active from "../../assets/active.svg";
import Circle from "../../assets/circle.svg";
import Contact from "../../assets/contact.svg";
import Message from "../../assets/message.svg";
import Dual from "../../assets/dual.svg";
import Hamberger from "../../assets/hamberger.svg";

const navigationIndi = (props) => {
  let Icon = null;

  if (props.name === "Contact") {
    Icon = Contact;
  } else if (props.name === "Circle") {
    Icon = Circle;
  } else if (props.name === "Message") {
    Icon = Message;
  } else if (props.name === "Dual") {
    Icon = Dual;
  } else Icon = Hamberger;

  return (
    <div className={classes.item}>
      <div className={classes.active}>
        <img src={Active}></img>
      </div>
      <div className={classes.icon}>
        <button onClick={props.clicked}>
          <img src={Icon} alt="Something"></img>
        </button>
      </div>
      <div className={classes.arrow}>
        <img src={Arrow}></img>
      </div>
    </div>
  );
};

export default navigationIndi;
