import React from "react";

import DisplayInfoThree from "../UI/DisplayInfoThree";

const Sorter = () => {
  const displayInfo = 1;
  const val = 2308;
  const totalVal = 21234;
  const title = "Sorter";
  const textOne = "Total Recircs";
  const textTwo = "Total Successful Diverts";
  const percentage = 13;
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

export default Sorter;
