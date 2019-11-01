import * as actionTypes from "../actions/actionTypes";

const initialState = {
  posts: [],
  currentPost: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.HYDRATE_BLOGS:
      return {
        ...state,
        posts: [...action.blogs]
      };
    case actionTypes.FIND_BLOG:
      const post = state.posts.find(post => post.id === action.blogId);
      return {
        ...state,
        currentPost: post
      };
    case actionTypes.RESET_BLOG:
      return {
        ...state,
        currentPost: null
      };
    default:
      return state;
  }
};

export default reducer;
