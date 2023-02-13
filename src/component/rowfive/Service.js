import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DisplayInfoOne from "../UI/DisplayInfoOne";
import "../../css/main.css";
import IHeading from "../UI/IHeading";
import PickingProgressBar from "../UI/PickingProgressBar";

const Service = () => {
  const [active, setActive] = useState("FirstContainer");
  const activeStyle = "border-bottom border-primary ";
  const nonActiveStyle = "border-bottom border-light";
  const Mc = ["MC-08373501-4.49 CT HOT", 90, "info", "2,040"];
  const Me = ["MC-08373501-4.49 CT CLASSIC", 50, "info", "1,387"];
  const Gb = ["MC-08373501-4.49 CT CLASSIC", 35, "info", "1,491"];
  const Fe = ["MC-08373501-4.49 CT CLASSIC", 51, "info", "1,024"];
  const Rp = ["MC-08373501-4.49 CT CLASSIC", 52, "info", "1,678"];
  return (
    <Container
      fluid
      className=" text-white bg-dark px-3 pt-3 pb-4 borderRadius"
    >
      <IHeading title="Service" />
      <Row className="my-4">
        <Col>
          <DisplayInfoOne
            number={"13,456"}
            text={"TOTAL EACHES CUTS"}
            styleNumber={"fs-3 fw-bold"}
            styleText={"fs-6"}
          />
        </Col>
        <Col>
          <DisplayInfoOne
            number={"1,905"}
            text={"TOTAL FULL CASE CUTS"}
            styleNumber={"fs-3 fw-bold"}
            styleText={"fs-6"}
          />
        </Col>
      </Row>
      <Row className="my-3">
        <Col
          xs={4}
          className={active === "FirstContainer" ? activeStyle : nonActiveStyle}
          onClick={() => {
            setActive("FirstContainer");
          }}
        >
          <span>Top FC Cuts</span>
        </Col>
        <Col
          xs={5}
          className={
            active === "SecondContainer" ? activeStyle : nonActiveStyle
          }
          onClick={() => {
            setActive("SecondContainer");
          }}
        >
          <span>Top Eaches Bag Cuts</span>
        </Col>
        <Col
          xs={3}
          className={
            active === "ThirdContainer"
              ? activeStyle
              : "border-bottom border-secondary"
          }
          onClick={() => {
            setActive("ThirdContainer");
          }}
        ></Col>
      </Row>

      {active === "FirstContainer" && (
        <Container fluid className="my-3 pb-2">
          <PickingProgressBar item={Mc} lWidth={8} rWidth={2} />
          <PickingProgressBar item={Me} lWidth={8} rWidth={2} />
          <PickingProgressBar item={Gb} lWidth={8} rWidth={2} />
          <PickingProgressBar item={Fe} lWidth={8} rWidth={2} />
          <PickingProgressBar item={Rp} lWidth={8} rWidth={2} />
        </Container>
      )}

      {active === "SecondContainer" && (
        <Container fluid className="my-3 pb-2">
          <PickingProgressBar item={Gb} lWidth={8} rWidth={2} />
          <PickingProgressBar item={Mc} lWidth={8} rWidth={2} />
          <PickingProgressBar item={Rp} lWidth={8} rWidth={2} />
          <PickingProgressBar item={Me} lWidth={8} rWidth={2} />
          <PickingProgressBar item={Fe} lWidth={8} rWidth={2} />
        </Container>
      )}

      {active === "ThirdContainer" && <Container fluid></Container>}
    </Container>
  );
};

export default Service;
