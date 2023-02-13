import React from "react";
import { Container } from "react-bootstrap";
import "../../css/main.css";

const DisplayInfoOne = (props) => {
  return (
    <Container fluid className="text-white pb-2 borderRadius">
      <span className={props.styleNumber}>{props.number}</span>
      <br />
      <span className={props.styleText}>{props.text}</span>
    </Container>
  );
};

export default DisplayInfoOne;
