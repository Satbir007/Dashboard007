import * as Icon from "react-bootstrap-icons";
import React from "react";
import { Col, Row } from "react-bootstrap";
import AverageShip from "./AverageShip";
import Shipping from "./Shipping";
import ShipRate from "./ShipRate";
import ShipTime from "./ShipTime";
import "../../css/main.css";

const RowFour = () => {
  return (
    <Row className=" mx-2 mt-3 pb-2 bg-dark borderRadius">
      <Col Col xl={4} sm={6}>
        <Shipping />
      </Col>
      <Col Col xl={4} sm={6}>
        <AverageShip />
      </Col>

      <Col Col xl={4} sm={12}>
        <Row>
          <Col className="d-flex flex-row-reverse mx-2 mt-2">
            <Icon.InfoCircleFill color="white" size="20" />
          </Col>
        </Row>
        <Row className="pt-3 ">
          <Col sm={6} className="d-flex flex-row-reverse">
            <ShipRate />
          </Col>
          <Col sm={6} className="d-flex justify-content-center">
            <ShipTime sm={"10"} />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default RowFour;
