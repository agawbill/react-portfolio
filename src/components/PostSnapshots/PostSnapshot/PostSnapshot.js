import React, { memo } from "react";
import ReactMarkdown from "react-markdown";
import styles from "./PostSnapshot.module.css";

const PostSnapshot = props => {
  const date = new Date(props.dateCreated);

  return (
    <div className={styles.PostSnapshot} onClick={props.clicked}>
      <div
        className={styles.PostSnapshotImage}
        style={{
          backgroundImage: `url(${props.image})`
        }}
      />
      <div className={styles.PostSnapshotIndicator} />
      <div
        className={styles.PostBody}
        style={{ backgroundImage: `url(${props.image})` }}
      >
        <div className={styles.PostSnapshotOverlay}>
          <h4 className={styles.Category}>{props.category}</h4>
          <h3>{props.title}</h3>

          <h4 className={styles.PostHeadline}>
            <ReactMarkdown source={props.headline} />
          </h4>

          <h6>
            <ReactMarkdown source={`${props.body.substring(0, 200)}...`} />
          </h6>

          <div className={styles.DateName}>
            {props.user} | {date.toDateString()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(PostSnapshot);
