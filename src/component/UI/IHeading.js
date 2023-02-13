import React from "react";
import { Col, Row } from "react-bootstrap";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import * as Icon from "react-bootstrap-icons";

const IHeading = (props) => {
  const iTooltip = <Tooltip id="tooltip">{props.toolTipInfo}</Tooltip>;

  return (
    <Row>
      <Col>
        <span className="fs-5 fw-semibold">{props.title}</span>
      </Col>
      <Col className="d-flex flex-row-reverse mx-2 mt-2">
        <OverlayTrigger placement="top" overlay={iTooltip}>
          <Icon.InfoCircleFill color="white" size="20" />
        </OverlayTrigger>
      </Col>
    </Row>
  );
};

export default IHeading;
// style={{
//   backgroundColor: "#141313",
//   textAlign: "right",
//   verticalAlign: "top",
// }}
