import React from "react";
import "./Services.css";

const Services = () => {
  const services = [
    "Individual Tax Filing",
    "Business Tax Filing",
    "Income Tax Planning",
    "Audit Assistance",
    "Tax Consultation",
    "Tax Refund Tracking",
    "GST and VAT Filing",
    "International Taxation Services",
  ];

  return (
    <section className="services" id="services">
      <div className="container">
        <h2>Our Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-item" key={index}>
              <h3>{service}</h3>
              <p>
                Expert assistance to ensure your {service.toLowerCase()} is
                handled accurately and efficiently.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
