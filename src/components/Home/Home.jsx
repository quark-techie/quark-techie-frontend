import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      {/* Logo di sfondo */}
      <img src="/logobackground.png" alt="Logo" className="logo-background" />

      {/* Contenitore per il testo */}
      <div className="text-container">
        <h1 className="title">
          Quark <span className="highlight">Techie</span>
          <br /> quality for the best
        </h1>
        <p className="subtitle">
          Specialized Consulting in Software Quality Assurance
        </p>
        <div className="button-container">
          <a href="#contact" className="button">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
