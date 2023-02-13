import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProgressBar from "react-bootstrap/ProgressBar";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import * as Icon from "react-bootstrap-icons";
import "../../css/main.css";

const PickingProgressBar = (props) => {
  const iBarTooltip = (
    <Tooltip id="btooltip">
      <span>
        <Icon.SquareFill color={props.item[4]} size="15" />
      </span>{" "}
      Percentage: <strong>{props.item[1]}%</strong>
    </Tooltip>
  );

  return (
    <Row className="d-flex align-items-center justify-content-center">
      <Col md={props.lWidth}>
        <span>{props.item[0]} </span>
      </Col>
      <Col>
        <OverlayTrigger placement="top" overlay={iBarTooltip}>
          <ProgressBar animated variant={props.item[2]} now={props.item[1]} />
        </OverlayTrigger>
      </Col>
      <Col xl={props.rWidth}>
        <span>
          <b>{props.item[3]}</b>
        </span>
      </Col>
    </Row>
  );
};

export default PickingProgressBar;
