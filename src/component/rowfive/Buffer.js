import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import * as Icon from "react-bootstrap-icons";
import PickingProgressBar from "../UI/PickingProgressBar";

import "react-circular-progressbar/dist/styles.css";
import DisplayInfoOne from "../UI/DisplayInfoOne";
import IHeading from "../UI/IHeading";
import "../../css/main.css";
import CircularProgressBar from "../UI/CircularProgressBar";

const Buffer = () => {
  const Mc = ["MC", 80, "primary", "80%"];
  const Me = ["ME", 39, "primary", "39%"];
  const Gb = ["GB", 41, "primary", "41%"];
  const Fe = ["FE", 22, "primary", "22%"];
  const Rp = ["RP", 50, "primary", "50%"];

  return (
    <Container fluid>
      <IHeading title={"Buffer"} />
      <Row>
        <Col>
          <Row className="d-flex justify-content-center px-5">
            <CircularProgressBar percentage={66} />
          </Row>
          <Row className="d-flex justify-content-center">
            <span className="small fw-semibold textCenter">FULL</span>
          </Row>
        </Col>

        <Col>
          <DisplayInfoOne
            number={"8,108"}
            text={"Total Stored"}
            styleNumber={"fs-6 fw-bold"}
            styleText={"small"}
          />

          <DisplayInfoOne
            number={"7,327"}
            text={"Total Pickable"}
            styleNumber={"fs-6 fw-bold"}
            styleText={"small"}
          />

          <DisplayInfoOne
            number={"15,435"}
            text={"Total Allocated"}
            styleNumber={"fs-6 fw-bold"}
            styleText={"small"}
          />
        </Col>
      </Row>
      <Row>
        <span className="small fw-semibold mb-2">BUFFER UTILIZATION</span>
        <PickingProgressBar item={Mc} lWidth={1} rWidth={1} />
        <PickingProgressBar item={Me} lWidth={1} rWidth={1} />
        <PickingProgressBar item={Gb} lWidth={1} rWidth={1} />
        <PickingProgressBar item={Fe} lWidth={1} rWidth={1} />
        <PickingProgressBar item={Rp} lWidth={1} rWidth={1} />
      </Row>
    </Container>
  );
};

export default Buffer;
