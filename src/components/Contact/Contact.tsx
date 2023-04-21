import React, { useRef, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroImage from "../../assets/hero-logo-3.png";

import "./Contact.css";

interface FormStyle extends React.CSSProperties {
  "--i": string;
}

const FORM_ENDPOINT =
  "https://public.herotofu.com/v1/501d6f30-e082-11ed-9b25-13156513d0a3";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(formData);
    // Clear form data
    setTimeout(() => {
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    }, 1000);
  };

  if (submitted) {
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
        <div className="form-box">
          <h1 className="contact-title">Contact Me</h1>
          <form
            action={FORM_ENDPOINT}
            onSubmit={handleSubmit}
            method="POST"
            className="contact-form"
            target="_blank"
          >
            <div
              className="form-group col-11 col-md-6"
              style={{ "--i": "1" } as FormStyle}
            >
              <label className="contact-label" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </div>
            <div
              className="form-group col-11 col-md-6"
              style={{ "--i": "2" } as FormStyle}
            >
              <label className="contact-label" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>
            <div
              className="form-group col-11 col-md-6"
              style={{ "--i": "3" } as FormStyle}
            >
              <label className="contact-label" htmlFor="message">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder="Enter your message"
                required
              />
            </div>
            <button type="submit" className="btn contact-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
