import React from "react";
import Backdrop from "../UI/Backdrop/Backdrop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
  faTimes
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Viewer.module.css";

const Viewer = props => {
  return (
    <div className={styles.Viewer}>
      <Backdrop open={props.open} close={props.close} />
      <div
        className={styles.ViewerImage}
        style={{ backgroundImage: `url(${props.image})` }}
      />
      <FontAwesomeIcon
        className={styles.ViewerNext}
        icon={faChevronRight}
        size="2x"
        onClick={props.next}
      />
      <FontAwesomeIcon
        className={styles.ViewerPrev}
        icon={faChevronLeft}
        size="2x"
        onClick={props.previous}
      />
      <FontAwesomeIcon
        className={styles.ViewerExit}
        icon={faTimes}
        size="3x"
        onClick={props.close}
      />
    </div>
  );
};

export default Viewer;
