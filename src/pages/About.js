import React, { useState } from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaPython, FaReact } from "react-icons/fa";
import { SiC } from "react-icons/si";
import "./About.css";
import "./Skills.css";
import "../CardSection.css";

const skillBgColors = {
  html: "#e44d26",
  css: "#1572b6",
  js: "#f7df1e",
  python: "#3776ab",
  c: "#00599c",
  react: "#61dafb",
};

function About() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  // Set background color with opacity when hovering a skill
  const skillSectionStyle = {
    background:
      hoveredSkill && skillBgColors[hoveredSkill]
        ? `${skillBgColors[hoveredSkill]}22` // 22 for light opacity
        : "rgba(34, 172, 24, 0.08)", // default
    transition: "background 0.3s",
  };

  return (
    <div className="about-skills-row">
      {/* About Card */}
      <section className="about-section card-section" aria-labelledby="about-heading">
        <div className="intro">
          <h2 id="about-heading">Hey, I'm Vishnu</h2>
          <p>
            A curious Computer Science student who enjoys coding, building things, and fighting with bugs. Welcome to my digital space.
          </p>
        </div>
      </section>
      {/* Skills Card */}
      <section
        className="skills-section card-section"
        aria-labelledby="skills-heading"
        style={skillSectionStyle}
      >
        <h3 className="skills-title" id="skills-heading">Skills</h3>
        <div className="skills-list">
          <div
            className="skill-box"
            onMouseEnter={() => setHoveredSkill("html")}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            <FaHtml5 className="skill-icon html" />
          </div>
          <div
            className="skill-box"
            onMouseEnter={() => setHoveredSkill("css")}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            <FaCss3Alt className="skill-icon css" />
          </div>
          <div
            className="skill-box"
            onMouseEnter={() => setHoveredSkill("js")}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            <FaJs className="skill-icon js" />
          </div>
          <div
            className="skill-box"
            onMouseEnter={() => setHoveredSkill("python")}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            <FaPython className="skill-icon python" />
          </div>
          <div
            className="skill-box"
            onMouseEnter={() => setHoveredSkill("c")}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            <SiC className="skill-icon c" />
          </div>
          <div
            className="skill-box"
            onMouseEnter={() => setHoveredSkill("react")}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            <FaReact className="skill-icon react" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;