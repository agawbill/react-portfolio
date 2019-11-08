import * as actionTypes from "../actions/actionTypes";

const initialState = {
  projects: [],
  selectedProjects: [],
  currentProject: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.HYDRATE_PROJECTS:
      const projects = action.projects.filter(project => {
        console.log(project);

        return !project.Rank;
      });

      return {
        ...state,
        projects
      };
    case actionTypes.FIND_PROJECT:
      const project = state.projects.find(
        project => project.id === action.projectId
      );

      return {
        ...state,
        currentProject: project
      };
    case actionTypes.RESET_PROJECT:
      return {
        ...state,
        currentProject: null
      };
    default:
      return state;
  }
};

export default reducer;
