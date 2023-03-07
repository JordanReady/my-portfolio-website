import React, { useEffect } from "react";
import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [shouldSlideOut, setShouldSlideOut] = useState(false);

  const handleIndex = (index: number) => {
    setShouldSlideOut(true);
    setTimeout(() => {
      setActiveIndex(index);
      setShouldSlideOut(false);
    }, 800);
  };

  useEffect(() => {
    console.log("shouldSlideOut", shouldSlideOut);
  }, [shouldSlideOut]);

  const getSection = () => {
    switch (activeIndex) {
      case 0:
        return <Hero />;
      case 1:
        return <About />;
      case 2:
        return <Skills />;
      case 3:
        return <Projects />;
      case 4:
        return <Contact />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className="App">
      <Navbar activeIndex={activeIndex} handleIndex={handleIndex} />
      <div className={`section ${shouldSlideOut ? "slide-out" : ""}`}>
        {getSection()}
      </div>
    </div>
  );
}

export default App;
