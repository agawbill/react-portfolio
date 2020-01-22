import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import banner from "../../../images/banner4.png";
import projectBackground3 from "../../../images/projectBackground3.png";
import postBackground from "../../../images/postBackground.png";
import aboutBorder from "../../../images/borderlanding.png";
import PostSnapshots from "../../../components/PostSnapshots/PostSnapshots";
import ProjectSnapshots from "../../../components/ProjectSnapshots/ProjectSnapshots";
import styles from "./Landing.module.css";
import AboutLanding from "../AboutLanding/AboutLanding";
import Header from "../../../components/UI/Header/Header";
import { Container, Col, Row } from "react-bootstrap";

const Landing = props => {
  const posts = useSelector(state => state.blogs.posts);
  const projects = useSelector(state => state.projects.projects);
  const about = useSelector(state => state.content.aboutData);

  useEffect(() => {
    document.title = "Anthony Gawbill";
  });

  return (
    <>
      <div className={styles.BannerContainer}>
        <Container fluid>
          <Row className={styles.NoPadding}>
            <Col className={styles.NoPadding}>
              <div
                className={styles.Banner}
                style={{
                  backgroundImage: `url(${banner})`
                }}
              >
                <AboutLanding imageUrl={about.images[0].url} />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div
        className={styles.PostsContainer}
        style={{
          // backgroundImage: `url(${postBackground})`,
          boxShadow: "0 4px 6px -6px #222"
        }}
      >
        <Container>
          <Row>
            <Col lg={7}>
              <center>
                <Header title="  Latest Posts" type="latest posts" />
              </center>
              <PostSnapshots posts={posts} />
            </Col>
            <Col lg={5}>
              <center>
                <Header title="  Latest Projects" type="latest projects" />
              </center>
              <ProjectSnapshots projects={projects} />
            </Col>
          </Row>
        </Container>
      </div>
      {/* <div className={styles.header} />
      <div
        className={styles.ProjectsContainer}
        style={{ backgroundImage: `url(${projectBackground3})` }}
      >
        <Container>
          <Row>hi</Row>
        </Container>
      </div> */}
    </>
  );
};

export default Landing;
