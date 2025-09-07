import React from "react";
import "../Styles/Hackathons.css";

const hackathons = [
  {
    name: "OdooXCGC Hackathon (Virtual)",
    date: "August 2025",
    image: "images/cgc2025h.png",
    repo: "https://github.com/yourusername/odooxcgc",
  },
  {
    name: "NextQuantom 2.0",
    date: "April 2025",
    image:"images/next2.jpg", // replace with your hackathon image
    repo: "https://github.com/yourusername/nextquantom2",
  },
  {
    name: "SIH (Smart India Hackathon) 2024",
    date: "September 2024",
    image: "images/sih2024h.jpg",
    repo: "https://github.com/yourusername/sih2024",
  },
  {
    name: "NextQuantom 1.0", //wheels on
    date: "March 2024",
    image: "images/next12024h.png", // replace with your hackathon image
    repo: "https://github.com/yourusername/nextquantom1",
  },
];

const Hackathons = () => {
  return (
    <section className="hackathons" id="hackathons">
      <h2 className="hackathons-title com-head">Hackathons</h2>
      <div className="hackathons-container">
        {hackathons.map((hack, index) => (
          <div className="hackathon-card" key={index}>
            <img src={hack.image} alt={hack.name} className="hackathon-image" />
            <div className="hackathon-content">
              <h3>{hack.name}</h3>
              <p>{hack.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hackathons;
