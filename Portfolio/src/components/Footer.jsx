import React from "react";
import "../Styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Side */}
        <div className="footer-left">
          <h2 className="footer-logo">This is My Portfolio</h2>
          <p className="footer-tagline">
            Love Code Love Creativity
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Raj Portfolio | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
