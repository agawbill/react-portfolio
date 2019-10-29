import React from "react";
import styles from "./Contact.module.css";
import Header from "../../../components/UI/Header/Header";
import SocialIcons from "../../../components/UI/SocialIcons/SocialIcons";

const Contact = props => {
  return (
    <div className={styles.Contact}>
      <Header type="contact" title=" Contact" />
      Feel free to reach out to me! I'm always eager to hear from and connect
      with new people.
      <p />
      <SocialIcons size="2x" />
    </div>
  );
};

export default Contact;
