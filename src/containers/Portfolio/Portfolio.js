import React, { useState, useEffect } from "react";
import banner from "../../images/banner2.jpeg";
import PostSnapshot from "../../components/PostSnapshot/PostSnapshot";
import ProjectSnapshot from "../../components/ProjectSnapshot/ProjectSnapshot";
import styles from "./Portfolio.module.css";
import About from "./About/About";
import { Col, Row } from "react-bootstrap";

const Portfolio = props => {
  return (
    <>
      <Row>
        <Col>
          <div
            className={styles.Banner}
            style={{ backgroundImage: `url(${banner})` }}
          >
            <About />
          </div>
        </Col>
      </Row>
      <Row className={styles.Portfolio}>
        <Col md={8}>
          <h2>Latest Posts</h2>
          <PostSnapshot />
        </Col>
        <Col md={4}>
          <h2>Latest Projects</h2>
          <ProjectSnapshot />
        </Col>
      </Row>
    </>
  );
};

export default Portfolio;
