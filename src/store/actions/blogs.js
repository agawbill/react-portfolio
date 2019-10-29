import * as actionTypes from "./actionTypes";

export const hydrateBlogs = blogs => {
  return {
    type: actionTypes.HYDRATE_BLOGS,
    blogs
  };
};

export const findBlog = blogId => {
  return {
    type: actionTypes.FIND_BLOG,
    blogId
  };
};
export const resetBlog = () => {
  return {
    type: actionTypes.RESET_BLOG
  };
};
