import React from "react";
import * as Icon from "react-bootstrap-icons";
import StackedProgressBar from "../UI/StackedProgressBar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DisplayInfoFour from "../UI/DisplayInfoFour";
import IHeading from "../UI/IHeading";

const Outbound = () => {
  return (
    <>
      <Container fluid>
        <IHeading title={"OutBound"} />

        <Row className="mt-3 py-2">
          <div>
            <StackedProgressBar />
          </div>
        </Row>

        <Row className="mt-3">
          <DisplayInfoFour
            title={"Total Up Time"}
            color={"#0dcaf0"}
            number={62}
          />
          <DisplayInfoFour
            title={"Trip Changes"}
            color={"#0d6efd"}
            number={7}
          />
          <DisplayInfoFour
            title={"OutboundStops"}
            color={"#20c997"}
            number={12}
          />
          <DisplayInfoFour
            title={"Inbound Stops"}
            color={"#ffc107"}
            number={19}
          />
        </Row>
      </Container>
    </>
  );
};

export default Outbound;
