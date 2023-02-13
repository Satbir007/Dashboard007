import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProgressBar from "react-bootstrap/ProgressBar";

const ServiceBar = (props) => {
  return (
    <Row className="my-2" style={{ backgroundColor: "#141313" }}>
      <Col sm="8" style={{ backgroundColor: "#141313" }}>
        <h6
          style={{
            margin: "0",
            backgroundColor: "#141313",
            color: "white",
          }}
        >
          {props.item[0]}{" "}
        </h6>
      </Col>
      <Col sm="2" style={{ backgroundColor: "#141313" }}>
        <ProgressBar variant={props.item[2]} now={props.item[3]} />
      </Col>
      <Col sm="2" style={{ backgroundColor: "#141313" }}>
        <h6
          style={{
            margin: "0",
            backgroundColor: "#141313",
            color: "white",
          }}
        >
          {props.item[1]}
        </h6>
      </Col>
    </Row>
  );
};

export default ServiceBar;
