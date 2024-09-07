import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import AboutUs from "./Components/AboutUs";
import Services from "./Components/Services";
import PricingPlans from "./Components/PricingPlans";
import Testimonials from "./Components/Testimonials";
import FAQ from "./Components/FAQ";
import Contact from "./Components/Contact.jsx";
import Footer from "./Components/Footer.jsx";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Hero />
      <AboutUs />
      <Services />
      <PricingPlans />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </Router>
  );
};

export default App;
