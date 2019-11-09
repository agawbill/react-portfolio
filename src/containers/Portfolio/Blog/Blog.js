import React from "react";
import { useSelector } from "react-redux";
import Header from "../../../components/UI/Header/Header";
import PostSnapshots from "../../../components/PostSnapshots/PostSnapshots";

const Blog = props => {
  const posts = useSelector(state => state.blogs.posts);
  const blogDescription = useSelector(state => state.content.blogsData.content);

  return (
    <div>
      <Header type="blogs" title=" Blogs" />
      {blogDescription}
      <hr />
      <PostSnapshots posts={posts} />
    </div>
  );
};

export default Blog;
