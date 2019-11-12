import React from "react";
import footerBg from "../../../images/banner1.jpeg";
import styles from "./Footer.module.css";

const Footer = props => {
  return (
    <div className={styles.Footer} style={{ background: `url(${footerBg})` }} />
  );
};

export default Footer;
