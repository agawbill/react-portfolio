import React, { memo } from "react";
import ReactMarkdown from "react-markdown";
import styles from "./PostSnapshot.module.css";

const PostSnapshot = props => {
  const date = new Date(props.dateCreated);
  let wrapperClass = null;
  let classes = [styles.PostSnapshot, styles.WidthLanding];
  if (props.location !== undefined) {
    if (props.location.pathname === "/projects") {
      wrapperClass = styles.Wrapper;
      classes = [styles.PostSnapshot, styles.WidthPosts];
    }
  }

  return (
    <div className={styles.Wrapper}>
      <div className={styles.PostSnapshot} onClick={props.clicked}>
        <div className={styles.PostSnapshotIndicator} />
        <div
          className={styles.PostBody}
          style={{ backgroundImage: `url(${props.image})` }}
        >
          <div className={styles.PostSnapshotOverlay}>
            <h3>{props.title}</h3>
            <h4 className={styles.PostHeadline2}>
              <ReactMarkdown source={props.headline} />
            </h4>

            <div className={styles.DateName}>
              {props.user} | {date.toDateString()}
            </div>
          </div>
        </div>
        <div className={styles.RightWrapper}>
          <h4 className={styles.PostHeadline}>
            <ReactMarkdown source={props.headline} />
          </h4>
          <h4 className={styles.Category}>{props.category}</h4>

          <span className={styles.PostSnapshotText}>
            <ReactMarkdown source={`${props.body.substring(0, 120)}...`} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default memo(PostSnapshot);
