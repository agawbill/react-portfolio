import React from "react";
import { withRouter } from "react-router-dom";
import styles from "./ProjectSnapshot.module.css";

const ProjectSnapshot = props => {
  let wrapperClass = null;
  let classes = [styles.ProjectSnapshot, styles.WidthLanding];
  if (props.location !== undefined) {
    if (props.location.pathname === "/projects") {
      wrapperClass = styles.Wrapper;
      classes = [styles.ProjectSnapshot, styles.WidthProjects];
    }
  }
  return (
    <div className={wrapperClass}>
      <div className={classes.join(" ")} onClick={props.clicked}>
        <div className={styles.ProjectSnapshotIndicator} />
        <div
          className={styles.ProjectBody}
          style={{ backgroundImage: `url(${props.image})` }}
        >
          <div className={styles.ProjectTitleContainer}>
            <span className={styles.ProjectTitleText}>{props.title}</span>
            <br />
            <span className={styles.ProjectDescText}>
              {props.body.substring(0, 100)}
              ...
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(ProjectSnapshot);
