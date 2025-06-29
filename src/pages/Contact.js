import React from "react";
import "./Contact.css";
import "../CardSection.css";

function Contact() {
  return (
    <section
      className="contact-section card-section"
      aria-labelledby="contact-heading"
    >
      {/* ================= Contact Section ================= */}
      <h2 id="contact-heading">Let's Connect :D</h2>
      <div className="contact-content">
        <p>
          Reach out via email at{" "}
          <a href="mailto:vishnunandan555@gmail.com" className="email">
            vishnunandan555@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
}

export default Contact;