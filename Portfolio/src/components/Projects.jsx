import React, { useState } from "react";
import "../Styles/Projects.css";

const projects = [
  {
    title: "Ticket Raising Web Portal",
    shortDesc: "A web app where customers can raise tickets with attachments and track status.",
    details:
      "Developed during a hackathon, this app allows users to submit complaints with categories and attachments. Agents can view, update, and resolve tickets. Built within 8 hours as a hackathon project.",
    image: "images/cgc2025h.png",
    tech: ["React", "Node.js", "MongoDB", "Express"],
  },
  {
    title: "Smart Traffic Management System",
    shortDesc: "A personal portfolio showcasing my projects, skills, and achievements.",
    details:
    "Built with React and Tailwind CSS, featuring responsive design, dark mode, and attractive animations. It highlights my work, hackathons, and technical journey.",
    image: "images/next2.jpg",
    tech: ["React", "TailwindCSS"],
  },
  {
    title: "Smart Traffic Management System",
    shortDesc: "An IoT-based system to optimize traffic flow and prioritize emergency vehicles.",
    details:
      "This project uses IR sensors and Arduino to adjust signal timing dynamically based on traffic density, detects emergency vehicles, and raises alarms for violations. It improves traffic efficiency and safety.",
    image: "",
    tech: ["Arduino", "IoT", "Sensors", "Embedded C"],
  },
];

const Projects = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <section className="projects" id="projects">
      <h2 className="projects-title com-head">My Projects (To be add)</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div
            className={`project-item ${index % 2 === 0 ? "left" : "right"}`}
            key={index}
          >
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p className="short-desc">{project.shortDesc}</p>
              <div className="tech-stack">
                {project.tech.map((t, i) => (
                  <span key={i} className="tech">
                    {t}
                  </span>
                ))}
              </div>
              <button
                className="expand-btn"
                onClick={() => toggleExpand(index)}
              >
                {expanded === index ? "−" : "+"}
              </button>
              {expanded === index && (
                <p className="details">{project.details}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
