import React from "react";
import DisplayInfoOne from "../UI/DisplayInfoOne";

const LateDispatchTrips = () => {
  const number = "6";
  const text = "LATE DISPATCHED TRIPS";
  return (
    <DisplayInfoOne
      number={number}
      text={text}
      styleNumber={"fs-3 fw-bold"}
      styleText={"fs-6"}
    />
  );
};

export default LateDispatchTrips;
