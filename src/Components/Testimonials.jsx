import React from "react";
import "./Testimonials.css";

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      feedback:
        "IncomeTaxPro made filing my taxes so easy and stress-free. Highly recommend their services!",
    },
    {
      name: "Jane Smith",
      feedback:
        "Professional and reliable. Their team helped my business navigate complex tax regulations.",
    },
    {
      name: "Michael Brown",
      feedback:
        "Excellent customer service and transparent pricing. I received a great refund thanks to them.",
    },
  ];

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <h2>What Our Clients Say</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-item" key={index}>
              <p>"{testimonial.feedback}"</p>
              <h4>- {testimonial.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
