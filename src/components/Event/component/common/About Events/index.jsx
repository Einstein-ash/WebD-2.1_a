import React from "react";
import "./aboutevents.css";
const About = (props) => {
  return (
    <div className="about-wrapper">
      <div className="max-width about">
        <div className="about-title">{props.heading}</div>
        <div className="about-content">{props.content}</div>
      </div>
    </div>
  );
};

export default About;
