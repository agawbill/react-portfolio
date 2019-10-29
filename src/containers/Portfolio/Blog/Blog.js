import React from "react";
import { useSelector } from "react-redux";
import Header from "../../../components/UI/Header/Header";
import PostSnapshots from "../../../components/PostSnapshots/PostSnapshots";

const Blog = props => {
  const posts = useSelector(state => state.blogs.posts);

  return (
    <>
      <Header type="blogs" title=" Blogs" />
      <PostSnapshots posts={posts} />
    </>
  );
};

export default Blog;
