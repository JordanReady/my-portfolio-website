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
  } = props;

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
        <div className="chess-title">
          <h3 className="preview-project-title">AirBnb News Clone</h3>
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
                <h3 className="expanded-project-title">AirBnb News Clone</h3>
                <img
                  className="project-img img-fluid"
                  src={airBnbNewsImgs}
                  alt="project-1-screenshot"
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
                  or smartphone with ease. Overall, this project demonstrates
                  the developer's ability to use Bootstrap to create a visually
                  appealing and functional website that provides a positive user
                  experience.
                </p>
              </div>
            </div>
            <div className="expanded-controls">
              <a
                className="expanded-button"
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
              <button className="expanded-button">back</button>
            </div>
          </div>
        )}
      </div>
      <div
        key={2}
        style={{ "--i": "2" } as ProjectStyle}
        onClick={() => expandTile(2)}
        className={`col-md-4 mx-1 tile airbnb-title ${
          expandedTile === 2
            ? "expanded"
            : expandedTile === 0
            ? "project-tile"
            : "d-none"
        } `}
      >
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
        {expandedTile === 2 && (
          <div>
            <div className="row expanded-project-row">
              <div className="col-md-7 project-img-container">
                <h3 className="expanded-project-title">NewsWeek Clone</h3>
                <img
                  className="project-img img-fluid"
                  src={newsWeekImgs}
                  alt="project-1-screenshot"
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
                className="expanded-button"
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
              <button className="expanded-button">back</button>
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
        <h3 className="preview-project-title">Apple Landing Page Clone</h3>
        <p className="preview-project-description">
          My very first HTML and CSS project
        </p>
        <div className="preview-technologies-container">
          <li className="preview-technologies-title">Technologies:</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Bootstrap</li>
        </div>
        {expandedTile === 3 && (
          <div>
            <div className="row expanded-project-row">
              <div className="col-md-7 project-img-container">
                <h3 className="expanded-project-title">
                  Apple Landing Page Clone
                </h3>
                <img
                  className="project-img img-fluid"
                  src={appleImgs}
                  alt="project-1-screenshot"
                />
              </div>
              <div className="col-md-5 project-description-container">
                <h3 className="project-description-header">
                  Project Description
                </h3>
                <p className="project-description">
                  The landing page includes a hero section with a prominent
                  product image and a call-to-action button to learn more. Below
                  the hero section, there is a brief description of the product
                  and its features, accompanied by some images showcasing the
                  product in use. The design of the page incorporates a lot of
                  white space and minimalist typography to create a modern and
                  sophisticated look. The color palette is kept simple, with
                  mostly grayscale tones and occasional pops of color to draw
                  attention to certain elements.
                </p>
              </div>
            </div>
            <div className="expanded-controls">
              <a
                className="expanded-button"
                href="https://practical-sammet-ad0cb7.netlify.app/#"
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
              <button className="expanded-button">back</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
