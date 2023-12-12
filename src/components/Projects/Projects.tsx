import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./Projects.css";
import Frontend from "./frontend";
import Fullstack from "./fullstack";
import Freelance from "./freelance";

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
    switch (e.target.id) {
      case "fullstack":
        setProjectType("fullstack");
        break;
      case "frontend":
        setProjectType("frontend");
        break;
      case "freelance":
        setProjectType("freelance");
        break;
      default:
        // Handle any other cases or set a default project type
        break;
    }

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
          <button
            id="freelance"
            className={`btn project-btn ${
              projectType === "freelance" ? "active-project-btn" : ""
            }`}
            onClick={handleProjectType}
          >
            Freelance
          </button>
        </div>
        {(() => {
          switch (projectType) {
            case "fullstack":
              return (
                <Fullstack
                  screenWidth={screenWidth}
                  expandedTile={expandedTile}
                  expandTile={expandTile}
                />
              );
            case "frontend":
              return (
                <Frontend
                  screenWidth={screenWidth}
                  expandedTile={expandedTile}
                  expandTile={expandTile}
                />
              );
            case "freelance":
              // Add your Freelance component here if available
              return (
                <Freelance
                  screenWidth={screenWidth}
                  expandedTile={expandedTile}
                  expandTile={expandTile}
                />
              );
            default:
              // Handle any other cases or set a default component
              return (
                <Fullstack
                  screenWidth={screenWidth}
                  expandedTile={expandedTile}
                  expandTile={expandTile}
                />
              );
          }
        })()}
      </div>
    </div>
  );
}
