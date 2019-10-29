import React from "react";
import { useSelector } from "react-redux";
import ProjectSnapshots from "../../../components/ProjectSnapshots/ProjectSnapshots";
import Header from "../../../components/UI/Header/Header";
import styles from "./Projects.module.css";

const Projects = props => {
  const projects = useSelector(state => state.projects.projects);
  return (
    <>
      <Header type="projects" title=" Projects" />
      <div className={styles.Projects}>
        <ProjectSnapshots projects={projects} />
      </div>
    </>
  );
};

export default Projects;
