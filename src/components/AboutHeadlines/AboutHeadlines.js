import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

const AboutHeadlines = props => {
  const headlines = [
    <span>
      <img src={props.imageUrl} align="left" alt="portrait of me" />{" "}
      <strong>
        <i>Hi! </i>
      </strong>
      My name is
      <strong>
        <i> Anthony Gawbill</i>
      </strong>
      ...
      <br />
      Here's a little about what{" "}
      <strong>
        <i>motivates</i>
      </strong>{" "}
      me, my{" "}
      <strong>
        <i>achievements</i>
      </strong>
      , and what I{" "}
      <strong>
        <i>value</i>
      </strong>
      ...
    </span>,
    <span>
      My values center around{" "}
      <strong>
        <i>hard work</i>
      </strong>
      , creative{" "}
      <strong>
        <i>problem solving</i>
      </strong>
      , feeding my{" "}
      <strong>
        <i>thirst for knowledge </i>
      </strong>
      and{" "}
      <strong>
        <i>skill development</i>
      </strong>
      , and forging meaningful{" "}
      <strong>
        <i>relationships </i>
      </strong>
      with others based on a foundation of{" "}
      <strong>
        <i>trust</i>
      </strong>
      ,{" "}
      <strong>
        <i>empathy</i>
      </strong>
      , and a willingness to{" "}
      <strong>
        <i>listen</i>
      </strong>
      ,{" "}
      <strong>
        <i>learn </i>
      </strong>
      and forego judgment.
    </span>,
    <span>
      Ultimately, I plan to use my{" "}
      <strong>
        <i>time and skills</i>
      </strong>{" "}
      to work toward{" "}
      <strong>
        <i>resolving</i>
      </strong>{" "}
      the more{" "}
      <strong>
        <i>challenging problems</i>
      </strong>{" "}
      facing our society, produce{" "}
      <strong>
        <i>accomplishments </i>
      </strong>
      that{" "}
      <strong>
        <i>transcend my own self interests</i>
      </strong>
      , and contribute{" "}
      <strong>
        <i>constructively</i>
      </strong>{" "}
      to the
      <strong>
        <i> well-being of others</i>
      </strong>
      .
    </span>,
    <span>
      I have a{" "}
      <strong>
        <i>Bachelor's Degree </i>
      </strong>{" "}
      in Psychology, and a{" "}
      <strong>
        <i>Master's Degree</i>
      </strong>{" "}
      in Clinical Health Psychology and Counseling. My career history involves
      <strong>
        <i> helping vulnerable populations </i>
      </strong>
      like the{" "}
      <strong>
        <i>sick</i>
      </strong>{" "}
      and{" "}
      <strong>
        <i>elderly </i>
      </strong>
      (see my resume).
    </span>,
    <span>
      I{" "}
      <strong>
        <i>enjoy </i>
      </strong>{" "}
      and am{" "}
      <strong>
        <i>accustomed to environments </i>
      </strong>
      where I am afforded the opportunity to{" "}
      <strong>
        <i>learn</i>
      </strong>{" "}
      and{" "}
      <strong>
        <i>grow </i>
      </strong>
      as both a{" "}
      <strong>
        <i>self-starter </i>
      </strong>
      and in{" "}
      <strong>
        <i>collaborative settings</i>
      </strong>
      .
    </span>,
    <span>
      <center>
        <strong>
          <i>Thank you! </i>
        </strong>
        If you would like to read more about me,{" "}
        <b>
          <NavLink to="/about">click here</NavLink>
        </b>
        !
      </center>
    </span>
  ];

  useEffect(() => {
    props.length(headlines.length);
  }, [props, headlines.length]);

  return <>{headlines[props.index]}</>;
};

export default AboutHeadlines;
