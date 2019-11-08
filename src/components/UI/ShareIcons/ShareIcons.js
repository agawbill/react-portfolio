import React from "react";
import styles from "./ShareIcons.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookSquare,
  faTwitterSquare,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

const ShareIcons = props => {
  const onClickHandler = type => {
    switch (type) {
      case "facebook":
        window.open("https://www.facebook.com/agawbill", "_blank");
        break;

      case "twitter":
        window.open(
          `http://twitter.com/share?text=Check out this post!&url=${window.location.href}`,
          "_blank"
        );
        break;

      case "linkedin":
        window.open("https://www.linkedin.com/agawbill", "_blank");
        break;
      case "email":
        window.open("mailto:anthonyga@pcom.edu", "_blank");
        break;

      default:
        break;
    }
  };

  return (
    <div className={styles.ShareIcons}>
      <FontAwesomeIcon
        icon={faEnvelope}
        size={props.size}
        style={{ color: "red" }}
        onClick={() => onClickHandler("email")}
      />
      <FontAwesomeIcon
        icon={faFacebookSquare}
        size={props.size}
        style={{ color: "#3b5998" }}
        onClick={() => onClickHandler("facebook")}
      />

      <FontAwesomeIcon
        icon={faTwitterSquare}
        size={props.size}
        style={{ color: "#1da1f2" }}
        onClick={() => onClickHandler("twitter")}
      />
      <FontAwesomeIcon
        icon={faLinkedin}
        size={props.size}
        style={{ color: "#0e76a8" }}
        onClick={() => onClickHandler("linkedin")}
      />
    </div>
  );
};

export default ShareIcons;
