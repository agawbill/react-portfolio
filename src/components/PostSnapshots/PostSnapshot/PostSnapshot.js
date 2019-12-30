import React from "react";
import ReactMarkdown from "react-markdown";
import styles from "./PostSnapshot.module.css";
import { withRouter } from "react-router-dom";

const PostSnapshot = props => {
  const date = new Date(props.dateCreated);
  let classes = [styles.PostSnapshot];
  if (props.location !== undefined) {
    if (props.location.pathname === "/blog") {
      console.log("hlo");

      classes = [styles.PostSnapshot, styles.PostWidth];
    }
  }

  return (
    <div className={classes.join(" ")} onClick={props.clicked}>
      <div
        className={styles.PostBody}
        style={{ backgroundImage: `url(${props.image})` }}
      >
        <div className={styles.CategoryContainer}>
          <span className={styles.Category}>{props.category}</span>
        </div>
      </div>
      <div className={styles.Content}>
        <div className={styles.PostTitle}>{props.title}</div>
        <div className={styles.DateName}>
          {props.user} | {date.toDateString()}
        </div>
        <p>
          <i>{props.headline}</i>
        </p>
        {props.body}
      </div>
    </div>
  );
};

export default withRouter(PostSnapshot);
