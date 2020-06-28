import React from "react";
import classes from "./Main.module.css";

//Components
import Card from "./Card/Card";
import Card2 from "./Card2/Card2";

//Top Images
import Connections from "../../assets/connections.svg";
import Peers from "../../assets/peers.svg";
import Visits from "../../assets/visits.svg";
import Company from "../../assets/company.svg";

//Middle And Bottom Images
import PreferredSector from "../../assets/preferredSector.svg";
import PopularTime from "../../assets/popularTime.svg";
import TimeInvested from "../../assets/time.svg";
import PopularSector from "../../assets/popularsector2.svg";
import Snapshot from "../../assets/snapshot.svg";
import Score from "../../assets/score.svg";

const main = () => {
  return (
    <div className={classes.outerMain}>
      <div className={classes.innerMain}>
        <div className={classes.top}>
          <Card header="Total Connections" number="210" image={Connections} />
          <Card header="Profile Visits" number="91" image={Visits} />
          <Card header="Following Peers" number="153" image={Peers} />
          <Card header="Following Companies" number="20" image={Company} />
        </div>
        <div className={classes.middle}>
          <Card2 header="Most Preferred Sector" image={PreferredSector} />
          <Card2 header="Most Popular Time" image={PopularTime} />
          <Card2 header="Total Time Invested" image={TimeInvested} />
        </div>
        <div className={classes.bottom}>
          <Card2 header="Most Popular Sectors" image={PopularSector} />
          <Card2 header="Snapshot" image={Snapshot} />
          <Card2 header="Your Score" image={Score} />
        </div>
      </div>
    </div>
  );
};

export default main;
