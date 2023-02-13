import React from "react";
import Buffer from "./Buffer";
import Service from "./Service";
import Sorter from "./Sorter";
import Outbound from "./Outbound";
import { Col, Row } from "react-bootstrap";
import "../../css/main.css";

const RowFive = () => {
  return (
    <Row className=" mx-2 text-white ">
      <Col xl={4} sm={12} className=" bg-dark p-3 borderRadius mt-3">
        <Buffer />
      </Col>
      <Col xl={4} sm={12} className="borderRadius mt-3">
        <Service />
      </Col>
      <Col xl={4} sm={12}>
        <Row className="bg-dark px-2 pt-2 pb-4 borderRadius mt-3">
          <Sorter />
        </Row>
        <Row className="bg-dark px-2 pt-2 pb-4 mt-3 borderRadius">
          <Outbound />
        </Row>
      </Col>
    </Row>
  );
};

export default RowFive;
