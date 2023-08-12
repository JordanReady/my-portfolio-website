import React, { useState, useEffect } from "react";
import "./Projects.css";

interface ProjectTileProps {
  id: number;
  expandedTile: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  images: string[];
  resetImgs: () => void;
  githubLink: string;
  siteLink: string;
}

const ProjectTile: React.FC<ProjectTileProps> = ({
  id,
  expandedTile,
  title,
  description,
  longDescription,
  technologies,
  images,
  resetImgs,
  githubLink,
  siteLink,
}) => {
  const [expanded, setExpanded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
      setTimeout(() => {
        setIsAnimating(false);
      }, 500); // Duration of animation
    }, 3000);

    return () => clearInterval(interval);
  }, [expandedTile, images]);

  const handleExpand = () => {
    setExpanded(!expanded);
    resetImgs();
  };

  return (
    <div
      key={id}
      onClick={handleExpand}
      className={`col-md-4 project-col mx-1 tile ${
        expanded
          ? "expanded expanded-enter-active"
          : "project-tile expanded-leave-active"
      }`}
    >
      <div className="tile-triangle-topright"></div>
      <div className="tile-triangle-topright-accent"></div>
      <div className="tile-triangle-bottomleft"></div>
      <div className="tile-triangle-bottomleft-accent"></div>
      <div className="text-container">
        <h3 className="preview-project-title">{title}</h3>
        <p className="preview-project-description">{description}</p>
        <div className="preview-technologies-container">
          <li className="preview-technologies-title">Technologies:</li>
          {technologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </div>
      </div>
      {expanded && (
        <div>
          <div className="row expanded-project-row">
            <div className="col-md-7 project-img-container">
              {images.map((image, index) => (
                <img
                  key={index}
                  className={`project-img img-fluid ${
                    index === currentImageIndex ? "visible" : ""
                  } ${isAnimating ? "fade-in" : ""}`}
                  src={image}
                  alt={`project-${index + 1}-screenshot`}
                  style={{ zIndex: index === currentImageIndex ? 1 : 0 }} // Control stacking order
                  onClick={() => window.open(siteLink, "_blank")}
                />
              ))}
            </div>
            <div className="col-md-5 project-description-container">
              <h3 className="project-description-header">
                Project Description
              </h3>
              <section className="description-section">
                <p className="project-description">{longDescription}</p>
              </section>
            </div>
          </div>
          <div className="expanded-controls">
            <button
              className="expanded-button live-site"
              onClick={() => window.open(siteLink, "_blank")}
            >
              Live Site
            </button>
            <a className="expanded-link" href={githubLink} target="blank">
              Github
            </a>
            <button className="expanded-button" onClick={handleExpand}>
              Back
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectTile;
