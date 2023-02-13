import React from "react";
import DisplayInfoTwo from "../UI/DisplayInfoTwo";

const PickRate = () => {
  const number = "2308";
  const formattedNumber = Math.round(number);
  const text = "AVERAGE PICK RATE";
  return <DisplayInfoTwo number={formattedNumber} text={text} />;
};

export default PickRate;
