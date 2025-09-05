import React from "react";
import "../Styles/Header.css";
import "../images/profile.png";

const Header = () => {
  const handlescroll = (id) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
  }}
  return (
    <header className="header home" id="home">
      <div className="header-container">
        
        {/* Left Side - Text */}
        <div className="header-text">
          <h2 className="header-greeting">Hello there, I am</h2>
          <h1 className="header-name">Er. Raj Kumar</h1>
          <p className="header-tagline">
            A Passionate <span className="highlight">Front-End Web Developer</span> crafting
            creative and smart digital solutions for the web.
          </p>
          <div className="header-buttons">
            <a href="#skills" className="btn primary-btn" id="skilled" onClick={() => handleScroll("skilled")} >
              Explore Me !
            </a>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="header-image">
          <img
            src="/Portfolio/src/images/profile.png" 
            alt="Profile"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
