import React, { useState } from "react";
import ProjectTile from "./ProjectTile";
import "./Projects.css";

import AirBnbNewsImg from "../../assets/airbnb_news_clone_1.png";
import AirBnbNewsImg2 from "../../assets/airbnb_news_clone_2.png";
import AirBnbNewsImg3 from "../../assets/airbnb_news_clone_3.png";
import AirBnbFrontend from "../../assets/airbnb_frontend_1.png";
import AirBnbFrontend2 from "../../assets/airbnb_frontend_2.png";
import AirBnbFrontend3 from "../../assets/airbnb_frontend_3.png";
import YouTubeImg from "../../assets/Youtube_app_1.png";
import YouTubeImg2 from "../../assets/Youtube_app_2.png";
import YouTubeImg3 from "../../assets/Youtube_app_3.png";
import YouTubeImg4 from "../../assets/Youtube_app_4.png";

export default function Frontend(props: any) {
  const { screenWidth, resetImgs, expandedTile } = props;

  return (
    <div
      className={`col-md-4 projects 
  ${screenWidth < 768 ? "row" : ""}
  }`}
    >
      <ProjectTile
        id={1}
        expandedTile={expandedTile}
        title="AirBnb Newsroom"
        description="Responsive AirBnb News website clone"
        longDescription="The Airbnb news website clone is a frontend project that was
        built using HTML, CSS, and Bootstrap. The website features a
        top news story section that showcases the most important
        news article of the day. Additionally, there are multiple
        grid-based sections that highlight the latest news articles
        and provide links to various social media platforms. The
        design includes carefully crafted grids created using
        Bootstrap to provide a consistent and intuitive user
        experience. The picture reel section, news categories
        section, sign up for newsletter section, and footer sections
        are all designed using Bootstrap grids to ensure that they
        display optimally on different devices. The website's goal
        is to provide users with a clean and straightforward way to
        stay up-to-date with Airbnb news. The responsive design
        ensures that users can access the website from their
        desktop, tablet, or smartphone with ease."
        technologies={["React", "HTML", "CSS", "Bootstrap"]}
        images={[AirBnbNewsImg, AirBnbNewsImg2, AirBnbNewsImg3]}
        resetImgs={resetImgs}
        siteLink="https://trusting-swirles-c46c81.netlify.app/"
        githubLink="https://github.com/JordanReady"
      />

      <ProjectTile
        id={2}
        expandedTile={expandedTile}
        title="Booking Website Clone"
        description="AirBnb booking website clone"
        longDescription="This project is a clone of the Airbnb website's frontend,
        built using HTML, CSS, and Bootstrap. The site includes a
        user-friendly booking homes form, an engaging customer
        reviews section, and a homes available with top rated
        experiences section to help users find the best possible
        accommodations. These sections utilize bootstrap colomns and
        rows to create a responsive grid layout that adjusts to fit
        the screen size. The site also includes a footer with links
        to useful information and social media icons."
        technologies={["HTML", "CSS", "Bootstrap"]}
        images={[AirBnbFrontend, AirBnbFrontend2, AirBnbFrontend3]}
        resetImgs={resetImgs}
        siteLink="https://645c288d2938fa1c3429ef57--endearing-otter-26c1ed.netlify.app/"
        githubLink="https://github.com/JordanReady"
      />

      <ProjectTile
        id={3}
        expandedTile={expandedTile}
        title="YouTube Clone"
        description="Responsive YouTube website clone"
        longDescription="The YouTube Clone Application is a modern web application
        built with React JS and styled using Material UI 5. It
        replicates the core functionalities of YouTube, allowing
        users to browse and watch videos, search for content, and
        interact with the video player and related information. Key
        features of the application include video playback, video
        recommendations, video search, and a responsive design. The
        user interface is visually appealing, thanks to the use of
        Material UI 5 components. To provide up-to-date video data,
        the application integrates with the YouTube Data API through
        Rapid API. This allows users to access video information
        such as titles, descriptions, channel details, and view
        counts."
        technologies={["React", "CSS", "Material UI", "Rapid API"]}
        images={[YouTubeImg, YouTubeImg2, YouTubeImg3, YouTubeImg4]}
        resetImgs={resetImgs}
        siteLink="https://dainty-empanada-ce963a.netlify.app/"
        githubLink=" https://github.com/JordanReady/youtube-clone"
      />
    </div>
  );
}
