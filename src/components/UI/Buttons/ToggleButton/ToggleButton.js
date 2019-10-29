import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const ToggleButton = props => {
  let toggleButton = (
    <FontAwesomeIcon
      icon={faBars}
      size="2x"
      style={{ marginRight: "10px" }}
      onClick={() => props.toggleDrawer()}
    />
  );

  if (props.open) {
    toggleButton = (
      <FontAwesomeIcon
        icon={faTimes}
        size="2x"
        style={{ marginRight: "10px" }}
        onClick={() => props.toggleDrawer()}
      />
    );
  }
  return <>{toggleButton}</>;
};

export default ToggleButton;
