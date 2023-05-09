import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import HeroImage from "../../assets/hero-logo-3.png";

import "./Contact.css";

export default function ThankYou() {
  return (
    <div className="container contact-container">
      <div className="triangle-container">
        <div id="contact-triangle-bottomright"></div>
        <div id="contact-triangle-bottomright-accent"></div>
        <div id="contact-triangle-topright-accent"></div>
        <div id="contact-triangle-topright"></div>
        <div id="contact-triangle-topleft"></div>
        <div id="contact-triangle-topleft-accent"></div>
      </div>
      <div className="contact-inner-container">
        <div className="thanks-box">
          <h1 className="contact-title">Thank you!</h1>
          <p className="contact-subtitle">
            Your message has been sent! I will get back to you as soon as
            possible!
          </p>
          <img className="thanks-img img-fluid" src={HeroImage} alt="hero" />
        </div>
      </div>
    </div>
  );
}
