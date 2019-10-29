import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "./AboutLanding.module.css";
import ReactMarkdown from "react-markdown";
import Header from "../../../components/UI/Header/Header";
import Spinner from "../../../components/UI/Spinner/Spinner";

const AboutLanding = props => {
  let [marker, setMarker] = useState(1);
  let [seconds, setSeconds] = useState(1000);

  let firstFade;
  let secondFade;
  let thirdFade;
  let fourthFade;

  useEffect(() => {
    const interval = setInterval(() => {
      if (marker < 8) {
        if (marker % 2 === 0) {
          setSeconds(1700);
        } else {
          setSeconds(8000);
        }
        setMarker(prevMarker => prevMarker + 1);
      } else {
        setSeconds(1000);
        setMarker(1);
      }
    }, seconds);

    return () => clearInterval(interval);
  }, [marker, seconds]);

  if (marker === 2) {
    firstFade = [styles.Fade, styles.FadeIn];
  } else if (marker === 4) {
    secondFade = [styles.Fade, styles.FadeIn];
  } else if (marker === 6) {
    thirdFade = [styles.Fade, styles.FadeIn];
  } else if (marker === 8) {
    fourthFade = [styles.Fade, styles.FadeIn];
  }

  return (
    <div className={styles.AboutLanding}>
      <div className={styles.AboutLandingContainer}>
        <span>
          <img src={props.imageUrl} align="left" alt="portrain of me" />
          <div
            className={
              Array.isArray(firstFade) ? firstFade.join(" ") : styles.Fade
            }
          >
            My values center around hard work, creative problem solving, feeding
            my thirst for knowledge and skill development, and forging
            meaningful, positive relationships with others based on a foundation
            of trust, empathy, and a willingness to listen, learn and forego
            judgment.
          </div>
          <div
            className={
              Array.isArray(secondFade) ? secondFade.join(" ") : styles.Fade
            }
          >
            Ultimately, I plan to use my time and skills to work toward
            resolving the more challenging problems facing our society, produce
            accomplishments that transcend my own self interests, and contribute
            constructively to the well-being of others.
          </div>
          <div
            className={
              Array.isArray(thirdFade) ? thirdFade.join(" ") : styles.Fade
            }
          >
            I have a Bachelor's Degree in Psychology, and a Master's Degree in
            Clinical Health Psychology and Counseling. My career history
            involves helping vulnerable populations like the sick and elderly
            (see my resume).
          </div>
          <div
            className={
              Array.isArray(fourthFade) ? fourthFade.join(" ") : styles.Fade
            }
          >
            I enjoy and am accustomed to environments where I am afforded the
            opportunity to learn and grow as both a self-starter and in
            collaborative settings.
          </div>
        </span>
      </div>
    </div>
  );
};

export default AboutLanding;
