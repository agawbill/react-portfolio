import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileSignature,
  faAddressCard,
  faBlog,
  faProjectDiagram
} from "@fortawesome/free-solid-svg-icons";
import projectHeader from "../../../images/projectHeader2.png";
import postHeader from "../../../images/postHeader.png";
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
        <div
          style={{
            paddingTop: "35px",
            paddingBottom: "20px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            height: "200px",
            maxHeight: "100%",
            backgroundSize: "100% 100%",
            backgroundImage: `url(${projectHeader})`,
            lineHeight: "140px",
            marginTop: "29px",
            marginBottom: "29px"
          }}
        >
          <span className={styles.Icon}>
            <FontAwesomeIcon icon={faBlog} size="1x" />
          </span>
          <span className={styles.Header4}>{props.title}</span>
        </div>
      );
      break;
    case "latest projects":
      headerBody = (
        <div
          style={{
            paddingTop: "35px",
            paddingBottom: "20px",
            backgroundRepeat: "no-repeat",

            backgroundPosition: "center",
            height: "200px",
            maxHeight: "100%",
            // width: "100%",
            backgroundSize: "100% 100%",
            backgroundImage: `url(${projectHeader})`,
            lineHeight: "140px",
            marginTop: "29px",
            marginBottom: "29px"
          }}
        >
          <span className={styles.Icon}>
            <FontAwesomeIcon icon={faProjectDiagram} size="1x" />
          </span>
          <span className={styles.Header3}>{props.title}</span>
        </div>
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
