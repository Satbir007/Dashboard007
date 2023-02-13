import React from "react";
import BarChart from "../UI/BarChart";
import * as Icon from "react-bootstrap-icons";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../css/main.css";

const AverageShip = () => {
  return (
    <Container fluid className="text-white pt-2">
      <Row>
        <span className="small fw-semibold pt-2">AVERAGE SHIP</span>
      </Row>
      <Row>
        <BarChart />
      </Row>
      <Row>
        <Col className="d-flex justify-content-center align-items-center">
          <Icon.CircleFill color="#0dcaf0" size="12" />
          <span className="px-2">Above Plan</span>
        </Col>
        <Col className="d-flex justify-content-center align-items-center">
          <Icon.CircleFill color="#dc3545" size="12" />
          <span className="px-2">Below Plan</span>
        </Col>
      </Row>
    </Container>
  );
};

export default AverageShip;
