import React from "react";
import "./Aboutus.css";
import aboutimage from "../../assets/aboutus.jpeg";


const Aboutus = () => {
  return (
    <div className="about-us">
      <div className="about-us-container">
        <div className="about-us-content">
          <h1 className="about-us-title">About Us</h1>
          <p className="about-us-description">
            Welcome to our platform, where you can explore a wide range of properties tailored to meet your needs. Our mission is to make property searches simple, efficient, and enjoyable. Whether you're looking for a house, flat, or any other type of property, we are here to help you find your perfect match.
          </p>
          <p className="about-us-mission">
            We believe in transparency, reliability, and innovation. By leveraging cutting-edge technology, we ensure a seamless experience for our users. Our platform connects you with properties that suit your lifestyle and preferences.
          </p>
        </div>
        <div className="aboutusimage1">
        <img src={aboutimage} alt="aboutusimage" />
        </div>
        </div>
     {/* Why Choose Us Section */}
     <div className="why-choose-us">
        <h2 className="why-title">Why Choose Us</h2>
        <div className="why-cards">
          <div className="why-card">
            <h3>Extensive Listings</h3>
            <p>
              Access a diverse range of properties to find the perfect match for your needs.
            </p>
          </div>
          <div className="why-card">
            <h3>Trusted Experts</h3>
            <p>
              Work with experienced professionals who guide you through every step.
            </p>
          </div>
          <div className="why-card">
            <h3>Seamless Experience</h3>
            <p>
              Enjoy a smooth and hassle-free journey from search to settlement.
            </p>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Aboutus;
