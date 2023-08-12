import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./Projects.css";
import Frontend from "./frontend";
import Fullstack from "./fullstack";

export default function Projects() {
  const [expandedTile, setExpandedTile] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [projectType, setProjectType] = useState("fullstack");

  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenWidth(window.innerWidth);
    });
  }, []);

  function expandTile(key: number) {
    if (expandedTile === key) {
      setExpandedTile(0);
    } else setExpandedTile(key);
  }

  function handleProjectType(e: any) {
    if (e.target.id === "fullstack") {
      setProjectType("fullstack");
    } else setProjectType("frontend");
    console.log(projectType);
  }

  return (
    <div className="container projects-container">
      <div className="triangle-container">
        <div id="projects-triangle-bottomright"></div>
        <div id="projects-triangle-bottomright-accent"></div>
        <div id="projects-triangle-topright-accent"></div>
        <div id="projects-triangle-topright"></div>
        <div id="projects-triangle-topleft"></div>
        <div id="projects-triangle-topleft-accent"></div>
      </div>
      <div className="projects-inner-container">
        <div
          className={`project-type-btn-container ${
            expandedTile >= 1 ? "d-none" : ""
          } `}
        >
          <button
            id="fullstack"
            className={`btn project-btn ${
              projectType === "fullstack" ? "active-project-btn" : ""
            }`}
            onClick={handleProjectType}
          >
            Full-Stack
          </button>
          <button
            id="frontend"
            className={`btn project-btn ${
              projectType === "frontend" ? "active-project-btn" : ""
            }`}
            onClick={handleProjectType}
          >
            Front-End
          </button>
        </div>
        {projectType === "fullstack" ? (
          <Fullstack
            screenWidth={screenWidth}
            expandedTile={expandedTile}
            expandTile={expandTile}
          />
        ) : (
          <Frontend
            screenWidth={screenWidth}
            expandedTile={expandedTile}
            expandTile={expandTile}
          />
        )}
      </div>
    </div>
  );
}
