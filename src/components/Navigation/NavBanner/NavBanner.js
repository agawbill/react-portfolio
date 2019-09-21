import React from "react";
import styles from "./NavBanner.module.css";

const NavBanner = props => (
  <>
    <span className={styles.NavBanner}>G</span>
    <span className={styles.NavText}>
      <u>A</u>
      nthony <span style={{ fontSize: "2px" }}>{"\u00A0"}</span> <u>G</u>
      awbill
    </span>
  </>
);

export default NavBanner;
