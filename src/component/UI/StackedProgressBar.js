import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

const StackedProgressBar = () => {
  return (
    <ProgressBar>
      <ProgressBar animated variant="primary" now={7} key={1} />
      <ProgressBar animated variant="success" now={12} key={2} />
      <ProgressBar animated variant="warning" now={19} key={3} />
      <ProgressBar animated variant="info" now={62} key={4} />
    </ProgressBar>
  );
};

export default StackedProgressBar;
