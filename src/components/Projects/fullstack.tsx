import React, { useState } from "react";
import ProjectTile from "./ProjectTile";
import "./Projects.css";

interface ProjectStyle extends React.CSSProperties {
  "--i": string;
}

export default function Fullstack(props: any) {
  const { screenWidth, chessImgs, airBnbImgs, twitterImgs, resetImgs } = props;

  return (
    <div
      className={`col-md-4 projects 
      ${screenWidth < 768 ? "row" : ""}
      }`}
    >
      <ProjectTile
        id={1}
        title="Chess App"
        description="Multiplayer chess learning platform"
        longDescription="The Knight's Den is a web application designed for beginners
          who want to learn and play chess in a fun and interactive
          way. Users can create an account and login to access a
          variety of features including interactive lessons to improve
          their skills, play against a bot with different levels of
          difficulty, and challenge their friends online in real time
          games. After the games, users can analyze the replay and
          review their statistics to track their progress over time.
          With its user-friendly interface and educational resources,
          The Knight's Den is the perfect platform for chess
          enthusiasts of all skill levels to develop their abilities
          and enjoy the game. It was built using Ruby on Rails for the
          backend, ActionCable for websockets, and React for the
          frontend, and hosted on Heroku."
        technologies={[
          "React",
          "Ruby on Rails",
          "ActionCable Websocket",
          "chess.js",
          "react-chessboard",
          "Bootstrap",
          "Heroku",
        ]}
        images={chessImgs}
        resetImgs={resetImgs}
        siteLink="https://the-knights-den.herokuapp.com"
        githubLink="https://github.com/JordanReady/The-Knights-Den"
      />

      <ProjectTile
        id={2}
        title="AirBnb Clone"
        description="Booking platform for vacation rentals"
        longDescription="The full-stack clone of Airbnb is a web application built
        with Rails and React. Users can sign up and log in to the
        platform, browse a comprehensive list of available
        properties, and book a property with check-in and check-out
        dates. To facilitate online payments, the application uses
        the Stripe API, allowing users to make secure transactions
        directly through the platform. The application also offers
        property owners the ability to create listings and view all
        bookings they have received for their properties. With
        webpacker added for React front-end views, the interface is
        smooth, intuitive, and highly responsive."
        technologies={[
          "React",
          "Ruby on Rails",
          "AWS S3",
          "Stripe Webhooks",
          "Bootstrap",
          "Heroku",
        ]}
        images={airBnbImgs}
        resetImgs={resetImgs}
        siteLink="https://fs-airbnb-clone.herokuapp.com/"
        githubLink="https://github.com/JordanReady-Codes/full_stack_airbnb_clone"
      />

      <ProjectTile
        id={3}
        title="Twitter Clone"
        description="Social media platform for sharing thoughts"
        longDescription="The full-stack Twitter Clone project is a web application
          that replicates the core functionality of Twitter, allowing
          users to create accounts, log in, and share their thoughts
          with the world. Upon creating an account, users can log in
          and access a variety of features including creating,
          viewing, and deleting their own tweets. Users can also
          browse a global feed of tweets from all users, or navigate
          to a specific user's profile to view only the tweets that
          user has made."
        technologies={["React", "Ruby on Rails", "Bootstrap", "Heroku"]}
        images={twitterImgs}
        resetImgs={resetImgs}
        siteLink="https://github.com/JordanReady-Codes/full_stack_twitter_clone"
        githubLink="https://github.com/JordanReady-Codes/full_stack_airbnb_clone"
      />
    </div>
  );
}
