import React, { useState } from "react";
import "../Styles/About.css";

const aboutData = [
  {
    title: "Education",
    content: (
      <ul>
        <li>Graduation
          <p><b>B.Tech CSE</b> (Specilization in internetof things and cyber security with block chain technologies)</p>
          <p><b>University</b> : Punjab Technical University</p>
          <p><b>CGPA</b> : 6.21</p>
          <p><b>Batch</b> : 2022-2026</p>
        </li>
        <li>12th Education
          <p><b>12th</b> (Non-Medical)</p>
          <p><b>School</b> : Government Senior Secondary School</p>
          <p><b>%</b> : 68 (B+)</p>
          <p><b>Passing Year</b> : 2022</p>
        </li>
        <li>10th Education
          <p><b>12th</b> (Non-Medical)</p>
          <p><b>School</b> : Government Senior Secondary School (Multipurpose), Ludhiana</p>
          <p><b>%</b> : 95+ (A+)</p>
          <p><b>Passing Year</b> : 2020</p>
        </li>
      </ul>
    ),
  },
  {
    title: "Location",
    content: <p> Ludhiana, Pujab, India</p>,
  },
  {
    title: "Hobbies",
    content: (
      <p>Photography, Gaming, Coding, Listening Music</p>
    ),
  },
  {
    title: "Experience",
    content: (
      <p>
        👨‍💻 Worked on Smart Traffic Management System, Parking Management
        System, Hackathons, and Freelance Projects.
      </p>
    ),
  },
  {
    title: "How you can reach me?",
    content: (
      <p>
        Email: <a href="mailto:yourmail@gmail.com">rajapple6284@gmail.com</a>
        <br />
        <br />
        Phone: +91-6284602841
      </p>
    ),
  },
  {
    title: "My Social Media",
    content: (
      <p>Linkein</p>
    ),
  },
];

const About = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleSection = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="about" id="about">
      <h2 className="about-title">👤 About Me</h2>
      <div className="about-container">
        {aboutData.map((item, index) => (
          <div className="about-item" key={index}>
            <div
              className="about-header"
              onClick={() => toggleSection(index)}
            >
              <h3>{item.title}</h3>
              <span className="icon">
                {activeIndex === index ? "➖" : "➕"}
              </span>
            </div>
            {activeIndex === index && (
              <div className="about-content">{item.content}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
