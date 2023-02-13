import React from "react";
import Col from "react-bootstrap/Col";
import * as Icon from "react-bootstrap-icons";
import Row from "react-bootstrap/Row";
import "../../css/main.css";

const DisplayInfoFour = (props) => {
  return (
    <Col>
      <Row>{props.title}</Row>
      <Row className="d-flex align-items-center">
        <Col sm="2">
          <Icon.CircleFill color={props.color} size="12" />
        </Col>
        <Col>
          <span className="fs-4 fw-bold">{props.number}%</span>
        </Col>
      </Row>
    </Col>
  );
};

export default DisplayInfoFour;
