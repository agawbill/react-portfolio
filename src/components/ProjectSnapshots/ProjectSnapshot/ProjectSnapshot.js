import React from "react";
import { withRouter } from "react-router-dom";
import styles from "./ProjectSnapshot.module.css";

const ProjectSnapshot = props => {
  // let wrapperClass = null;
  let classes = [styles.ProjectSnapshot];
  if (props.location !== undefined) {
    if (props.location.pathname === "/projects") {
      classes = [styles.ProjectSnapshot, styles.ProjectWidth, styles.AddMargin];
    }
  }

  const body = count => {
    const newBody = props.body.split(" ");
    if (newBody.length < count) {
      return newBody.join(" ");
    }
    const lastEl = newBody[count - 1].split("").slice(-1)[0];
    const punctuation = [".", "!", ",", "?", ";", ":", "&"];
    if (punctuation.indexOf(lastEl) !== -1) {
      return `${newBody.slice(0, count + 1).join(" ")}...`;
    }
    return `${newBody.slice(0, count).join(" ")}...`;
  };

  return (
    <div className={classes.join(" ")} onClick={props.clicked}>
      <div
        className={styles.ProjectBody}
        style={{ backgroundImage: `url(${props.image})` }}
      >
        <div className={styles.CategoryContainer}>
          <span className={styles.Category}>{props.category}</span>
        </div>
      </div>
      <div className={styles.Content}>
        <div className={styles.ProjectTitle}>{props.title}</div>
        {body(40)}
      </div>
    </div>
  );
};

export default withRouter(ProjectSnapshot);
