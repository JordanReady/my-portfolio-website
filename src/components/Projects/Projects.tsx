import React, { useRef, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ChessAppImg from "../../assets/chess-app-2.png";
import ChessAppImg2 from "../../assets/chess-app-3.png";
import ChessAppImg3 from "../../assets/chess-app-4.png";
import AirBnbImg from "../../assets/gaming-tp-1.png";
import AirBnbImg2 from "../../assets/hiking-tp.png";
import AirBnbImg3 from "../../assets/rock-climbing-tp-2.png";
import TwitterImg from "../../assets/twitter_app_1.png";
import TwitterImg2 from "../../assets/twitter_app_2.png";
import TwitterImg3 from "../../assets/twitter_app_3.png";
import AppleImg from "../../assets/apple_landing_page.png";
import AirBnbNewsImg from "../../assets/airbnb_news_clone_1.png";
import AirBnbNewsImg2 from "../../assets/airbnb_news_clone_2.png";
import AirBnbNewsImg3 from "../../assets/airbnb_news_clone_3.png";
import NewsWeekImg from "../../assets/newsweek_home_page.png";
import AirBnbFrontend from "../../assets/airbnb_frontend_1.png";
import AirBnbFrontend2 from "../../assets/airbnb_frontend_2.png";
import AirBnbFrontend3 from "../../assets/airbnb_frontend_3.png";

import "./Projects.css";
import Frontend from "./frontend";
import Fullstack from "./fullstack";

interface ProjectStyle extends React.CSSProperties {
  "--i": string;
}

export default function Projects() {
  const [expandedTile, setExpandedTile] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [chessImgs, setChessImgs] = useState(ChessAppImg);
  const [airBnbImgs, setAirBnbImgs] = useState(AirBnbImg);
  const [airBnbFrontendImgs, setAirBnbFrontendImgs] = useState(AirBnbFrontend);
  const [twitterImgs, setTwitterImgs] = useState(TwitterImg);
  const [appleLandingPageImgs, setAppleLandingPageImgs] = useState(AppleImg);
  const [airBnbNewsImgs, setAirBnbNewsImgs] = useState(AirBnbImg);
  const [newsWeekImgs, setNewsWeekImgs] = useState(NewsWeekImg);
  const [projectType, setProjectType] = useState("fullstack");

  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenWidth(window.innerWidth);
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      switch (airBnbFrontendImgs) {
        case AirBnbFrontend:
          setAirBnbFrontendImgs(AirBnbFrontend2);
          break;
        case AirBnbFrontend2:
          setAirBnbFrontendImgs(AirBnbFrontend3);
          break;
        case AirBnbFrontend3:
          setAirBnbFrontendImgs(AirBnbFrontend);
          break;
        default:
          setAirBnbFrontendImgs(AirBnbFrontend);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [expandedTile, airBnbFrontendImgs]);

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
      switch (twitterImgs) {
        case TwitterImg:
          setTwitterImgs(TwitterImg2);
          break;
        case TwitterImg2:
          setTwitterImgs(TwitterImg3);
          break;
        case TwitterImg3:
          setTwitterImgs(TwitterImg);
          break;
        default:
          setTwitterImgs(TwitterImg);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [expandedTile, twitterImgs]);

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

  useEffect(() => {
    const interval = setInterval(() => {
      switch (airBnbNewsImgs) {
        case AirBnbNewsImg:
          setAirBnbNewsImgs(AirBnbNewsImg2);
          break;
        case AirBnbNewsImg2:
          setAirBnbNewsImgs(AirBnbNewsImg3);
          break;
        case AirBnbNewsImg3:
          setAirBnbNewsImgs(AirBnbNewsImg);
          break;
        default:
          setAirBnbNewsImgs(AirBnbNewsImg);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [expandedTile, airBnbNewsImgs]);

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
            chessImgs={chessImgs}
            airBnbImgs={airBnbImgs}
            twitterImgs={twitterImgs}
          />
        ) : (
          <Frontend
            screenWidth={screenWidth}
            expandedTile={expandedTile}
            expandTile={expandTile}
            appleImgs={appleLandingPageImgs}
            airBnbNewsImgs={airBnbNewsImgs}
            newsWeekImgs={newsWeekImgs}
            airBnbFrontendImgs={airBnbFrontendImgs}
          />
        )}
      </div>
    </div>
  );
}