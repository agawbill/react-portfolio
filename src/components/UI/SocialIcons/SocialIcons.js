import React from "react";
import styles from "./SocialIcons.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faGithub,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

const SocialIcons = props => {
  const onClickHandler = type => {
    switch (type) {
      case "facebook":
        window.open("https://www.facebook.com/anthony.gawbill", "_blank");
        break;

      case "twitter":
        window.open("https://twitter.com/gawthegovernor", "_blank");
        break;

      case "github":
        window.open("https://www.github.com/agawbill", "_blank");
        break;

      case "linkedin":
        window.open(
          "https://www.linkedin.com/in/anthony-gawbill-78673042/",
          "_blank"
        );
        break;
      case "email":
        window.open("mailto:anthonyga@pcom.edu", "_blank");
        break;

      default:
        break;
    }
  };

  return (
    <div className={styles.SocialIcons}>
      <FontAwesomeIcon
        icon={faFacebook}
        size={props.size}
        style={{ color: "#3b5998" }}
        onClick={() => onClickHandler("facebook")}
      />

      <FontAwesomeIcon
        icon={faTwitter}
        size={props.size}
        style={{ color: "#1da1f2" }}
        onClick={() => onClickHandler("twitter")}
      />
      <FontAwesomeIcon
        icon={faGithub}
        size={props.size}
        style={{ color: "#211f1f" }}
        onClick={() => onClickHandler("github")}
      />
      <FontAwesomeIcon
        icon={faEnvelope}
        size={props.size}
        style={{ color: "red" }}
        onClick={() => onClickHandler("email")}
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

export default SocialIcons;
