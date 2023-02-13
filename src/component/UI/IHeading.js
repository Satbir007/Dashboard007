import React from "react";
import { Col, Row } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";

const IHeading = (props) => {
  return (
    <Row>
      <Col>
        <span className="fs-5 fw-semibold">{props.title}</span>
      </Col>
      <Col className="d-flex flex-row-reverse mx-2 mt-2">
        <Icon.InfoCircleFill color="white" size="20" />
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
