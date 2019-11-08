import React from "react";
import { withRouter } from "react-router-dom";
import styles from "./ProjectSnapshot.module.css";

const ProjectSnapshot = props => {
  let classes = [styles.ProjectSnapshot, styles.WidthLanding];
  if (props.location !== undefined) {
    if (props.location.pathname === "/projects") {
      classes = [styles.ProjectSnapshot, styles.WidthProjects];
    }
  }
  return (
    <div className={classes.join(" ")} onClick={props.clicked}>
      <div className={styles.ProjectSnapshotIndicator} />
      <div
        className={styles.ProjectBody}
        style={{ backgroundImage: `url(${props.image})` }}
      >
        <div className={styles.ProjectTitleText}>
          <span>{props.title}</span>
        </div>

        <div className={styles.ProjectDescText}>
          <span>
            {props.body.substring(0, 100)}
            ...
          </span>
        </div>
      </div>
    </div>
  );
};

export default withRouter(ProjectSnapshot);
