import React, { useState } from "react";
import "./Projects.css";

interface ProjectStyle extends React.CSSProperties {
  "--i": string;
}

export default function Frontend(props: any) {
  const {
    screenWidth,
    expandedTile,
    expandTile,
    appleImgs,
    airBnbNewsImgs,
    newsWeekImgs,
    airBnbFrontendImgs,
    resetImgs,
  } = props;

  const visitSite = (num: string) => {
    let url = "";
    switch (num) {
      case "1":
        url = "https://trusting-swirles-c46c81.netlify.app/";
        break;
      case "2":
        url = "https://zen-jang-c45a43.netlify.app/";
        break;
      case "3":
        url =
          "https://645c288d2938fa1c3429ef57--endearing-otter-26c1ed.netlify.app/";
        break;
      default:
        url = "https://practical-sammet-ad0cb7.netlify.app/";
    }
    window.open(url, "_blank");
  };

  return (
    <div
      className={`col-md-4 projects 
  ${screenWidth < 768 ? "row" : ""}
  }`}
    >
      <div
        key={1}
        style={{ "--i": "1" } as ProjectStyle}
        onClick={() => expandTile(1)}
        className={`col-md-4 project-col mx-1 tile 
    ${
      expandedTile === 1
        ? "expanded"
        : expandedTile === 0
        ? "project-tile"
        : "d-none"
    }`}
      >
        <div className="tile-triangle-topright"></div>
        <div className="tile-triangle-topright-accent"></div>
        <div className="tile-triangle-bottomleft"></div>
        <div className="tile-triangle-bottomleft-accent"></div>
        <div className="text-container">
          <h3 className="preview-project-title">AirBnb Newsroom</h3>
          <p className="preview-project-description">
            Responsive AirBnb News website clone
          </p>
          <div className="preview-technologies-container">
            <li className="preview-technologies-title">Technologies:</li>
            <li>React</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Bootstrap</li>
          </div>
        </div>
        {expandedTile === 1 && (
          <div>
            <div className="row expanded-project-row">
              <div className="col-md-7 project-img-container">
                <h3 className="expanded-project-title">AirBnb Newsroom</h3>
                <img
                  className="project-img img-fluid"
                  src={airBnbNewsImgs}
                  alt="project-1-screenshot"
                  onClick={() => visitSite("1")}
                />
              </div>
              <div className="col-md-5 project-description-container">
                <h3 className="project-description-header">
                  Project Description
                </h3>
                <p className="project-description">
                  The Airbnb news website clone is a frontend project that was
                  built using HTML, CSS, and Bootstrap. The website features a
                  top news story section that showcases the most important news
                  article of the day. Additionally, there are multiple
                  grid-based sections that highlight the latest news articles
                  and provide links to various social media platforms. The
                  design includes carefully crafted grids created using
                  Bootstrap to provide a consistent and intuitive user
                  experience. The picture reel section, news categories section,
                  sign up for newsletter section, and footer sections are all
                  designed using Bootstrap grids to ensure that they display
                  optimally on different devices. The website's goal is to
                  provide users with a clean and straightforward way to stay
                  up-to-date with Airbnb news. The responsive design ensures
                  that users can access the website from their desktop, tablet,
                  or smartphone with ease.
                </p>
              </div>
            </div>
            <div className="expanded-controls">
              <a
                className="expanded-button expanded-link"
                href="https://trusting-swirles-c46c81.netlify.app/"
                target="blank"
              >
                Live Site
              </a>
              <a
                className="expanded-link"
                href="https://github.com/JordanReady"
                target="blank"
              >
                Github
              </a>
              <button
                className="expanded-button"
                onClick={() => {
                  resetImgs();
                }}
              >
                back
              </button>
            </div>
          </div>
        )}
      </div>

      <div
        key={2}
        style={{ "--i": "2" } as ProjectStyle}
        onClick={() => expandTile(2)}
        className={`col-md-4 mx-1 tile ${
          expandedTile === 2
            ? "expanded"
            : expandedTile === 0
            ? "project-tile"
            : "d-none"
        } `}
      >
        <div className="tile-triangle-topright"></div>
        <div className="tile-triangle-topright-accent"></div>
        <div className="tile-triangle-bottomleft"></div>
        <div className="tile-triangle-bottomleft-accent"></div>
        <div className="text-container">
          <h3 className="preview-project-title">NewsWeek Clone</h3>
          <p className="preview-project-description">
            Responsive NewsWeek website clone
          </p>
          <div className="preview-technologies-container">
            <li className="preview-technologies-title">Technologies:</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Bootstrap</li>
          </div>
        </div>
        {expandedTile === 2 && (
          <div>
            <div className="row expanded-project-row">
              <div className="col-md-7 project-img-container">
                <h3 className="expanded-project-title">NewsWeek Clone</h3>
                <img
                  className="project-img img-fluid"
                  src={newsWeekImgs}
                  alt="project-1-screenshot"
                  onClick={() => visitSite("2")}
                />
              </div>
              <div className="col-md-5 project-description-container">
                <h3 className="project-description-header">
                  Project Description
                </h3>
                <p className="project-description">
                  This project is a responsive clone of the popular news
                  magazine website, Newsweek. It was built using HTML, CSS, and
                  Bootstrap to recreate the sleek and modern look of the
                  original site. The homepage features a dynamic layout with a
                  top headline and a scrolling carousel of other top stories.
                  Below that, there are various sections for news categories,
                  such as politics, world news, technology, and entertainment,
                  each with its own grid of articles. The site is fully
                  responsive, with optimized layouts for mobile, tablet, and
                  desktop screens. The navigation menu collapses into a
                  hamburger menu on smaller screens, and the article grids
                  adjust their size and layout to fit the screen.
                </p>
              </div>
            </div>
            <div className="expanded-controls">
              <a
                className="expanded-button expanded-link"
                href="https://zen-jang-c45a43.netlify.app/#"
                target="blank"
              >
                Live Site
              </a>
              <a
                className="expanded-link"
                href="https://github.com/JordanReady"
                target="blank"
              >
                Github
              </a>
              <button
                className="expanded-button"
                onClick={() => {
                  resetImgs();
                }}
              >
                back
              </button>
            </div>
          </div>
        )}
      </div>
      <div
        key={3}
        style={{ "--i": "3" } as ProjectStyle}
        onClick={() => expandTile(3)}
        className={`col-md-4 mx-1 twitter-title tile ${
          expandedTile === 3
            ? "expanded"
            : expandedTile === 0
            ? "project-tile"
            : "d-none"
        } `}
      >
        <div className="tile-triangle-topright"></div>
        <div className="tile-triangle-topright-accent"></div>
        <div className="tile-triangle-bottomleft"></div>
        <div className="tile-triangle-bottomleft-accent"></div>
        <div className="text-container">
          <h3 className="preview-project-title">Booking Website Clone</h3>
          <p className="preview-project-description">
            AirBnb booking website clone
          </p>
          <div className="preview-technologies-container">
            <li className="preview-technologies-title">Technologies:</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Bootstrap</li>
          </div>
        </div>
        {expandedTile === 3 && (
          <div>
            <div className="row expanded-project-row">
              <div className="col-md-7 project-img-container">
                <h3 className="expanded-project-title">AirBnb Website Clone</h3>
                <img
                  className="project-img img-fluid"
                  src={airBnbFrontendImgs}
                  alt="project-1-screenshot"
                  onClick={() => visitSite("3")}
                />
              </div>
              <div className="col-md-5 project-description-container">
                <h3 className="project-description-header">
                  Project Description
                </h3>
                <p className="project-description">
                  This project is a clone of the Airbnb website's frontend,
                  built using HTML, CSS, and Bootstrap. The site includes a
                  user-friendly booking homes form, an engaging customer reviews
                  section, and a homes available with top rated experiences
                  section to help users find the best possible accommodations.
                  These sections utilize bootstrap colomns and rows to create a
                  responsive grid layout that adjusts to fit the screen size.
                  The site also includes a footer with links to useful
                  information and social media icons.
                </p>
              </div>
            </div>
            <div className="expanded-controls">
              <a
                className="expanded-button expanded-link"
                href="https://645c288d2938fa1c3429ef57--endearing-otter-26c1ed.netlify.app/"
                target="blank"
              >
                Live Site
              </a>
              <a
                className="expanded-link"
                href="https://github.com/JordanReady"
                target="blank"
              >
                Github
              </a>
              <button
                className="expanded-button"
                onClick={() => {
                  resetImgs();
                }}
              >
                back
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
