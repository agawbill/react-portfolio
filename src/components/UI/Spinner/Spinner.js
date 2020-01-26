import React from "react";
import styles from "./Spinner.module.css";

const Spinner = props => {
  let spinner = <div className={styles.loader} />;
  switch (props.size) {
    case "button":
      spinner = <div className={styles.loader2} />;
      break;
    default:
      break;
  }
  return <>{spinner}</>;
};

export default Spinner;
