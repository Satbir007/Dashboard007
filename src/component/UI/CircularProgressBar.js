import React from "react";
import { Container } from "react-bootstrap";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import * as Icon from "react-bootstrap-icons";

const CircularProgressBar = (props) => {
  const iTooltip = (
    <Tooltip id="tooltip">
      <span>
        <Icon.SquareFill color="#0d6efd" size="15" />
      </span>{" "}
      Percentage: <strong>{props.percentage}%</strong>
    </Tooltip>
  );
  return (
    <OverlayTrigger placement="top" overlay={iTooltip}>
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
    </OverlayTrigger>
  );
};

export default CircularProgressBar;
