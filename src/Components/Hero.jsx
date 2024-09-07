import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <h1>Maximize Your Tax Returns</h1>
        <p>Trusted tax solutions for individuals and businesses</p>
        <a href="#contact" className="cta-button">
          Get Started
        </a>
      </div>
    </section>
  );
};

export default Hero;
