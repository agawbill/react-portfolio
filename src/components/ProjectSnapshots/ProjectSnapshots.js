import React from "react";
import { withRouter } from "react-router-dom";
import styles from "./ProjectSnapshots.module.css";
import ProjectSnapshot from "./ProjectSnapshot/ProjectSnapshot";

const ProjectSnapshots = props => {
  let classes = styles.Projects;
  if (props.location !== undefined) {
    if (props.location.pathname === "/projects") {
      classes = [styles.Projects, styles.AddMargin].join(" ");
    }
  }

  const projectHandler = (id, slug) => {
    props.history.push({ pathname: `/projects/${slug}`, search: `?id=${id}` });
  };
  const projectsContainer = props.projects.slice(0, 6).map(project => {
    return (
      <ProjectSnapshot
        image={project.images[0].url}
        category={project.category}
        body={project.body}
        title={project.title}
        user={project.user.username}
        email={project.email}
        dateCreated={project.created_at}
        id={project.id}
        clicked={() => projectHandler(project.id, project.slug)}
        key={project.id}
      />
    );
  });

  return <div className={classes}>{projectsContainer}</div>;
};

export default withRouter(ProjectSnapshots);
