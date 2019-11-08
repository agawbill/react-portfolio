import React from "react";
import { useSelector } from "react-redux";
import styles from "./Contact.module.css";
import Header from "../../../components/UI/Header/Header";
import SocialIcons from "../../../components/UI/SocialIcons/SocialIcons";

const Contact = props => {
  const contactData = useSelector(state => state.contactData.content);
  return (
    <div className={styles.Contact}>
      <Header type="contact" title=" Contact" />
      {contactData}
      <p />
      <SocialIcons size="2x" />
    </div>
  );
};

export default Contact;
