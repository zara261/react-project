
import React from 'react';
import './Hero.css'; 
import heroImg from "../assets/hero.png";


const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h3 className="brand-name">Digicsol System of IT</h3> {/* Added brand name here */}
        <h2>Master Your Skills: Unlocking Excellence</h2>
        <p>Embark On Your Professional Journey With Industry-leading Experts By Enrolling In Our Esteemed IT Programs</p>
        <div className="cta-buttons">
          <button className="cta-btn contact-btn">Contact Us</button>
          <button className="cta-btn learn-btn">Learn More</button>
        </div>
      </div>
      <div className="hero-image">
        <img src={heroImg} alt="Illustration of a person coding" />
      </div>
    </section>
  );
};

export default HeroSection;