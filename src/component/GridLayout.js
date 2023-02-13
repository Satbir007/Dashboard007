import React from "react";
import Container from "react-bootstrap/Container";
import RowOne from "./rowone/RowOne";
import RowTwo from "./rowtwo/RowTwo";
import RowThree from "./rowthree/RowThree";
import RowFour from "./rowfour/RowFour";
import RowFive from "./rowfive/RowFive";

const GridLayout = () => {
  return (
    <Container fluid>
      <RowOne />
      <RowTwo />
      <RowThree />
      <RowFour />
      <RowFive />
    </Container>
  );
};

export default GridLayout;
