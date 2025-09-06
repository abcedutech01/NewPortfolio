import React from "react";
import "../Styles/Skills.css";

const skills = [
  { name: "HTML", icon: "🌐", level: "Expert" },
  { name: "CSS", icon: "🎨", level: "Advanced" },
  { name: "JavaScript", icon: "⚡", level: "Intermediate" },
  { name: "Python", icon: "🐍", level: "Intermediate" },
  { name: "C and C++", icon: "💻", level: "Intermediate" },
  { name: "SQL", icon: "🗄️", level: "Intermediate" },
  { name: "MongoDB", icon: "🗄️", level: "Intermediate" },
];

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2 className="skills-title com-head">My Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-icon">{skill.icon}</div>
            <h3 className="skill-name">{skill.name}</h3>
            <p className="skill-level">{skill.level}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
