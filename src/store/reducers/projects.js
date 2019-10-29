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
      const project = state.projects.find(
        project => project.id === parseInt(action.projectId)
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
