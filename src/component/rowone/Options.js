import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import OptionItem from "./OptionItem";

const Options = () => {
  return (
    <Container>
      <Row>
        <Col xl={2} sm={6} className="d-flex justify-content-center ">
          <OptionItem
            opDefault={"PFNA"}
            opOne={"One"}
            opTwo={"Two"}
            opThree={"Three"}
          />
        </Col>
        <Col xl={3} sm={6} className="d-flex justify-content-center">
          <OptionItem
            opDefault={"RosenBerg"}
            opOne={"India"}
            opTwo={"Two"}
            opThree={"America"}
          />
        </Col>
        <Col xl={3} sm={12} className="d-flex justify-content-center">
          <OptionItem
            opDefault={"April 2, 2022"}
            opOne={"March 2, 2022"}
            opTwo={"August 2, 2022"}
            opThree={"May 2, 2022"}
          />
        </Col>
        <Col xl={2} sm={6}>
          <Container fluid>
            {/* className="d-flex justify-content-end"> */}
            <p className="text-white mt-2 fs-6 pt-2">7:00pm -</p>
          </Container>
        </Col>
        <Col xl={2} md={6} className="d-flex justify-content-center">
          <OptionItem opDefault={"Online"} opOne={"Offline"} />
        </Col>
      </Row>
    </Container>
  );
};

export default Options;
