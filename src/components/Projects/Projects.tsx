import React, { useRef, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ChessAppImg from "../../assets/chess-app-2.png";
import ChessAppImg2 from "../../assets/chess-app-3.png";
import ChessAppImg3 from "../../assets/chess-app-4.png";
import AirBnbImg from "../../assets/gaming-tp-1.png";
import AirBnbImg2 from "../../assets/hiking-tp.png";
import AirBnbImg3 from "../../assets/rock-climbing-tp-2.png";
import TwitterImg from "../../assets/chess-app-2.png";
import TwitterImg2 from "../../assets/chess-app-3.png";
import TwitterImg3 from "../../assets/chess-app-4.png";

import "./Projects.css";

interface ProjectStyle extends React.CSSProperties {
  "--i": string;
}

export default function Projects() {
  const [expandedTile, setExpandedTile] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [chessImgs, setChessImgs] = useState(ChessAppImg);
  const [airBnbImgs, setAirBnbImgs] = useState(AirBnbImg);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenWidth(window.innerWidth);
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      switch (airBnbImgs) {
        case AirBnbImg:
          setAirBnbImgs(AirBnbImg2);
          break;
        case AirBnbImg2:
          setAirBnbImgs(AirBnbImg3);
          break;
        case AirBnbImg3:
          setAirBnbImgs(AirBnbImg);
          break;
        default:
          setAirBnbImgs(AirBnbImg);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [expandedTile, airBnbImgs]);

  useEffect(() => {
    const interval = setInterval(() => {
      switch (chessImgs) {
        case ChessAppImg:
          setChessImgs(ChessAppImg2);
          break;
        case ChessAppImg2:
          setChessImgs(ChessAppImg3);
          break;
        case ChessAppImg3:
          setChessImgs(ChessAppImg);
          break;
        default:
          setChessImgs(ChessAppImg);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [expandedTile, chessImgs]);

  function expandTile(key: number) {
    if (expandedTile === key) {
      setExpandedTile(0);
    } else setExpandedTile(key);
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
        <div className={`col-md-4 projects ${screenWidth < 768 ? "row" : ""}`}>
          <div
            key={1}
            style={{ "--i": "1" } as ProjectStyle}
            onClick={() => expandTile(1)}
            className={`col-md-4 project-col mx-1 ${
              expandedTile === 1
                ? "expanded"
                : expandedTile === 0
                ? "project-tile"
                : "d-none"
            }`}
          >
            <div className="chess-title">
              <h3 className="preview-project-title">Chess App</h3>
              <p className="preview-project-description">
                Multiplayer chess learning platform
              </p>
              <li className="preview-technologies-container">
                <li className="preview-technologies-title">Technologies:</li>
                <li>React</li>
                <li>Ruby on Rails</li>
                <li>ActionCable Websocket</li>
                <li>chess.js</li>
                <li>react-chessboard</li>
                <li>Heroku</li>
              </li>
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
                    />
                  </div>
                  <div className="col-md-5 project-description-container">
                    <h3 className="project-description-header">
                      Project Description
                    </h3>
                    <p className="project-description">
                      The Knight's Den is a web application designed for
                      beginners who want to learn and play chess in a fun and
                      interactive way. Users can create an account and login to
                      access a variety of features including interactive lessons
                      to improve their skills, play against a bot with different
                      levels of difficulty, and challenge their friends online
                      in real time games. After the games, users can analyze the
                      replay and review their statistics to track their progress
                      over time. With its user-friendly interface and
                      educational resources, The Knight's Den is the perfect
                      platform for chess enthusiasts of all skill levels to
                      develop their abilities and enjoy the game. It was built
                      using Ruby on Rails for the backend, ActionCable for
                      websockets, and React for the frontend, and hosted on
                      Heroku.It was built using Ruby on Rails for the backend,
                      ActionCable for websockets, and React for the frontend,
                      and hosted on Heroku.
                    </p>
                  </div>
                </div>
                <div className="expanded-controls">
                  <a className="expanded-link" href="" target="blank">
                    Github
                  </a>
                  <button className="expanded-button">back</button>
                </div>
              </div>
            )}
          </div>
          <div
            key={2}
            style={{ "--i": "1" } as ProjectStyle}
            onClick={() => expandTile(2)}
            className={`col-md-4 mx-1 airbnb-title ${
              expandedTile === 2
                ? "expanded"
                : expandedTile === 0
                ? "project-tile"
                : "d-none"
            }`}
          >
            <h3 className="preview-project-title">AirBnb Clone</h3>
            <p className="preview-project-description">
              Booking platform for vacation rentals
            </p>
            <li className="preview-technologies-container">
              <li className="preview-technologies-title">Technologies:</li>
              <li>React</li>
              <li>Ruby on Rails</li>
              <li>ActionCable Websocket</li>
              <li>chess.js</li>
              <li>react-chessboard</li>
              <li>Heroku</li>
            </li>
            {expandedTile === 2 && (
              <div>
                <div className="row expanded-project-row">
                  <div className="col-md-7 project-img-container">
                    <h3 className="expanded-project-title">Chess App</h3>
                    <img
                      className="project-img img-fluid"
                      src={chessImgs}
                      alt="project-1-screenshot"
                    />
                  </div>
                  <div className="col-md-5 project-description-container">
                    <h3 className="project-description-header">
                      Project Description
                    </h3>
                    <p className="project-description">
                      The Knight's Den is a web application designed for
                      beginners who want to learn and play chess in a fun and
                      interactive way. Users can create an account and login to
                      access a variety of features including interactive lessons
                      to improve their skills, play against a bot with different
                      levels of difficulty, and challenge their friends online
                      in real time games. After the games, users can analyze the
                      replay and review their statistics to track their progress
                      over time. With its user-friendly interface and
                      educational resources, The Knight's Den is the perfect
                      platform for chess enthusiasts of all skill levels to
                      develop their abilities and enjoy the game. It was built
                      using Ruby on Rails for the backend, ActionCable for
                      websockets, and React for the frontend, and hosted on
                      Heroku.
                    </p>
                  </div>
                </div>
                <div className="expanded-controls">
                  <a className="expanded-link" href="" target="blank">
                    Github
                  </a>
                  <button className="expanded-button">back</button>
                </div>
              </div>
            )}
          </div>
          <div
            key={3}
            style={{ "--i": "1" } as ProjectStyle}
            onClick={() => expandTile(3)}
            className={`col-md-4 mx-1 twitter-title ${
              expandedTile === 3
                ? "expanded"
                : expandedTile === 0
                ? "project-tile"
                : "d-none"
            }`}
          >
            <h3 className="preview-project-title">Chess App</h3>
            <p className="preview-project-description">
              Multiplayer chess learning platform
            </p>
            <li className="preview-technologies-container">
              <li className="preview-technologies-title">Technologies:</li>
              <li>React</li>
              <li>Ruby on Rails</li>
              <li>ActionCable Websocket</li>
              <li>chess.js</li>
              <li>react-chessboard</li>
              <li>Heroku</li>
            </li>
            {expandedTile === 3 && (
              <div>
                <div className="row expanded-project-row">
                  <div className="col-md-7 project-img-container">
                    <h3 className="expanded-project-title">Chess App</h3>
                    <img
                      className="project-img img-fluid"
                      src={chessImgs}
                      alt="project-1-screenshot"
                    />
                  </div>
                  <div className="col-md-5 project-description-container">
                    <h3 className="project-description-header">
                      Project Description
                    </h3>
                    <p className="project-description">
                      The Knight's Den is a web application designed for
                      beginners who want to learn and play chess in a fun and
                      interactive way. Users can create an account and login to
                      access a variety of features including interactive lessons
                      to improve their skills, play against a bot with different
                      levels of difficulty, and challenge their friends online
                      in real time games. After the games, users can analyze the
                      replay and review their statistics to track their progress
                      over time. With its user-friendly interface and
                      educational resources, The Knight's Den is the perfect
                      platform for chess enthusiasts of all skill levels to
                      develop their abilities and enjoy the game. It was built
                      using Ruby on Rails for the backend, ActionCable for
                      websockets, and React for the frontend, and hosted on
                      Heroku.It was built using Ruby on Rails for the backend,
                      ActionCable for websockets, and React for the frontend,
                      and hosted on Heroku.
                    </p>
                  </div>
                </div>
                <div className="expanded-controls">
                  <a className="expanded-link" href="" target="blank">
                    Github
                  </a>
                  <button className="expanded-button">back</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
