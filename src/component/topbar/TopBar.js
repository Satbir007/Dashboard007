import React from "react";
import "../../css/bell.css";
import "../../css/main.css";
import * as Icon from "react-bootstrap-icons";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";
import Avatar from "./Avatar";
import BellIcon from "./BellIcon";

const TopBar = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={4} xs={6}>
          <a
            href="#"
            className=" d-block text-decoration-none fs-5 fw-bold text-uppercase pt-2 text-white"
          >
            Company
          </a>
        </Col>

        <Col md={4} xs={6} className="pt-2 d-flex justify-content-center ">
          <div className="mx-2">
            <Icon.Grid color="white" size="20" />
          </div>

          <p className="fs-5 fw-semibold text-white">Smart Warehouse</p>
        </Col>

        <Col md={4} xs={12} className="d-flex justify-content-end">
          <BellIcon />

          <Avatar />
        </Col>
      </Row>
    </Container>
  );
};

export default TopBar;
