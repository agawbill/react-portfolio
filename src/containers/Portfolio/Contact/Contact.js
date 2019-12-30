import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "./Contact.module.css";
import Header from "../../../components/UI/Header/Header";
import SocialIcons from "../../../components/UI/SocialIcons/SocialIcons";
import { Container } from "react-bootstrap";

const Contact = props => {
  const contactData = useSelector(state => state.content.contactData.content);
  const contactTitle = useSelector(state => state.content.contactData.title);

  useEffect(() => {
    document.title = contactTitle;
  });

  return (
    <Container>
      <div className={styles.Contact}>
        <Header type="contact" title=" Contact" />
        {contactData}
        <p />
        <SocialIcons size="2x" />
      </div>
    </Container>
  );
};

export default Contact;
