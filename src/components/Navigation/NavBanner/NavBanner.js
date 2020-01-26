import React from "react";
import styles from "./NavBanner.module.css";
import agBanner from "../../../images/agbanner.png";

const NavBanner = props => (
  <>
    {/* <span className={styles.NavBanner}>G</span> */}
    <span className={styles.NavText}>
      {/* <u>A</u>
      nthony <span style={{ fontSize: "2px" }}>{"\u00A0"}</span> <u>G</u>
      awbill */}
      <img src={agBanner} alt="initials" />
      <span className={styles.FirstName}>Anthony</span>
      <span className={styles.LastName}>Gawbill</span>
    </span>
  </>
);

export default NavBanner;
