import React, { useState } from "react";
import "../Styles/Projects.css";

const projects = [
  {
    title: "Ticket Raising Web Portal",
    // shortDesc: "A web app where customers can raise tickets with attachments and track status.",
    // details:
    //   "Developed during a hackathon, this app allows users to submit complaints with categories and attachments. Agents can view, update, and resolve tickets. Built within 8 hours as a hackathon project.",
    image: "images/cgc2025h.png",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Automatic Traffic Management System",
    // shortDesc: "A web app where customers can raise tickets with attachments and track status.",
    // details:
    //   "Developed during a hackathon, this app allows users to submit complaints with categories and attachments. Agents can view, update, and resolve tickets. Built within 8 hours as a hackathon project.",
    image: "images/next2.jpg",
    tech: ["Arduino IDE", "IR Sensor", "Motion Sensor", "Arduino UNO", "Embeded C"],
  },
  
  {
    title: "Rock - Paper - Scissor Game",
    // shortDesc: "A web app where customers can raise tickets with attachments and track status.",
    // details:
    //   "Developed during a hackathon, this app allows users to submit complaints with categories and attachments. Agents can view, update, and resolve tickets. Built within 8 hours as a hackathon project.",
    image: "images/rock.png",
    tech: ["C++"],
  },
  {
    title: "Wheels On Rent",
    // shortDesc: "A personal portfolio showcasing my projects, skills, and achievements.",
    // details:
    // "Built with React and Tailwind CSS, featuring responsive design, dark mode, and attractive animations. It highlights my work, hackathons, and technical journey.",
    image: "images/next12024h.png",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Typing Speed Tester (Get certificate instantly)",
    // shortDesc: "An IoT-based system to optimize traffic flow and prioritize emergency vehicles.",
    // details:
    //   "This project uses IR sensors and Arduino to adjust signal timing dynamically based on traffic density, detects emergency vehicles, and raises alarms for violations. It improves traffic efficiency and safety.",
    image: "images/typing.png",
    tech: ["HTML", "CSS", "JavaScript", "Python"],
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
