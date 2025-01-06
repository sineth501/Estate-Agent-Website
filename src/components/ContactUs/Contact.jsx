import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  // Initialize form data state with default values
  const [formData, setFormData] = useState({
    name: '', 
    email: '', 
    message: '', 
    propertyType: 'Residential', 
    viewingDate: '', 
  });

  // Handle changes to form inputs
  const handleChange = (e) => {
    // Update the corresponding field in formData state
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    alert('Form submitted successfully!'); // Notify the user
    console.log(formData); // Log the form data to the console (for debugging purposes)
  };

  return (
    <div className="contact-container"> 
      <div className="description-wrapper"> 
        <div className="description"> 
        <h1 className="topiccontact-heading">Get in Touch with SINETH HOMES</h1>
          <p>
          Looking for the perfect property to call home or invest in? At SINETH HOMES, we are dedicated to helping you find a property that suits your unique needs and aspirations. Our team understands that purchasing a property is not just a transaction—it’s a life-changing decision. That’s why we go above and beyond to provide you with exceptional service and expert guidance throughout your journey. Whether you’re searching for a modern apartment, a cozy family home, or a luxury villa, we have an extensive range of carefully curated properties designed to meet a variety of tastes and lifestyles. 
         </p>
         <p>
          We believe in building trust through transparency, ensuring that you have all the information you need to make an informed decision. Our experienced professionals are here to answer all your questions, provide personalized recommendations, and walk you through every step of the buying process with care and attention. At SINETH HOMES, we’re not just helping you buy a property—we’re helping you invest in your future and create a place where memories are made.
         </p>
         <p>
          Don’t let the stress of property hunting hold you back. Get in touch with us today and let our expert team guide you toward finding the perfect property that you can truly call your own. With SINETH HOMES, your dream home is just within reach!
         </p>
          <img
            src="/images/homeimg/img543.jpg" 
            alt="Person explaining" 
            className="description-image" 
          />
        </div>
      </div>

      <div className="form-wrapper"> 
        <h2 className="contact-heading">Contact Us</h2> 
        <form className="contact-form" onSubmit={handleSubmit}> 
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <select
            name="propertyType"
            value={formData.propertyType}
            onChange={handleChange}
          >
            <option value="Residential">Residential</option> 
            <option value="Commercial">Commercial</option> 
            <option value="Land">Land</option> 
          </select>
          <input
            type="date"
            name="viewingDate"
            value={formData.viewingDate}
            onChange={handleChange}
            required
          />
          <button type="submit">Submit</button> 
        </form>
      </div>
    </div>
  );
};

export default Contact;
