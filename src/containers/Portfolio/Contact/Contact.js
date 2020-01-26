import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "./Contact.module.css";
import Header from "../../../components/UI/Header/Header";
import SocialIcons from "../../../components/UI/SocialIcons/SocialIcons";
import { Container } from "react-bootstrap";
import EmailForm from "../../../components/EmailForm/EmailForm";

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
        <SocialIcons size="2x" />
        <hr />
        <div style={{ width: "800px", margin: "0 auto" }}>
          <EmailForm />
        </div>
      </div>
    </Container>
  );
};

export default Contact;
