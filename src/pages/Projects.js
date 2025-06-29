import React from "react";
import "./Projects.css";
import "../CardSection.css";

function Projects() {
  return (
    <section className="projects-section card-section" aria-labelledby="projects-title">
      {/* ================= Projects Section ================= */}
      <h2 className="project-title" id="projects-title">Projects</h2>
      <div className="projects-list">
        {/* Project 1 */}
        <div className="project">
          <h3>
            SenseVision Pro
            <a
              className="project-link"
              href="https://github.com/LORDv1shnu/SenseVisionPro"
              target="_blank"
              rel="noopener noreferrer"
              title="Open project"
              style={{ marginLeft: 8, fontSize: "1rem" }}
            >
              ↗
            </a>
          </h3>
          <p>
            A real-time image description app made to assist visually challenged individuals, fully Vibe Coded, uses GIT-Base Local ML Model.
          </p>
        </div>
        {/* Project 2 */}
        <div className="project">
          <h3>
            This Website
            <a
              className="project-link"
              href="https://github.com/LORDv1shnu/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              title="Open project"
              style={{ marginLeft: 8, fontSize: "1rem" }}
            >
              ↗
            </a>
          </h3>
          <p>
            This website was built to show my skills in HTML and CSS, it's a work of proof of sorts.
          </p>
        </div>
        {/* Project 3 */}
        <div className="project">
          <h3>
            AutoWater
            <a
              className="project-link"
              href="https://www.linkedin.com/posts/vishnunandan555_iotinnovation-smartirrigationsystem-automation-activity-7274459985764401153-sPL7?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFNxrecB2zr2BFDXeee9RhRJJYkfkZNLnWY"
              target="_blank"
              rel="noopener noreferrer"
              title="Open project"
              style={{ marginLeft: 8, fontSize: "1rem" }}
            >
              ↗
            </a>
          </h3>
          <p>
            Automatic Water Irrigation system using ESP32 and various sensors, made with help of AI.
          </p>
        </div>
        {/* Project 4 */}
        <div className="project">
          <h3>
            Hotel Room Booking System
            <a
              className="project-link"
              href="https://github.com/LORDv1shnu/hotel-room-booking"
              target="_blank"
              rel="noopener noreferrer"
              title="Open project"
              style={{ marginLeft: 8, fontSize: "1rem" }}
            >
              ↗
            </a>
          </h3>
          <p>
           A full-stack hotel room booking system built with React (frontend) and Django REST API (backend using MySQL). Ideal for learning full-stack app architecture.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Projects;