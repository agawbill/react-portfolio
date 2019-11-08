import React from "react";
import { useSelector } from "react-redux";
import ProjectSnapshots from "../../../components/ProjectSnapshots/ProjectSnapshots";
import Header from "../../../components/UI/Header/Header";
import styles from "./Projects.module.css";

const Projects = props => {
  const sectionDescription = useSelector(state => state.content.projects);
  console.log(sectionDescription);

  const selectedProjects = useSelector(
    state => state.projects.selectedProjects
  );
  const remainingProjects = useSelector(
    state => state.projects.remainingProjects
  );
  return (
    <>
      <Header type="projects" title=" Projects" />
      <div className={styles.Projects}>
        <ProjectSnapshots projects={selectedProjects} />
      </div>
    </>
  );
};

export default Projects;
