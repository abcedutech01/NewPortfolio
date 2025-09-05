import React from "react";
import "../Styles/Footer.css";

const Footer = () => {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // close menu on mobile after click
    }
  }
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand */}
        <div className="footer-brand">
          <h2>That's My Portfolio</h2>
          <p>Building ideas with code & creativity</p>
        </div>

        {/* Social Media */}
        <div className="footer-social">
          <h3>Connect with me</h3>
          <div className="social-icons">
            <a href="https://linkedin.com/in/abc-edutech/" target="_blank" rel="noreferrer">🔗</a>
            <a href="https://instagram.com/abc_edutech" target="_blank" rel="noreferrer">📸</a>
            <a href="https://github.com/abcedutech01" target="_blank" rel="noreferrer">🐦</a>
            <a href="mailto:rajapple6284@gmail.com">📧</a>
            <a href="https://api.whatsapp.com/send/?phone=916284602841">📧</a>
          </div>
        </div>
      </div>

      {/* Bottom note */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Raj Portfolio | All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
