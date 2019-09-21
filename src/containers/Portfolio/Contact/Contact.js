import React from "react";
import styles from "./Contact.module.css";
import SocialIcons from "../../../components/UI/SocialIcons/SocialIcons";

const Contact = props => {
  return (
    <div className={styles.Contact}>
      <h2>Contact</h2>
      Feel free to reach out to me! I'm always eager to hear from and connect
      with new people.
      <p>
        <SocialIcons size="2x" />
      </p>
    </div>
  );
};

export default Contact;
