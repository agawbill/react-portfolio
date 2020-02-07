import React from "react";
import PostSnapshot from "./PostSnapshot/PostSnapshot";
import styles from "./PostSnapshots.module.css";
import { withRouter } from "react-router-dom";

const PostSnapshots = props => {
  let classes = styles.Posts;
  if (props.location !== undefined) {
    if (props.location.pathname === "/blog") {
      classes = [styles.Posts, styles.AddMargin].join(" ");
    }
  }

  const postHandler = (id, slug) => {
    props.history.push({ pathname: `/blog/${slug}`, search: `?id=${id}` });
  };

  const postsContainer = props.posts.slice(0, 6).map(post => {
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

  return <div className={classes}>{postsContainer}</div>;
};

export default withRouter(PostSnapshots);
