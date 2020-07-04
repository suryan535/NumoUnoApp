import React, { Component } from "react";
import classes from "./Navigation.module.css";
import NavigationIndi from "../NavigationIndi/NavigationIndi";
import DropIndi from "./DropIndi/DropIndi";
import Logo from "../../assets/Logo.png";

class navigationBar extends Component {
  state = {
    ContactDrop: null,
    CircleDrop: null,
    MessageDrop: null,
    DualDrop: null,
  };
  dropDownHandler = (name) => {
    if (name === "Contact") {
      let insert = (
        <div className={classes.dropDownContact}>
          <div className={classes.heading}>Profile</div>
          <ul>
            <DropIndi name="My Profile" />
            <DropIndi name="Strength Overview" />
            <DropIndi name="My Details" />
            <DropIndi name="Resume" />
            <DropIndi name="Cover Letter" />
            <DropIndi name="Following" />
          </ul>
        </div>
      );
      let check = this.state.ContactDrop;
      if (check !== null) {
        insert = null;
      }
      this.setState({ ContactDrop: insert });
    } else if (name === "Circle") {
      let insert = (
        <div className={classes.dropDownContact}>
          <div className={classes.heading}>Opportunites</div>
          <ul>
            <DropIndi name="Suggestions" />
            <DropIndi name="My Preferences" />
            <DropIndi name="Internships" />
            <DropIndi name="My Applications" />
            <DropIndi name="Cover Letter" />
            <DropIndi name="Following" />
          </ul>
          <div className={classes.heading}>Career materials</div>
          <ul>
            <DropIndi name="Blog" />
            <DropIndi name="Pod Casts" />
          </ul>
        </div>
      );
      let check = this.state.CircleDrop;
      if (check !== null) {
        insert = null;
      }
      this.setState({ CircleDrop: insert });
    } else if (name === "Message") {
      let insert = (
        <div className={classes.dropDownContact}>
          <div className={classes.heading}>Professional groups</div>
          <ul>
            <DropIndi name="Group 1" />
            <DropIndi name="Group 2" />
            <DropIndi name="Group 3" />
            <DropIndi name="Group 4" />
          </ul>
          <div className={classes.heading}>Companies</div>
          <ul>
            <DropIndi name="Company 1" />
            <DropIndi name="Company 2" />
            <DropIndi name="Company 3" />
            <DropIndi name="Company 4" />
          </ul>
        </div>
      );
      let check = this.state.MessageDrop;
      if (check !== null) {
        insert = null;
      }
      this.setState({ MessageDrop: insert });
    } else if (name === "Dual") {
      let insert = (
        <div className={classes.dropDownContact}>
          <div className={classes.heading}>Settings</div>
          <ul>
            <DropIndi name="User Preferences" />
            <DropIndi name="Account Settings" />
            <DropIndi name="Privacy Settings" />
          </ul>
        </div>
      );
      let check = this.state.DualDrop;
      if (check !== null) {
        insert = null;
      }
      this.setState({ DualDrop: insert });
    }
  };

  render() {
    return (
      <div className={classes.navContainer}>
        <div className={classes.logoMain}>
          <img src={Logo} alt="Logo"></img>
        </div>
        <div className={classes.space1}></div>
        <div className={classes.innerContainer}>
          <NavigationIndi
            name="Contact"
            clicked={() => this.dropDownHandler("Contact")}
          />
          {this.state.ContactDrop}
        </div>
        <div className={classes.innerContainer}>
          <NavigationIndi
            name="Circle"
            clicked={() => this.dropDownHandler("Circle")}
          />
          {this.state.CircleDrop}
        </div>
        <div className={classes.innerContainer}>
          <NavigationIndi
            name="Message"
            clicked={() => this.dropDownHandler("Message")}
          />
          {this.state.MessageDrop}
        </div>
        <div className={classes.innerContainer}>
          <NavigationIndi
            name="Dual"
            clicked={() => this.dropDownHandler("Dual")}
          />
          {this.state.DualDrop}
        </div>
        {/*<div className={classes.space2}></div>
        <NavigationIndi name="Hamberger" />*/}
      </div>
    );
  }
}

export default navigationBar;
