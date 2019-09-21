import React from "react";
import banner from "../../images/banner2.jpeg";
import styles from "./ProjectSnapshot.module.css";

const ProjectSnapshot = props => {
  return (
    <div className={styles.ProjectSnapshot}>
      <div className={styles.ProjectSnapshotIndicator} />
      <div
        className={styles.ProjectBody}
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className={styles.ProjectTitleText}>
          <span>Movies&Things</span>
        </div>

        <div className={styles.ProjectDescText}>
          <span>Birds eat to live. So do Skesies!</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectSnapshot;
