import React, { useState } from "react";
import "./Projects.css";

interface ProjectStyle extends React.CSSProperties {
  "--i": string;
}

export default function Fullstack(props: any) {
  const {
    screenWidth,
    expandedTile,
    expandTile,
    chessImgs,
    airBnbImgs,
    twitterImgs,
    resetImgs,
  } = props;

  const visitSite = (num: string) => {
    let url = "";
    switch (num) {
      case "1":
        url = "https://the-knights-den.herokuapp.com";
        break;
      case "2":
        url = "https://fs-airbnb-clone.herokuapp.com/";
        break;
      case "3":
        url = "https://github.com/JordanReady-Codes/full_stack_twitter_clone";
        break;
      default:
        url = "https://github.com/JordanReady/bewd-twitter-advanced";
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
          <h3 className="preview-project-title">Chess App</h3>
          <p className="preview-project-description">
            Multiplayer chess learning platform
          </p>
          <div className="preview-technologies-container">
            <li className="preview-technologies-title">Technologies:</li>
            <li>React</li>
            <li>Ruby on Rails</li>
            <li>ActionCable Websocket</li>
            <li>chess.js</li>
            <li>react-chessboard</li>
            <li>Bootstrap</li>
            <li>Heroku</li>
          </div>
        </div>
        {expandedTile === 1 && (
          <div>
            <div className="row expanded-project-row">
              <div className="col-md-7 project-img-container">
                <h3 className="expanded-project-title">Chess App</h3>
                <img
                  className="project-img img-fluid"
                  src={chessImgs}
                  alt="project-1-screenshot"
                  onClick={() => visitSite("1")}
                />
              </div>
              <div className="col-md-5 project-description-container">
                <h3 className="project-description-header">
                  Project Description
                </h3>
                <p className="project-description">
                  The Knight's Den is a web application designed for beginners
                  who want to learn and play chess in a fun and interactive way.
                  Users can create an account and login to access a variety of
                  features including interactive lessons to improve their
                  skills, play against a bot with different levels of
                  difficulty, and challenge their friends online in real time
                  games. After the games, users can analyze the replay and
                  review their statistics to track their progress over time.
                  With its user-friendly interface and educational resources,
                  The Knight's Den is the perfect platform for chess enthusiasts
                  of all skill levels to develop their abilities and enjoy the
                  game. It was built using Ruby on Rails for the backend,
                  ActionCable for websockets, and React for the frontend, and
                  hosted on Heroku.
                  <div className="spacer"></div>
                </p>
              </div>
            </div>
            <div className="expanded-controls">
              <button
                className="expanded-button live-site"
                onClick={() => visitSite("1")}
              >
                Live Site
              </button>
              <a
                className="expanded-link"
                href="https://github.com/JordanReady/The-Knights-Den"
                target="blank"
              >
                Github
              </a>
              <button className="expanded-button" onClick={resetImgs}>
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
        className={`col-md-4 mx-1 tile airbnb-title ${
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
          <h3 className="preview-project-title">AirBnb Clone</h3>
          <p className="preview-project-description">
            Booking platform for vacation rentals
          </p>
          <div className="preview-technologies-container">
            <li className="preview-technologies-title">Technologies:</li>
            <li>React</li>
            <li>Ruby on Rails</li>
            <li>AWS S3</li>
            <li>Stripe Webhooks</li>
            <li>Bootstrap</li>
            <li>Heroku</li>
          </div>
        </div>
        {expandedTile === 2 && (
          <div>
            <div className="row expanded-project-row">
              <div className="col-md-7 project-img-container">
                <h3 className="expanded-project-title">AirBnb Clone</h3>
                <img
                  className="project-img img-fluid"
                  src={airBnbImgs}
                  alt="project-1-screenshot"
                  onClick={() => visitSite("2")}
                />
              </div>
              <div className="col-md-5 project-description-container">
                <h3 className="project-description-header">
                  Project Description
                </h3>
                <p className="project-description">
                  The full-stack clone of Airbnb is a web application built with
                  Rails and React. Users can sign up and log in to the platform,
                  browse a comprehensive list of available properties, and book
                  a property with check-in and check-out dates. To facilitate
                  online payments, the application uses the Stripe API, allowing
                  users to make secure transactions directly through the
                  platform. The application also offers property owners the
                  ability to create listings and view all bookings they have
                  received for their properties. With webpacker added for React
                  front-end views, the interface is smooth, intuitive, and
                  highly responsive.
                  <div className="spacer"></div>
                </p>
              </div>
            </div>
            <div className="expanded-controls">
              <button
                className="expanded-button live-site"
                onClick={() => visitSite("2")}
              >
                Live Site
              </button>
              <a
                className="expanded-link"
                href="https://github.com/JordanReady-Codes/full_stack_airbnb_clone"
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
          <h3 className="preview-project-title">Twitter Clone</h3>
          <p className="preview-project-description">
            Social media platform for sharing thoughts and ideas
          </p>
          <div className="preview-technologies-container">
            <li className="preview-technologies-title">Technologies:</li>
            <li>React</li>
            <li>Ruby on Rails</li>
            <li>Heroku</li>
          </div>
        </div>
        {expandedTile === 3 && (
          <div>
            <div className="row expanded-project-row">
              <div className="col-md-7 project-img-container">
                <h3 className="expanded-project-title">Twitter Clone</h3>
                <img
                  className="project-img img-fluid"
                  src={twitterImgs}
                  alt="project-1-screenshot"
                  onClick={() => visitSite("3")}
                />
              </div>
              <div className="col-md-5 project-description-container">
                <h3 className="project-description-header">
                  Project Description
                </h3>
                <p className="project-description">
                  The full-stack Twitter Clone project is a web application that
                  replicates the core functionality of Twitter, allowing users
                  to create accounts, log in, and share their thoughts with the
                  world. Upon creating an account, users can log in and access a
                  variety of features including creating, viewing, and deleting
                  their own tweets. Users can also browse a global feed of
                  tweets from all users, or navigate to a specific user's
                  profile to view only the tweets that user has made.
                  <div className="spacer"></div>
                </p>
              </div>
            </div>
            <div className="expanded-controls">
              <a
                className="expanded-link"
                href="https://github.com/JordanReady-Codes/full_stack_twitter_clone"
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
