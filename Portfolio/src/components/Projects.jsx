import React, { useState } from "react";
import "../Styles/Projects.css";

const projects = [
  {
    title: "Smart Traffic Management System",
    shortDesc: "An IoT-based system to optimize traffic flow and prioritize emergency vehicles.",
    details:
      "This project uses IR sensors and Arduino to adjust signal timing dynamically based on traffic density, detects emergency vehicles, and raises alarms for violations. It improves traffic efficiency and safety.",
    image: "public/images/profile.png",
    tech: ["Arduino", "IoT", "Sensors", "Embedded C"],
  },
  {
    title: "Ticket Raising Web Portal",
    shortDesc: "A web app where customers can raise tickets with attachments and track status.",
    details:
      "Developed during a hackathon, this app allows users to submit complaints with categories and attachments. Agents can view, update, and resolve tickets. Built within 8 hours as a hackathon project.",
    image: "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
    tech: ["React", "Node.js", "MongoDB", "Express"],
  },
  {
    title: "Portfolio Website",
    shortDesc: "A personal portfolio showcasing my projects, skills, and achievements.",
    details:
      "Built with React and Tailwind CSS, featuring responsive design, dark mode, and attractive animations. It highlights my work, hackathons, and technical journey.",
    image: "https://via.placeholder.com/400x250",
    tech: ["React", "TailwindCSS"],
  },
];

const Projects = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <section className="projects" id="projects">
      <h2 className="projects-title com-head">My Projects</h2>
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
