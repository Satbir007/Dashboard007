import React from "react";
import { Col, Row } from "react-bootstrap";
import Home from "./Home";
import Options from "./Options";

const RowOne = () => {
  return (
    <Row>
      <Col xl={5} sm={12}>
        <Home />
      </Col>
      <Col xl={7} sm={12}>
        <Options />
      </Col>
    </Row>
  );
};

export default RowOne;
