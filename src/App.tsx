import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Background from "./assets/abstract-shape-bg-1.png";
import Background2 from "./assets/simple-background.png";

function App() {
  return (
    <div className="App">
      <div className="background"></div>
      <div className="container">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
}

export default App;
