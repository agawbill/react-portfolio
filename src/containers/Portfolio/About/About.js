import React from "react";
import styles from "./About.module.css";
import portfoliophoto from "../../../images/portfoliophoto.JPG";

const About = props => {
  let classes = styles.AboutLanding;
  let heading = <h1>About me</h1>;

  if (props.location !== undefined) {
    if (props.location.pathname === "/about") {
      classes = styles.About;
      heading = <h2>About me</h2>;
    }
  }

  return (
    <div className={classes}>
      <div>
        {heading}
        <img src={portfoliophoto} alt="of me" />
        <span>
          <p>
            <b>Values —</b> My values center around hard work, creative problem
            solving, feeding my thirst for knowledge and skill development, and
            forging meaningful, positive relationships with others based on a
            foundation of trust, empathy, and a willingness to listen, learn and
            forego judgment. Ultimately, I plan to use my time and skills to
            work toward resolving the more challenging problems facing our
            society, produce accomplishments that transcend my own self
            interests, and contribute constructively to the well-being of
            others. I feel that computer programming provides me the perfect
            avenue for enacting positive change, while still allowing me the
            space to stay true to my core values.
          </p>
          <p>
            <b>Academia & Career —</b> I have a Bachelor's Degree in Psychology,
            and a Master's Degree in Clinical Health Psychology and Counseling.
            My career history involves helping vulnerable populations like the
            sick and elderly (see my resume). I enjoy and am accustomed to
            environments where I am afforded the opportunity to learn and grow
            as both a self-starter and in collaborative settings. My career and
            academic history have provided me with an acute awareness of the
            basic resources a community requires to keep it sound and vigorous,
            such as the need for affordable and accessible health care for all.
            As a software developer, I envision myself working with companies in
            all fields of industry to make life better for the people they
            serve.
          </p>
        </span>
      </div>
    </div>
  );
};

export default About;
