import React, { Component } from "react";
import classes from "./NavigationIndi.module.css";
import Arrow from "../../assets/arrow.svg";
import Active from "../../assets/active.svg";
import { render } from "@testing-library/react";

class navigationIndi extends Component {
  state = {
    colorStyle: {
      color: "#c4cacf",
    },
  };

  colorChangeHandler = () => {
    let check = this.state.colorStyle.color;
    if (check === "#c4cacf") {
      check = { color: "#4DA1FF" };
    } else {
      check = { color: "#c4cacf" };
    }

    this.setState({ colorStyle: check });
  };
  render() {
    let Icon = null;

    if (this.props.name === "Contact") {
      Icon = <i class="las la-address-book"></i>;
    } else if (this.props.name === "Circle") {
      Icon = <i class="las la-folder"></i>;
    } else if (this.props.name === "Message") {
      Icon = <i class="las la-sms"></i>;
    } else if (this.props.name === "Dual") {
      Icon = <i class="las la-user-cog"></i>;
    } else Icon = <i class="las la-layer-group"></i>;
    return (
      <div className={classes.item}>
        <div className={classes.active}>
          <img src={Active}></img>
        </div>
        <div className={classes.icon} onClick={this.colorChangeHandler}>
          <button onClick={this.props.clicked} style={this.state.colorStyle}>
            {Icon}
          </button>
        </div>
        <div className={classes.arrow}>
          <img src={Arrow}></img>
        </div>
      </div>
    );
  }
}

export default navigationIndi;
