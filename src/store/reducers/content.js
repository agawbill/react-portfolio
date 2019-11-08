import * as actionTypes from "../actions/actionTypes";

const initialState = {
  sections: [],
  aboutData: null,
  contactData: null,
  blogsData: null,
  projectsData: null,
  selectedProjects: null,
  loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CONTENT_START:
      return {
        ...state,
        loading: true
      };
    case actionTypes.FETCH_CONTENT_FAIL:
      return {
        ...state,
        loading: false
      };
    case actionTypes.FETCH_CONTENT_SUCCESS:
      return {
        ...state,
        loading: false
      };
    case actionTypes.HYDRATE_SECTIONS:
      return {
        ...state,
        sections: [...action.sections]
      };
    case actionTypes.SET_ABOUT:
      const about = state.sections.find(
        section => section.title === "About me"
      );
      return {
        ...state,
        aboutData: about
      };
    case actionTypes.SET_CONTACT:
      const contact = state.sections.find(
        section => section.title === "Contact"
      );
      return {
        ...state,
        contactData: contact
      };
    case actionTypes.SET_BLOGS:
      const blogs = state.sections.find(section => section.title === "Blog");
      return {
        ...state,
        blogsData: blogs
      };
    case actionTypes.SET_PROJECTS:
      const projects = state.sections.find(
        section => section.title === "Projects"
      );

      const regularProjects = projects.filter(project => {
        console.log(project);

        return !project.Rank;
      });

      return {
        ...state,
        projectsData: projects
      };
    default:
      return state;
  }
};

export default reducer;
