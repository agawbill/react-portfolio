import * as actionTypes from "../actions/actionTypes";

const initialState = {
  projects: [],
  currentProject: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.HYDRATE_PROJECTS:
      return {
        ...state,
        projects: [...action.projects]
      };
    case actionTypes.FIND_PROJECT:
      console.log(action.projectId);

      const project = state.projects.find(
        project => project.id === action.projectId
      );
      console.log(project);

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
