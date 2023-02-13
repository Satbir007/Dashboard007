import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import * as Icon from "react-bootstrap-icons";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import "../../css/main.css";

const DisplayInfoThree = (props) => {
  const formattedVal = props.val.toLocaleString("en-US");
  const formattedTotalVal = props.totalVal.toLocaleString("en-US");
  const iTooltip = (
    <Tooltip id="tooltip">
      This section provides the info about sorter services
    </Tooltip>
  );

  const iBarTooltip = (
    <Tooltip id="btooltip">
      <span>
        <Icon.SquareFill color="#0dcaf0" size="15" />
      </span>{" "}
      Percentage: <strong>{props.percentage}%</strong>
    </Tooltip>
  );

  return (
    <Container fluid className=" text-white borderRadius pt-2">
      <Row>
        <Col>
          <span className="fs-5 fw-semibold">{props.title}</span>
        </Col>
        {props.displayInfo === 1 && (
          <Col className="d-flex flex-row-reverse mx-2 mt-2">
            <OverlayTrigger placement="top" overlay={iTooltip}>
              <Icon.InfoCircleFill color="white" size="20" />
            </OverlayTrigger>
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
          <OverlayTrigger placement="top" overlay={iBarTooltip}>
            <ProgressBar animated variant="info" now={props.percentage} />
          </OverlayTrigger>
        </div>
      </Row>
    </Container>
  );
};

export default DisplayInfoThree;
