import React, { Component } from "react";
import classes from "./TopBar.module.css";
import Profile from "../../assets/profile.svg";
import UserDrop from "./UserDrop/UserDrop";

class topBar extends Component {
  state = {
    userDrop: null,
    userIconStyle: {
      color: "#c4cacf",
    },
  };

  userDropToggleHandler = () => {
    let check = this.state.userDrop;
    if (check !== null) {
      check = null;
    } else {
      check = <UserDrop />;
    }

    let styling = this.state.userIconStyle.color;
    if (styling === "#c4cacf") {
      styling = {
        color: "#4DA1FF",
      };
    } else {
      styling = {
        color: "#c4cacf",
      };
    }
    this.setState({ userDrop: check, userIconStyle: styling });
  };
  render() {
    return (
      <div className={classes.outer}>
        <div className={classes.name}>Hello John !</div>
        <div className={classes.avatar}>
          <div className={classes.user}>
            <img src={Profile} alt="&#8900;"></img>
          </div>
          <div className={classes.user}>User Name</div>
          <div className={classes.user}>
            <button
              className={classes.userDropBtn}
              onClick={this.userDropToggleHandler}
            >
              <i
                className="las la-caret-down"
                style={this.state.userIconStyle}
              ></i>
              {this.state.userDrop}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default topBar;
