import React from "react";
import "../Styles/Frameworks.css";

const frameworks = [
  {
    name: "Tailwind CSS",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    description: "Utility-first CSS framework for modern web design",
  },
  {
    name: "Bootstrap",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg",
    description: "Popular front-end toolkit for responsive design",
  },
  {
    name: "React",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    description: "JavaScript library for building UI components",
  },
];

const Frameworks = () => {
  return (
    <section className="frameworks" id="frameworks">
      <h2 className="frameworks-title">🛠️ Frameworks I Use</h2>
      <div className="frameworks-container">
        {frameworks.map((fw, index) => (
          <div className="framework-card" key={index}>
            <img src={fw.logo} alt={fw.name} className="framework-logo" />
            <h3 className="framework-name">{fw.name}</h3>
            <p className="framework-desc">{fw.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Frameworks;
