import React from "react";

import { useState } from "react";
import "./Navbar.css";
import Logo from "../../assets/hero-logo-3.png";

export default function Navbar() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <header className="header">
      <a href="" className="logo">
        <img src={Logo} alt="logo" />
        Jordan Ready
      </a>
      <nav className="navbar">
        <button
          style={{ "--i": "1" }}
          className={activeIndex === 0 ? "active" : ""}
          onClick={() => handleClick(0)}
        >
          <i className="bx bx-home-smile"></i> Home
        </button>
        <button
          style={{ "--i": "2" }}
          className={activeIndex === 1 ? "active" : ""}
          onClick={() => handleClick(1)}
        >
          <i className="bx bx-info-circle"></i> About
        </button>
        <button
          style={{ "--i": "3" }}
          className={activeIndex === 2 ? "active" : ""}
          onClick={() => handleClick(2)}
        >
          <i className="bx bxs-graduation"></i> Skills
        </button>
        <button
          style={{ "--i": "4" }}
          className={activeIndex === 3 ? "active" : ""}
          onClick={() => handleClick(3)}
        >
          <i className="bx bx-code-alt"></i> Projects
        </button>
        <button
          style={{ "--i": "5" }}
          className={activeIndex === 4 ? "active" : ""}
          onClick={() => handleClick(4)}
        >
          <i className="bx bxs-contact"></i> Contact
        </button>
      </nav>
    </header>
  );
}
