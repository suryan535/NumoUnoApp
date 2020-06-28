import React from "react";
import classes from "./App.module.css";
import NavigationBar from "./components/Navigation/Navigation";
import TopBar from "./components/TopBar/TopBar";
import Main from "./components/Main/Main";

function App() {
  return (
    <>
      <div className={classes.outerContainer}>
        <NavigationBar />
        <div className={classes.content}>
          <TopBar />
          <Main />
        </div>
      </div>
    </>
  );
}

export default App;
