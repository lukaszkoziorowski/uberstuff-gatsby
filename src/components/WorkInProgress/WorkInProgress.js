import React from "react";
import styles from "./WorkInProgress.module.scss";
import { Link } from "gatsby";

const WorkInProgress = () => {
  return (
    <>
      <h1 className={styles.WorkInProgress}>WORK IN PROGRESS</h1>
      <Link className={styles.Link} to="/">
        Back to HomePage
      </Link>
    </>
  );
};

export default WorkInProgress;
