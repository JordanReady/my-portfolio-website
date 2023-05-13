import React, { useEffect } from "react";
import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import ThankYou from "./components/Contact/ThankYou";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [shouldSlideOut, setShouldSlideOut] = useState(false);

  window.addEventListener("load", function () {
    setTimeout(function () {
      // This hides the address bar:
      window.scrollTo(0, 1);
    }, 0);
  });

  const handleIndex = (index: number) => {
    setShouldSlideOut(true);
    setTimeout(() => {
      setActiveIndex(index);
      setShouldSlideOut(false);
    }, 500);
  };

  const navigateTo = (path: string) => {
    window.history.pushState({}, "", path);
    handlePathChange();
  };

  const handlePathChange = () => {
    const path = window.location.pathname;
    switch (path) {
      case "/thank-you":
        handleIndex(5);
        break;
      default:
        handleIndex(0);
    }
  };

  useEffect(() => {
    handlePathChange();
    window.addEventListener("popstate", handlePathChange);
    return () => window.removeEventListener("popstate", handlePathChange);
  }, []);

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
      case 5:
        return <ThankYou />;
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
