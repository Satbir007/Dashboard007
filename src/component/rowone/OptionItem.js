import React from "react";
import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "../../css/main.css";

const OptionItem = (props) => {
  return (
    <Container fluid>
      <Form.Select
        aria-label="Default select example"
        className=" text-white p-1 my-2 fs-6 bgBlack"
      >
        {props.opDefault && <option>{props.opDefault}</option>}
        {props.opOne && <option value="1">{props.opOne}</option>}
        {props.opTwo && <option value="2">{props.opTwo}</option>}
        {props.opThree && <option value="3">{props.opThree}</option>}
      </Form.Select>
    </Container>
  );
};

export default OptionItem;
