import React, { useState, useEffect } from "react";
import styles from "./AboutLanding.module.css";
import AboutHeadlines from "../../../components/AboutHeadlines/AboutHeadlines";

const AboutLanding = props => {
  let [arrayLength, setArrayLength] = useState(null);
  let [marker, setMarker] = useState(1);
  let [seconds, setSeconds] = useState(500);
  let [index, setIndex] = useState(0);

  // the marker inside the interval is going to always be
  // 1 behind  the marker outside of the interval.

  useEffect(
    () => {
      const interval = setInterval(() => {
        if (marker < arrayLength * 2) {
          setMarker(prevMarker => prevMarker + 1);
        } else {
          setSeconds(500);
          setMarker(1);
        }

        if (marker % 2 === 0) {
          setSeconds(1200);
        } else {
          setSeconds(8000);
          setIndex(prevIndex => prevIndex + 1);
        }
      }, seconds);

      if (marker === 2) {
        setIndex(0);
      }

      return () => clearInterval(interval);
    },
    [marker, seconds, arrayLength]
  );

  const headlinesLength = length => {
    setArrayLength(length);
  };

  let Fade = null;

  if (marker % 2 === 0 && arrayLength !== null) {
    Fade = [styles.Fade, styles.FadeIn];
  }

  return (
    <div className={styles.AboutLanding}>
      <div className={Fade === null ? styles.Fade : Fade.join(" ")}>
        <AboutHeadlines index={index} length={headlinesLength} />
      </div>
    </div>
  );
};

export default AboutLanding;
