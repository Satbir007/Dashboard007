import React from "react";
import * as Icon from "react-bootstrap-icons";

const BellIcon = () => {
  return (
    <div className="mt-1 mx-5 py-2 bell-status" current-stats="8">
      <Icon.BellFill color="white" size="25" />
    </div>
  );
};

export default BellIcon;
