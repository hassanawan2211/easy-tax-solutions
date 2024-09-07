import React from "react";
import "./PricingPlans.css";

const PricingPlans = () => {
  const plans = [
    {
      name: "Basic",
      price: "$99",
      features: [
        "Individual Tax Filing",
        "Tax Consultation",
        "Tax Refund Tracking",
      ],
      link: "#contact",
    },
    {
      name: "Pro",
      price: "$199",
      features: [
        "All Basic Features",
        "Business Tax Filing",
        "Income Tax Planning",
        "Audit Assistance",
      ],
      link: "#contact",
    },
    {
      name: "Business",
      price: "$299",
      features: [
        "All Pro Features",
        "GST and VAT Filing",
        "International Taxation Services",
        "Dedicated Account Manager",
      ],
      link: "#contact",
    },
  ];

  return (
    <section className="pricing-plans" id="pricing">
      <div className="container">
        <h2>Pricing Plans</h2>
        <div className="plans-grid">
          {plans.map((plan, index) => (
            <div className="plan-card" key={index}>
              <h3>{plan.name}</h3>
              <p className="price">{plan.price}</p>
              <ul>
                {plan.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <a href={plan.link} className="cta-button">
                Sign Up
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
