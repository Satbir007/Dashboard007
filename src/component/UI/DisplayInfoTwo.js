import React from "react";
import { Container } from "react-bootstrap";
import "../../css/main.css";

const DisplayInfoTwo = (props) => {
  return (
    <Container
      fluid
      className=" text-white  py-2 d-flex flex-column px-2 textCenter"
    >
      <span className="fs-6">{props.text}</span>
      <span className="fs-3 fw-bold">{props.number}</span>
    </Container>
  );
};

export default DisplayInfoTwo;
