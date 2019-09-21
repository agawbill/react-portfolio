import React from "react";
import styles from "./Backdrop.module.css";

const Backdrop = props =>
  props.open ? (
    <div className={styles.Backdrop} onClick={() => props.closeDrawer()} />
  ) : null;

export default Backdrop;
