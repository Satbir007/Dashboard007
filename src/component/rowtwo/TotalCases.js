import React from "react";
import DisplayInfoOne from "../UI/DisplayInfoOne";

const TotalCases = () => {
  const number = 85000;
  const formattedNumber = Math.round(number);
  const text = "TOTAL CASES TO SHIP";
  return (
    <DisplayInfoOne
      number={formattedNumber}
      text={text}
      styleNumber={"fs-3 fw-bold"}
      styleText={"fs-6"}
    />
  );
};

export default TotalCases;
