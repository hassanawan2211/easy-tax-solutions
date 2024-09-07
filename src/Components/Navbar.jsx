import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">IncomeTaxPro</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="#hero">Home</Link>
        </li>
        <li>
          <Link to="#about">About Us</Link>
        </li>
        <li>
          <Link to="#services">Services</Link>
        </li>
        <li>
          <Link to="#pricing">Pricing</Link>
        </li>
        <li>
          <Link to="#testimonials">Testimonials</Link>
        </li>
        <li>
          <Link to="#faq">FAQ</Link>
        </li>
        <li>
          <Link to="#contact">Contact</Link>
        </li>
      </ul>
      <div className="navbar-cta">
        <Link to="#contact" className="cta-button">
          Consult Now
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
