import React from "react";
import { useSelector } from "react-redux";
import banner from "../../../images/banner2.jpeg";
import PostSnapshots from "../../../components/PostSnapshots/PostSnapshots";
import ProjectSnapshots from "../../../components/ProjectSnapshots/ProjectSnapshots";
import styles from "./Landing.module.css";
import AboutLanding from "../AboutLanding/AboutLanding";
import Header from "../../../components/UI/Header/Header";
import { Col, Row } from "react-bootstrap";

const Landing = props => {
  const posts = useSelector(state => state.blogs.posts);
  const projects = useSelector(state => state.projects.projects);
  const about = useSelector(state => state.content.aboutData);

  return (
    <>
      <Row>
        <Col>
          <div
            className={styles.Banner}
            style={{ backgroundImage: `url(${banner})` }}
          >
            <AboutLanding imageUrl={about.images[0].url} />
          </div>
        </Col>
      </Row>
      <Row className={styles.Landing}>
        <Col lg={8}>
          <Header title="  Latest Posts" type="latest posts" />
          <PostSnapshots posts={posts} />
        </Col>
        <Col lg={4}>
          <Header title="  Latest Projects" type="latest projects" />
          <ProjectSnapshots projects={projects} />
        </Col>
      </Row>
    </>
  );
};

export default Landing;
