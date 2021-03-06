import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "./About.module.css";
import ReactMarkdown from "react-markdown";
import Header from "../../../components/UI/Header/Header";
import Spinner from "../../../components/UI/Spinner/Spinner";
import { Container } from "react-bootstrap";

const About = props => {
  const about = useSelector(state => state.content.aboutData);
  const loading = useSelector(state => state.content.loading);

  useEffect(() => {
    document.title = about.title;
  });

  let classes = styles.AboutLanding;

  let body = <Spinner />;

  if (!loading) {
    body = (
      <>
        <h1>{about.title}</h1>
        <img src={about.images[0].url} align="left" alt="portrain of me" />
        <ReactMarkdown source={about.content} escapeHtml={false} />
      </>
    );
  }

  if (!loading && props.location !== undefined) {
    if (props.location.pathname === "/about") {
      classes = styles.About;
      body = (
        <>
          <Header type="about me" title=" About me" />
          <img src={about.images[0].url} align="left" alt="portrain of me" />
          <ReactMarkdown source={about.content} styles={classes} />
        </>
      );
    }
  }

  return (
    <Container>
      <div className={classes}>
        <div>
          <span>{body}</span>
        </div>
      </div>
    </Container>
  );
};

export default About;
