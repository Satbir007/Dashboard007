import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import * as Icon from "react-bootstrap-icons";
import "../../css/main.css";

const DisplayInfoThree = (props) => {
  const formattedVal = props.val.toLocaleString("en-US");
  const formattedTotalVal = props.totalVal.toLocaleString("en-US");
  return (
    <Container fluid className=" text-white borderRadius pt-2">
      <Row>
        <Col>
          <span className="fs-5 fw-semibold">{props.title}</span>
        </Col>
        {props.displayInfo === 1 && (
          <Col className="d-flex flex-row-reverse mx-2 mt-2">
            <Icon.InfoCircleFill color="white" size="20" />
          </Col>
        )}
      </Row>

      <Row className="d-flex align-items-end">
        <Col sm="5">
          <span className=" xxl fw-bold ">{props.percentage}%</span>
        </Col>

        <Col className="pb-2">
          <span>
            {props.textOne}: <b>{formattedVal}</b>
          </span>
          <br />
          <span>
            {props.textTwo}: <b>{formattedTotalVal}</b>
          </span>
        </Col>
      </Row>
      <Row className="px-1">
        <div>
          <ProgressBar animated variant="info" now={props.percentage} />
        </div>
      </Row>
    </Container>
  );
};

export default DisplayInfoThree;
