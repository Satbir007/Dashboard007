import React from "react";
import DisplayInfoTwo from "../UI/DisplayInfoTwo";

const ShipRate = () => {
  const number = "2506";
  const formattedNumber = Math.round(number);
  const text = "AVERAGE SHIP RATE";
  return <DisplayInfoTwo number={formattedNumber} text={text} />;
};

export default ShipRate;
