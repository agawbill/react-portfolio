import React from "react";
import ReactMarkdown from "react-markdown";
import styles from "./PostSnapshot.module.css";
import { withRouter } from "react-router-dom";

const PostSnapshot = props => {
  const date = new Date(props.dateCreated);
  let classes = [styles.PostSnapshot];
  if (props.location !== undefined) {
    if (props.location.pathname === "/blog") {
      classes = [
        styles.PostSnapshot,
        styles.PostWidth,
        styles.AddMargin,
        styles.NoPadding
      ];
    }
  }

  const body = count => {
    const newBody = props.body.split(" ");
    if (newBody.length < count) {
      return newBody.join(" ");
    }
    const lastEl = newBody[count - 1].split("").slice(-1)[0];
    const punctuation = [".", "!", ",", "?", ";"];
    if (punctuation.indexOf(lastEl) !== -1) {
      return `${newBody.slice(0, count + 1).join(" ")}...`;
    }
    return `${newBody.slice(0, count).join(" ")}...`;
  };

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
        {body(25)}
      </div>
    </div>
  );
};

export default withRouter(PostSnapshot);
