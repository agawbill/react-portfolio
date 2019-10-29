import * as actionTypes from "./actionTypes";

export const hydrateProjects = projects => {
  return {
    type: actionTypes.HYDRATE_PROJECTS,
    projects
  };
};

export const findProject = projectId => {
  return {
    type: actionTypes.FIND_PROJECT,
    projectId
  };
};

export const resetProject = () => {
  return {
    type: actionTypes.RESET_PROJECT
  };
};
