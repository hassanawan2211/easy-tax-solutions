import React, { useState } from "react";
import "./FAQ.css";

const FAQ = () => {
  const faqs = [
    {
      question: "How do I file my taxes?",
      answer:
        "You can file your taxes by providing the necessary documents through our online platform or by consulting with our tax professionals.",
    },
    {
      question: "What documents are required?",
      answer:
        "Typically, you'll need your income statements, previous tax returns, identification documents, and any receipts or records related to deductions.",
    },
    {
      question: "How long does the tax filing process take?",
      answer:
        "Once all necessary documents are submitted, the process usually takes between 7-10 business days.",
    },
    {
      question: "Can you help with international taxation?",
      answer:
        "Yes, we offer international taxation services to help individuals and businesses comply with tax regulations in different countries.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq" id="faq">
      <div className="container">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
              key={index}
            >
              <div className="faq-question" onClick={() => toggleFAQ(index)}>
                <h4>{faq.question}</h4>
                <span>{activeIndex === index ? "-" : "+"}</span>
              </div>
              {activeIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
