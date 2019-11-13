import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Header from "../../../components/UI/Header/Header";
import PostSnapshots from "../../../components/PostSnapshots/PostSnapshots";

const Blog = props => {
  const posts = useSelector(state => state.blogs.posts);
  const blogDescription = useSelector(state => state.content.blogsData.content);
  const blogTitle = useSelector(state => state.content.blogsData.title);

  useEffect(() => {
    document.title = blogTitle;
  });

  return (
    <>
      <Header type="blogs" title=" Blogs" />
      {blogDescription}
      <hr />
      <PostSnapshots posts={posts} />
    </>
  );
};

export default Blog;
