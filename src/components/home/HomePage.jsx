import React from "react";
import { useNavigate } from "react-router-dom";
import "./Homepage.css"; 

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className="hero-section">
        <div className="hero-content">
          <h1>Find Your Dream Home Today!</h1>
          <p>Discover properties that match your lifestyle and needs.</p>
          <button onClick={() => navigate("/properties_page")}>Buy</button>
        </div>
      </section>
        <div className="section-title">
        <div class="content">
          <h2>
            What We Offer
          </h2>
          <p>
           Discover limitless opportunities with SINETH HOMES, your trusted partner in real estate.
           Whether you're seeking breathtaking residential properties or high-yield investment opportunities, 
           we provide a comprehensive range of tailored solutions to meet your unique needs. Driven by a passion for excellence,
           our dedicated team is committed to delivering exceptional service, guiding you every step of the way. At SINETH HOMES,
           we don't just help you find a property – we help you create a lifestyle and secure your future. Let your
           property dreams come to life with SINETH HOMES, where innovation meets unmatched expertise.
          </p>
        </div>
        <div className="image-container">
    <img src="/images/homeimg/img543.jpg" alt="What We Offer" />
  </div>
  </div>
        
      <div className="container">
        <div className="card">
        <img src="/images/homeicons/buy.png" alt="Buy a home" className="icon" />


          <h3>Buy a home</h3>
          <p>
          Find your place with immersive photos and the most listings, including ones you won’t find elsewhere.
          </p>
          <button onClick={() => navigate("/properties_page")}>Browse homes</button>

        </div>

        <div className="card">
        <img src="/images/homeicons/contact.png" alt="contactus" className="icon" />

          <h3>Contact Us</h3>
          <p>
          Have questions or need support? Get in touch with us and let our team assist you with all your real estate needs.
          </p>
          <button onClick={() => navigate("/ContactUs")}>Contact Us</button>

        </div>

        <div className="card">
        <img src="/images/homeicons/about.png" alt="abutus" className="icon" />

          <h3>About Us</h3>
          <p>
          We're dedicated to helping you find the perfect home with expert guidance and trusted service every step of the way.
          </p>
          <button onClick={() => navigate("/aboutus_page")}>About Us</button>
        </div>
      </div>
    </>
  );
};

export default Homepage;
