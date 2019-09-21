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
  return (
    <div className={styles.SocialIcons}>
      <FontAwesomeIcon
        icon={faFacebook}
        size={props.size}
        style={{ color: "#3b5998" }}
      />

      <FontAwesomeIcon
        icon={faTwitter}
        size={props.size}
        style={{ color: "#1da1f2" }}
      />
      <FontAwesomeIcon
        icon={faGithub}
        size={props.size}
        style={{ color: "#211f1f" }}
      />
      <FontAwesomeIcon
        icon={faEnvelope}
        size={props.size}
        style={{ color: "red" }}
      />
      <FontAwesomeIcon
        icon={faLinkedin}
        size={props.size}
        style={{ color: "#0e76a8" }}
      />
    </div>
  );
};

export default SocialIcons;
