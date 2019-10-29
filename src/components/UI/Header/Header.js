import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileSignature,
  faAddressCard,
  faBlog,
  faProjectDiagram
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Header.module.css";

const Header = props => {
  let headerBody = null;

  switch (props.type) {
    case "about me":
      headerBody = (
        <>
          <span className={styles.Icon}>
            <FontAwesomeIcon icon={faAddressCard} size="1x" />
          </span>

          <span className={styles.Header2}>{props.title}</span>
        </>
      );
      break;
    case "contact":
      headerBody = (
        <>
          <span className={styles.Icon}>
            <FontAwesomeIcon icon={faFileSignature} size="1x" />
          </span>
          <span className={styles.Header2}>{props.title}</span>
        </>
      );
      break;
    case "latest posts":
      headerBody = (
        <>
          <span className={styles.Icon}>
            <FontAwesomeIcon icon={faBlog} size="1x" />
          </span>
          <span className={styles.Header2}>{props.title}</span>
        </>
      );
      break;
    case "latest projects":
      headerBody = (
        <>
          <span className={styles.Icon}>
            <FontAwesomeIcon icon={faProjectDiagram} size="1x" />
          </span>
          <span className={styles.Header2}>{props.title}</span>
        </>
      );
      break;
    case "projects":
      headerBody = (
        <>
          <span className={styles.Icon}>
            <FontAwesomeIcon icon={faProjectDiagram} size="1x" />
          </span>
          <span className={styles.Header2}>{props.title}</span>
        </>
      );
      break;
    case "blogs":
      headerBody = (
        <>
          <span className={styles.Icon}>
            <FontAwesomeIcon icon={faBlog} size="1x" />
          </span>
          <span className={styles.Header2}>{props.title}</span>
        </>
      );
      break;

    default:
      headerBody = null;
  }

  return <div className={styles.Header}>{headerBody}</div>;
};

export default Header;
