import React, { useRef, useEffect } from "react";
import HeroImage from "../../assets/hero-logo-3.png";
import "bootstrap/dist/css/bootstrap.min.css";
import Typed from "typed.js";

import "./Hero.css";

export default function Hero() {
  const typedRef = useRef<Typed | null>(null);

  useEffect(() => {
    const options = {
      strings: ["Full-Stack Developer", "Software Engineer", "Web Developer"],
      typeSpeed: 75,
      backSpeed: 75,
      startDelay: 1500,
      loop: true,
    };

    const typed = new Typed(".typed", options);

    typedRef.current = typed; // <-- assign to ref

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="container hero-container">
      <div id="triangle-bottomright"></div>
      <div id="triangle-bottomright-accent"></div>
      <div id="triangle-topright-accent"></div>
      <div id="triangle-topright"></div>
      <div id="triangle-topleft"></div>
      <div id="triangle-topleft-accent"></div>
      <section className="hero">
        <div className="row">
          <div className="col-md-7 hero-content">
            <div className="hero-content">
              <h3 className="mb-0">Hello there! My name is</h3>
              <h1 className="mb-0">Jordan Ready</h1>
              <h3 className="mb-4 typed-container">
                <div>
                  And I'm a<span></span>
                </div>
                <span className="typed"></span>
              </h3>
              <p>
                My expertise lies in both front-end and back-end technologies,
                which allows me to tackle projects with a comprehensive
                perspective. I believe in leveraging the latest tools and
                frameworks to create efficient, scalable, and user-friendly
                applications. Welcome to my website, and thank you for taking
                the time to learn more about me.
              </p>
              <div className="hero-icons">
                <a href="https://github.com/JordanReady" target="blank">
                  <i className="bx bxl-github bx-tada bx-sm"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/jordan-ready-a97021268/"
                  target="blank"
                >
                  <i className="bx bxl-linkedin bx-tada bx-sm"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="hero-img">
              <img className="img-fluid" src={HeroImage} alt="hero" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
