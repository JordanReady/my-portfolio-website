import React, { useRef, useEffect, useState } from "react";
import AboutImage from "../../assets/rock-climbing-tp-2.png";
import AboutImage2 from "../../assets/hiking-tp.png";
import AboutImage3 from "../../assets/gaming-tp-1.png";
import "bootstrap/dist/css/bootstrap.min.css";
import Typed from "typed.js";

import "./About.css";

interface TitleStyle extends React.CSSProperties {
  "--i": string;
}

export default function About() {
  const typedRef = useRef<Typed | null>(null);
  const [image, setImage] = useState(AboutImage);

  useEffect(() => {
    const interval = setInterval(() => {
      switch (image) {
        case AboutImage:
          setImage(AboutImage2);
          break;
        case AboutImage2:
          setImage(AboutImage3);
          break;
        case AboutImage3:
          setImage(AboutImage);
          break;
        default:
          setImage(AboutImage);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [image]);

  useEffect(() => {
    typedRef.current = new Typed(".about-typed", {
      strings: [
        "If you've stumbled upon this page, chances are you're curious about who built it. I'm the guy behind the magic, a fullstack web developer with a passion for creating beautiful, functional, and user-friendly web applications. When I'm not busy typing away, I'm out conquering the great outdoors. Despite my fear of heights, I find myself drawn to the thrill of rock climbing. The physical and mental challenges keep me on my toes, literally! I also enjoy hiking, golfing, and hitting the slopes on my snowboard during the winter months. Of course, I can't neglect my virtual adventures, and you'll often find me gaming with friends in my downtime. But no matter what I'm doing, I always try to keep learning and growing, especially when it comes to web development. I'm constantly seeking new resources and experimenting with the latest tools and technologies to stay at the forefront of my field. I hope this gives you a better understanding of who I am and what I'm all about. If you're interested in working together on a project, or just want to chat about web development, don't hesitate to reach out! There's a handy contact section right at the top of the page, waiting for you.",
      ],
      typeSpeed: 1,
      loop: false,
      cursorChar: "",
    });

    return () => {
      typedRef.current?.destroy();
    };
  }, []);

  return (
    <div className="container about-container">
      <div className="triangle-container">
        <div id="about-triangle-bottomright"></div>
        <div id="about-triangle-bottomright-accent"></div>
        <div id="about-triangle-topright-accent"></div>
        <div id="about-triangle-topright"></div>
        <div id="about-triangle-topleft"></div>
        <div id="about-triangle-topleft-accent"></div>
      </div>
      <div className="about">
        <div className="row">
          <div className="col-md-5">
            <div className="about-img">
              <img
                className="img-fluid"
                src={image}
                alt="rock climbing image"
              />
            </div>
          </div>
          <div className="col-md-7 about-content">
            <div className="about-content">
              <div className="about-content-inner">
                <h1 className="about-title">
                  <span style={{ "--i": "1" } as TitleStyle}>Who</span>
                  <span style={{ "--i": "2" } as TitleStyle}> am</span>
                  <span style={{ "--i": "3" } as TitleStyle}> I</span>
                  <span style={{ "--i": "4" } as TitleStyle}>?</span>
                </h1>
                <p className="about-typed"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
