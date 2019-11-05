import React from "react";
import { withRouter } from "react-router-dom";
import ProjectSnapshot from "./ProjectSnapshot/ProjectSnapshot";

const ProjectSnapshots = props => {
  const projectHandler = (id, slug) => {
    props.history.push({ pathname: `/projects/${slug}`, search: `?id=${id}` });
  };
  const projectsContainer = props.projects.reverse.slice(0, 8).map(project => {
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

  return <>{projectsContainer}</>;
};

export default withRouter(ProjectSnapshots);
