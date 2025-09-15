import React from 'react';
import './About.css'; // CSS file for styling
import aboutImg from "../assets/about.png";

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-left">
        <img src={aboutImg} alt="Logo" className="about-logo" /> {/* Replace with actual logo path */}
        <h6>Digicsol <br/> System</h6>
      </div>
      
<div className="blue-line"></div>
      <div className="about-right">
        <h3>Welcome To Digicsol-System</h3>
        <p>
          Digicsol-System offers a range of services, including Website Development, Graphic Designing, Digital Marketing, and Mobile Apps Development. Our additional services include website design, API development, SEO, and iOS app development. Our web developers have successfully launched several large projects and have proven their skills in many projects. As a company, we are responsible for the work, and we strive to maintain the best relationship with our clients. With our unique research-based process, we have designed hundreds of Websites, Mobile Apps, Logos, and Icons for our clients. Throughout the last 10 years, our software house has provided the best IT services.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
