import React from 'react';
import './Footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  const year = new Date().getFullYear(); // Get the current year dynamically
  
  return (
    <footer className="footer py-3 bg-light text-center">
      <div className="Footercontainer">
        <p>&copy; {year} SINETH HOMES. All Rights Reserved.</p>
        <div className="social-icons">
          <a href="#" target="_blank" rel="noopener noreferrer" className="social-icon p-2">
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="social-icon p-2">
            <i className="fab fa-github fa-2x"></i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="social-icon p-2">
            <i className="fab fa-facebook fa-2x"></i>
          </a>
        </div>
        <p>
          Sineth Wickramarachchi | University of Westminster | Computer Science and Engineering |
          5COSC026W Advanced Client-Side Web Development
        </p>
      </div>
    </footer>
  );
}

export default Footer;
