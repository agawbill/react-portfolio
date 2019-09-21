import React from "react";
import banner from "../../images/banner2.jpeg";
import styles from "./PostSnapshot.module.css";

const PostSnapshot = props => {
  return (
    <div className={styles.PostSnapshot}>
      <div
        className={styles.PostSnapshotImage}
        style={{
          backgroundImage: `url(${banner})`
        }}
      />
      <div className={styles.PostSnapshotIndicator} />
      <div className={styles.PostBody}>
        <h5>Category here</h5>
        <h3>Post title here</h3>
        <span>Post text</span>
        <span className={styles.DateName}>Anthony Gawbill | 11/25/2019</span>
      </div>
    </div>
  );
};

export default PostSnapshot;
