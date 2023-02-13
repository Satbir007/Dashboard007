import React from "react";

import DisplayInfoThree from "../UI/DisplayInfoThree";

const Picking = () => {
  const displayInfo = 0;
  const val = 15345;
  const totalVal = 35327;
  const title = "Picking";
  const textOne = "Total Picked";
  const textTwo = "Remaining to Pick";
  const percentage = 42;
  return (
    <DisplayInfoThree
      displayInfo={displayInfo}
      val={val}
      totalVal={totalVal}
      title={title}
      textOne={textOne}
      textTwo={textTwo}
      percentage={percentage}
    />
  );
};

export default Picking;
