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
          <p>10th</p>
          <p><b>School</b> : Government Senior Secondary School</p>
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
        <ul>
          <li>Coding</li>
          <li>Participating Events</li>
          <li>Photography</li>
          <li>Video Games</li>
          <li>Listening Music</li>
        </ul>
    ),
  },
  {
    title: "Work Experience",
    content: (
      <ul>
          <li>I am working as a Compressor Operator since July 2024</li>
          <li>Created 5+ Websites (Front-End)</li>
        </ul>
      
    ),
  },
  {
    title: "How you can reach me?",
    content: (
      <ul className="about-link">
          <li><a href="https://linkedin.com/in/abc-edutech/" target="_blank">LinkedIn</a></li>
          <li><a href="mailto:rajapple6284@gmail.com" target="_blank">E-Mail</a></li>
          <li><a href="https://instagram.com/abc_edutech" target="_blank">Instagram</a></li>
          <li><a href="https://api.whatsapp.com/send/?phone=916284602841&text=Hello,%20Raj" target="_blank">WhatsApp</a></li>
        </ul>
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
      <h2 className="about-title com-head">About Me</h2>
      <div className="about-container">
        {aboutData.map((item, index) => (
          <div className="about-item" key={index}>
            <div
              className="about-header"
              onClick={() => toggleSection(index)}
            >
              <h3>{item.title}</h3>
              <span className="icon">
                {activeIndex === index ? "-" : "+"}
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
