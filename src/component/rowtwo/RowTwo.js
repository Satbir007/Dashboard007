import React from "react";
import { Col, Row } from "react-bootstrap";
import CompletedTrips from "./CompletedTrips";
import LateDispatchTrips from "./LateDispatchTrips";
import TotalCases from "./TotalCases";
import TotalTrips from "./TotalTrips";
import "../../css/main.css";

const RowTwo = () => {
  return (
    <Row className="bg-dark mx-2 mt-3 borderRadius">
      <Col xl={3} sm={6} className="borderRight borderRadius pb-2">
        <TotalCases />
      </Col>
      <Col xl={3} sm={6} className="borderRight borderRadius pb-2">
        <CompletedTrips />
      </Col>
      <Col xl={3} sm={6} className="borderRight borderRadius pb-2">
        <TotalTrips />
      </Col>
      <Col xl={3} sm={6} className="bg-danger borderRadius pb-2">
        <LateDispatchTrips />
      </Col>
    </Row>
  );
};

export default RowTwo;
