import React, { useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./Contact.css";

export default function Contact() {
  return (
    <div className="container contact-container">
      <div className="triangle-container">
        <div id="projects-triangle-bottomright"></div>
        <div id="projects-triangle-bottomright-accent"></div>
        <div id="projects-triangle-topright-accent"></div>
        <div id="projects-triangle-topright"></div>
        <div id="projects-triangle-topleft"></div>
        <div id="projects-triangle-topleft-accent"></div>
      </div>
      <h1>Contact</h1>
    </div>
  );
}
