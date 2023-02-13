import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import * as Icon from "react-bootstrap-icons";

const StackedProgressBar = () => {
  const iTooltip = (
    <Tooltip id="itooltip">
      <span>
        <Icon.SquareFill color="#0d6efd" size="15" />
      </span>{" "}
      Trip Changes: <strong>7%</strong>
      <br />
      <span>
        <Icon.SquareFill color="#198754" size="15" />
      </span>{" "}
      Outbound Stops: <strong>12%</strong>
      <br />
      <span>
        <Icon.SquareFill color="#ffc107" size="15" />
      </span>{" "}
      Inbound Stops: <strong>19%</strong>
      <br />
      <span>
        <Icon.SquareFill color="#0dcaf0" size="15" />
      </span>{" "}
      Total Up Time: <strong>62%</strong>
    </Tooltip>
  );
  return (
    <OverlayTrigger placement="top" overlay={iTooltip}>
      <ProgressBar>
        <ProgressBar animated variant="primary" now={7} key={1} />

        <ProgressBar animated variant="success" now={12} key={2} />

        <ProgressBar animated variant="warning" now={19} key={3} />

        <ProgressBar animated variant="info" now={62} key={4} />
      </ProgressBar>
    </OverlayTrigger>
  );
};

export default StackedProgressBar;
