import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../../../store/actions";
import Spinner from "../../../../components/UI/Spinner/Spinner";
import styles from "./BlogPost.module.css";
import ShareIcons from "../../../../components/UI/ShareIcons/ShareIcons";
import Header from "../../../../components/UI/Header/Header";
import ReactMarkdown from "react-markdown";

const BlogPost = props => {
  const post = useSelector(state => state.blogs.currentPost);
  const dispatch = useDispatch();

  useEffect(() => {
    const searchParams = new URLSearchParams(`${props.location.search}`);
    const id = searchParams.get("id");
    if (!id) {
      props.history.push("/");
    }
    dispatch(actions.findBlog(id));

    return () => dispatch(actions.resetBlog());
  }, [dispatch, props.location.search, props.history, post]);

  useEffect(() => {
    if (post) {
      document.title = post.title;
    }
  }, [post]);

  let postContainer = <Spinner />;

  if (post) {
    const date = new Date(post.created_at);
    postContainer = (
      <div className={styles.BlogPost}>
        <Header type="blogs" title={" " + post.title} />
        <div className={styles.Headline}>{post.headline}</div>
        <ShareIcons size="lg" />
        <span className={styles.DateName}>
          By <a href={`mailto:${post.email}`}>{post.user.username}</a> on{" "}
          {date.toDateString()} at {date.toLocaleTimeString()}
        </span>
        <hr />
        <ReactMarkdown source={post.body} />
      </div>
    );
  }

  return <>{postContainer}</>;
};

export default BlogPost;
