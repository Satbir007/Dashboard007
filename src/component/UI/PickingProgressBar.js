import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProgressBar from "react-bootstrap/ProgressBar";
import "../../css/main.css";

const PickingProgressBar = (props) => {
  return (
    <Row className="d-flex align-items-center justify-content-center">
      <Col md={props.lWidth}>
        <span>{props.item[0]} </span>
      </Col>
      <Col>
        <ProgressBar animated variant={props.item[2]} now={props.item[1]} />
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
