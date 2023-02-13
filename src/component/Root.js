import React from "react";
import "../css/main.css";
import SideNavigator from "./SideNavigator";
import TopBar from "./topbar/TopBar";
import GridLayout from "./GridLayout";

const Root = () => {
  return (
    <>
      <div className="bgitems">
        <TopBar />
      </div>
      <div className="MainDiv">
        <div className="navMargin">
          <GridLayout />
        </div>
        <div>
          <SideNavigator />
        </div>
      </div>
    </>
  );
};

export default Root;
