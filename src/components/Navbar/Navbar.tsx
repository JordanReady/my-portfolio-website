import React from "react";

import { useState } from "react";
import "./Navbar.css";
import Logo from "../../assets/hero-logo-3.png";

interface NavbarProps {
  activeIndex: number;
  handleIndex: (index: number) => void;
}

interface ButtonStyle extends React.CSSProperties {
  "--i": string;
}

export default function Navbar(props: NavbarProps) {
  const { activeIndex, handleIndex } = props;

  return (
    <header className="header">
      <a href="" className="logo">
        <img src={Logo} alt="logo" />
        Jordan Ready
      </a>
      <nav className="navbar">
        <button
          style={{ "--i": "1" } as ButtonStyle}
          className={activeIndex === 0 ? "active" : ""}
          onClick={() => handleIndex(0)}
        >
          <i className="bx bx-home-smile"></i> Home
        </button>
        <button
          style={{ "--i": "2" } as ButtonStyle}
          className={activeIndex === 1 ? "active" : ""}
          onClick={() => handleIndex(1)}
        >
          <i className="bx bx-info-circle"></i> About
        </button>
        <button
          style={{ "--i": "3" } as ButtonStyle}
          className={activeIndex === 2 ? "active" : ""}
          onClick={() => handleIndex(2)}
        >
          <i className="bx bxs-graduation"></i> Skills
        </button>
        <button
          style={{ "--i": "4" } as ButtonStyle}
          className={activeIndex === 3 ? "active" : ""}
          onClick={() => handleIndex(3)}
        >
          <i className="bx bx-code-alt"></i> Projects
        </button>
        <button
          style={{ "--i": "5" } as ButtonStyle}
          className={activeIndex === 4 ? "active" : ""}
          onClick={() => handleIndex(4)}
        >
          <i className="bx bxs-contact"></i> Contact
        </button>
      </nav>
    </header>
  );
}
