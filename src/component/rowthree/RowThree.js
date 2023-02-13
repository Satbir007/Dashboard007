import React from "react";
import { Col, Row } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import Picking from "./Picking";
import PickingProgress from "./PickingProgress";
import PickRate from "./PickRate";
import PickTime from "./PickTime";
import "../../css/main.css";

const RowThree = () => {
  return (
    <Row className=" mx-2 mt-3 pb-2 bg-dark borderRadius">
      <Col xl={4} sm={6}>
        <Picking />
      </Col>
      <Col xl={4} sm={6}>
        <PickingProgress />
      </Col>
      <Col xl={4} sm={12}>
        <Row>
          <Col className="d-flex flex-row-reverse mx-2 mt-2">
            <Icon.InfoCircleFill color="white" size="20" />
          </Col>
        </Row>
        <Row className="pt-3 ">
          <Col sm={6} className="d-flex flex-row-reverse">
            <PickRate />
          </Col>
          <Col sm={6} className="d-flex justify-content-center">
            <PickTime sm={"10"} />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default RowThree;
