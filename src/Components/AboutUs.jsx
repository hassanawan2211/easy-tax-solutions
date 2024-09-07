import React from "react";
import "./AboutUs.css"; // Create a separate CSS file for AboutUs styling

const AboutUs = () => {
  return (
    <section className="about-us" id="about">
      <div className="container">
        <h2>About Us</h2>
        <p>
          With over 25 years of experience in tax consultancy, IncomeTaxPro
          provides reliable and efficient tax services tailored to your needs.
        </p>
        <div className="key-differentiators">
          <div className="differentiator">
            <h3>Certified Tax Professionals</h3>
            <p>
              Our team consists of certified experts ensuring accurate and
              compliant tax solutions.
            </p>
          </div>
          <div className="differentiator">
            <h3>Transparent Pricing</h3>
            <p>
              No hidden fees. Clear and upfront pricing for all our services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
