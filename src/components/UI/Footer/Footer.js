import React from "react";
import styles from "./Footer.module.css";
import SocialIcons from "../../UI/SocialIcons/SocialIcons";

const Footer = props => {
  return (
    <div className={styles.Footer}>
      <div className={styles.FooterText}>(C) Anthony Gawbill 2020</div>
    </div>
  );
};

export default Footer;
