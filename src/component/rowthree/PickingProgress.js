import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import PickingProgressBar from "../UI/PickingProgressBar";
import "../../css/main.css";

const PickingProgress = () => {
  const Mc = ["MC", 80, "info", "80%"];
  const Me = ["ME", 39, "warning", "39%"];
  const Gb = ["GB", 41, "warning", "41%"];
  const Fe = ["FE", 22, "danger", "22%"];
  const Rp = ["RP", 50, "info", "50%"];

  return (
    <Container fluid className="text-white pt-2">
      <span className="small fw-semibold mb-2">PICKING PROGRESS</span>
      <PickingProgressBar item={Mc} lWidth={1} rWidth={1} />
      <PickingProgressBar item={Me} lWidth={1} rWidth={1} />
      <PickingProgressBar item={Gb} lWidth={1} rWidth={1} />
      <PickingProgressBar item={Fe} lWidth={1} rWidth={1} />
      <PickingProgressBar item={Rp} lWidth={1} rWidth={1} />
    </Container>
  );
};

export default PickingProgress;
