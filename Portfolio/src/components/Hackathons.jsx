import React from "react";
import "../Styles/Hackathons.css";

const hackathons = [
  {
    name: "NextQuantom 1.0",
    date: "March 2024",
    image: "https://via.placeholder.com/400x250", // replace with your hackathon image
    repo: "https://github.com/yourusername/nextquantom1",
  },
  {
    name: "SIH (Smart India Hackathon)",
    date: "September 2024",
    image: "https://via.placeholder.com/400x250",
    repo: "https://github.com/yourusername/sih2024",
  },
  {
    name: "NextQuantom 2.0",
    date: "April 2025",
    image:"images/nextquantom2.0", // replace with your hackathon image
    repo: "https://github.com/yourusername/nextquantom2",
  },
  {
    name: "OdooXCGC Hackathon (Virtual)",
    date: "August 2025",
    image: "https://via.placeholder.com/400x250",
    repo: "https://github.com/yourusername/odooxcgc",
  },
];

const Hackathons = () => {
  return (
    <section className="hackathons" id="hackathons">
      <h2 className="hackathons-title">Hackathons</h2>
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
