import React from "react";
import footerBg from "../../../images/banner1.jpeg";
import styles from "./Footer.module.css";

const Footer = props => {
  return (
    <div className={styles.Footer}>
      <div className={styles.FooterText}>(C) Anthony Gawbill 2020</div>
    </div>
  );
};

export default Footer;
