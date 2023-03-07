import React, { useRef, useEffect } from "react";
import AboutImage from "../../assets/rock-climbing-tp.png";
import "bootstrap/dist/css/bootstrap.min.css";

import "./About.css";

export default function About() {
  return (
    <div className="container about-container">
      <div id="triangle-bottomright"></div>
      <div id="triangle-bottomright-accent"></div>
      <div id="triangle-topright-accent"></div>
      <div id="triangle-topright"></div>
      <div id="triangle-topleft"></div>
      <div id="triangle-topleft-accent"></div>
      <section className="about">
        <div className="row">
          <div className="col-md-5">
            <div className="about-img">
              <img
                className="img-fluid"
                src={AboutImage}
                alt="rock climbing image"
              />
            </div>
          </div>
          <div className="col-md-7 about-content">
            <div className="about-content">
              <h1 className="about-title">About Me</h1>
              <p>
                If you've stumbled upon this page, chances are you're curious
                about who built it. I'm the guy behind the magic, a fullstack
                web developer with a passion for creating beautiful, functional,
                and user-friendly web applications. When I'm not busy typing
                away, I'm out conquering the great outdoors. Despite my fear of
                heights, I find myself drawn to the thrill of rock climbing. The
                physical and mental challenges keep me on my toes, literally! I
                also enjoy hiking, golfing, and shredding the slopes on my
                snowboard during the winter months. Of course, I can't neglect
                my virtual adventures, and you'll often find me gaming with
                friends in my downtime. But no matter what I'm doing, I always
                try to keep learning and growing, especially when it comes to
                web development. I'm constantly seeking new resources and
                experimenting with the latest tools and technologies to stay at
                the forefront of my field. I hope this gives you a better
                understanding of who I am and what I'm all about. If you're
                interested in working together on a project, or just want to
                chat about web development, don't hesitate to reach out! There's
                a handy contact section right at the top of the page, waiting
                for you.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
