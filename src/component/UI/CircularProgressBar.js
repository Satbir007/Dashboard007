import React from "react";
import { Container } from "react-bootstrap";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
const CircularProgressBar = (props) => {
  return (
    <Container style={{ width: 130, height: 130 }}>
      <CircularProgressbar
        value={props.percentage}
        text={`${props.percentage}%`}
        circleRatio={0.75}
        styles={buildStyles({
          rotation: 1 / 2 + 1 / 8,
          textColor: "white",
          pathColor: "#0d6efd",
        })}
      />
    </Container>
  );
};

export default CircularProgressBar;
