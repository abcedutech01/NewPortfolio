import React, { useState } from "react";
import "../Styles/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // ✅ Smooth scroll function
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // close menu on mobile after click
    }
  };

  return (
    <nav className="nav">
      <div className="container">
        <h1 className="head">Portfolio</h1>

        {/* Hamburger (only visible on mobile) */}
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Menu */}
        <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
          <li className="nav-content" onClick={() => handleScroll("home")}>Home</li>
          <li className="nav-content" onClick={() => handleScroll("skills")}>Skills</li>
          <li className="nav-content" onClick={() => handleScroll("frameworks")}>Frameworks</li>
          <li className="nav-content" onClick={() => handleScroll("hackathons")}>Hackathons</li>
          <li className="nav-content" onClick={() => handleScroll("projects")}>Projects</li>
          <li className="nav-content" onClick={() => handleScroll("tools")}>Tools</li>
          <li className="nav-content" onClick={() => handleScroll("events")}>Events</li>
          <li className="nav-content" onClick={() => handleScroll("about")}>About</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
