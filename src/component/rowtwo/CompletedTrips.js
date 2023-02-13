import React from "react";
import DisplayInfoOne from "../UI/DisplayInfoOne";

const CompletedTrips = () => {
  const number = "16/30";
  const text = "COMPLETED TRIPS";
  return (
    <DisplayInfoOne
      number={number}
      text={text}
      styleNumber={"fs-3 fw-bold"}
      styleText={"fs-6"}
    />
  );
};

export default CompletedTrips;
