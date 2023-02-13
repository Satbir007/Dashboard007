import React from "react";

import DisplayInfoThree from "../UI/DisplayInfoThree";

const Shipping = () => {
  const displayInfo = 0;
  const val = 15345;
  const totalVal = 35327;
  const title = "Shipping";
  const textOne = "Total Picked";
  const textTwo = "Remaining to Pick";
  const percentage = 74;
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

export default Shipping;
