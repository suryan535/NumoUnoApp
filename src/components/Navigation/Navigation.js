import React, { Component } from "react";
import PointArrow from "../../assets/pointarrow.svg";
import classes from "./Navigation.module.css";
import NavigationIndi from "../NavigationIndi/NavigationIndi";

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
            <li>
              <div className={classes.textLink}>My Profile</div>
              <div className={classes.arrowImage}>
                <img src={PointArrow}></img>
              </div>
            </li>
            <li>
              <div className={classes.textLink}>Strength Overview</div>
              <div className={classes.arrowImage}>
                <img src={PointArrow}></img>
              </div>
            </li>
            <li>
              <div className={classes.textLink}>My details</div>
              <div className={classes.arrowImage}>
                <img src={PointArrow}></img>
              </div>
            </li>
            <li>
              <div className={classes.textLink}>Resume</div>
              <div className={classes.arrowImage}>
                <img src={PointArrow}></img>
              </div>
            </li>
            <li>
              <div className={classes.textLink}>Cover letter</div>
              <div className={classes.arrowImage}>
                <img src={PointArrow}></img>
              </div>
            </li>
            <li>
              <div className={classes.textLink}>Following</div>
              <div className={classes.arrowImage}>
                <img src={PointArrow}></img>
              </div>
            </li>
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
            <li>
              <div className={classes.textLink}>Suggestions</div>
              <div className={classes.arrowImage}>
                <img src={PointArrow}></img>
              </div>
            </li>
            <li>
              <div className={classes.textLink}>My Preferences</div>
              <div className={classes.arrowImage}>
                <img src={PointArrow}></img>
              </div>
            </li>
            <li>
              <div className={classes.textLink}>Internships</div>
              <div className={classes.arrowImage}>
                <img src={PointArrow}></img>
              </div>
            </li>
            <li>
              <div className={classes.textLink}>My applications</div>
              <div className={classes.arrowImage}>
                <img src={PointArrow}></img>
              </div>
            </li>
            <li>
              <div className={classes.textLink}>Cover letter</div>
              <div className={classes.arrowImage}>
                <img src={PointArrow}></img>
              </div>
            </li>
            <li>
              <div className={classes.textLink}>Following</div>
              <div className={classes.arrowImage}>
                <img src={PointArrow}></img>
              </div>
            </li>
          </ul>
          <div className={classes.heading}>Career materials</div>
          <ul>
            <li>
              <div className={classes.textLink}>Blog</div>
              <div className={classes.arrowImage}>
                <img src={PointArrow}></img>
              </div>
            </li>
            <li>
              <div className={classes.textLink}>Pod casts</div>
              <div className={classes.arrowImage}>
                <img src={PointArrow}></img>
              </div>
            </li>
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
            <li>
              <div className={classes.textLink}>Group 1</div>
              <div className={classes.arrowImage}>
                <img src={PointArrow}></img>
              </div>
            </li>
            <li>
              <div className={classes.textLink}>Group 2</div>
              <div className={classes.arrowImage}>
                <img src={PointArrow}></img>
              </div>
            </li>
            <li>
              <div className={classes.textLink}>Group 3</div>
              <div className={classes.arrowImage}>
                <img src={PointArrow}></img>
              </div>
            </li>
            <li>
              <div className={classes.textLink}>Group 4</div>
              <div className={classes.arrowImage}>
                <img src={PointArrow}></img>
              </div>
            </li>
          </ul>
          <div className={classes.heading}>Companies</div>
          <ul>
            <li>
              <div className={classes.textLink}>Company 1</div>
              <div className={classes.arrowImage}>
                <img src={PointArrow}></img>
              </div>
            </li>
            <li>
              <div className={classes.textLink}>Company 2</div>
              <div className={classes.arrowImage}>
                <img src={PointArrow}></img>
              </div>
            </li>
            <li>
              <div className={classes.textLink}>Company 3</div>
              <div className={classes.arrowImage}>
                <img src={PointArrow}></img>
              </div>
            </li>
            <li>
              <div className={classes.textLink}>Company 4</div>
              <div className={classes.arrowImage}>
                <img src={PointArrow}></img>
              </div>
            </li>
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
            <li>
              <div className={classes.textLink}>User Preferences</div>
              <div className={classes.arrowImage}>
                <img src={PointArrow}></img>
              </div>
            </li>
            <li>
              <div className={classes.textLink}>Account Settings</div>
              <div className={classes.arrowImage}>
                <img src={PointArrow}></img>
              </div>
            </li>
            <li>
              <div className={classes.textLink}>Privacy Settings</div>
              <div className={classes.arrowImage}>
                <img src={PointArrow}></img>
              </div>
            </li>
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
        <div className={classes.space2}></div>
        <NavigationIndi name="Hamberger" />
      </div>
    );
  }
}

export default navigationBar;
