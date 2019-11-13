import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ProjectSnapshots from "../../../components/ProjectSnapshots/ProjectSnapshots";
import Header from "../../../components/UI/Header/Header";
import styles from "./Projects.module.css";

const Projects = props => {
  const sectionTitle = useSelector(state => state.content.projectsData.title);
  const sectionDescription = useSelector(
    state => state.content.projectsData.content
  );

  const selectedProjects = useSelector(
    state => state.projects.selectedProjects
  );
  const remainingProjects = useSelector(
    state => state.projects.remainingProjects
  );

  useEffect(() => {
    document.title = "Projects";
  });

  return (
    <>
      <Header type="projects" title=" Projects" />
      {sectionDescription}
      <hr />
      <div className={styles.Projects}>
        <ProjectSnapshots projects={selectedProjects} />
      </div>
      <hr />
      <div className={styles.Projects}>
        <ProjectSnapshots projects={remainingProjects} />
      </div>
    </>
  );
};

export default Projects;
