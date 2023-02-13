import React from "react";
import DisplayInfoOne from "../UI/DisplayInfoOne";

const TotalTrips = () => {
  const number = "54%";
  const text = "TOTAL TRIPS COMPLETED";
  return (
    <DisplayInfoOne
      number={number}
      text={text}
      styleNumber={"fs-3 fw-bold"}
      styleText={"fs-6"}
    />
  );
};

export default TotalTrips;
