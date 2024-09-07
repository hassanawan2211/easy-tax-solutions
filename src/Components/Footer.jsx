import React from "react";
import "./Footer.css";
import { FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-links">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
        </div>
        <div className="social-media">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
        </div>
        <div className="newsletter">
          <form>
            <input
              type="email"
              placeholder="Subscribe to our newsletter"
              required
            />
            <button type="submit" className="cta-button">
              Subscribe
            </button>
          </form>
        </div>
        <p className="copyright">
          &copy; {new Date().getFullYear()} IncomeTaxPro. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
