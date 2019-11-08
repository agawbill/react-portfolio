import * as actionTypes from "./actionTypes";
import { keys } from "../../config/keys";
import Strapi from "strapi-sdk-javascript";
import { interceptor } from "../../hoc/withErrorHandler";
import { hydrateBlogs, hydrateProjects } from "./index";

export const fetchContent = () => {
  return async dispatch => {
    const strapi = new Strapi(keys.strapiURL);
    try {
      await dispatch(fetchContentStart());
      const [postsData, projectsData, sectionsData] = await Promise.all([
        strapi.getEntries("posts"),
        strapi.getEntries("projects"),
        strapi.getEntries("sections")
      ]);
      await dispatch(hydrateBlogs(postsData));
      await dispatch(hydrateProjects(projectsData));
      await dispatch(hydrateSections(sectionsData));
      await dispatch(setContact());
      await dispatch(setAbout());
      await dispatch(fetchContentSuccess());
    } catch (err) {
      await interceptor(err);
      await dispatch(fetchContentFail());
    }
  };
};

export const fetchContentStart = () => {
  return {
    type: actionTypes.FETCH_CONTENT_START
  };
};

export const fetchContentFail = () => {
  return {
    type: actionTypes.FETCH_CONTENT_FAIL
  };
};

export const fetchContentSuccess = () => {
  return {
    type: actionTypes.FETCH_CONTENT_SUCCESS
  };
};

export const hydrateSections = sections => {
  return {
    type: actionTypes.HYDRATE_SECTIONS,
    sections
  };
};

export const setAbout = () => {
  return {
    type: actionTypes.SET_ABOUT
  };
};
export const setContact = () => {
  return {
    type: actionTypes.SET_CONTACT
  };
};
export const setProjects = () => {
  return {
    type: actionTypes.SET_PROJECTS
  };
};
export const setBlogs = () => {
  return {
    type: actionTypes.SET_BLOGS
  };
};
export const findProject = projectId => {
  return {
    type: actionTypes.FIND_PROJECT,
    projectId
  };
};
