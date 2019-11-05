import React from "react";
import PostSnapshot from "./PostSnapshot/PostSnapshot";
import { withRouter } from "react-router-dom";

const PostSnapshots = props => {
  const postHandler = (id, slug) => {
    props.history.push({ pathname: `/blog/${slug}`, search: `?id=${id}` });
  };
  const postsContainer = props.posts
    .reverse()
    .slice(0, 8)
    .map(post => {
      return (
        <PostSnapshot
          image={post.images[0].url}
          category={post.category}
          body={post.body}
          title={post.title}
          user={post.user.username}
          email={post.email}
          headline={post.headline}
          dateCreated={post.created_at}
          clicked={() => postHandler(post.id, post.slug)}
          id={post.id}
          key={post.id}
        />
      );
    });

  return <>{postsContainer}</>;
};

export default withRouter(PostSnapshots);
