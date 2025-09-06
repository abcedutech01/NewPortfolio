import React from "react";
import "../Styles/Tools.css";

const tools = [
  { name: "Git", emoji: "🔧", color: "#F1502F" },
  { name: "GitHub", emoji: "🐙", color: "#181717" },
  { name: "VS Code", emoji: "💻", color: "#007ACC" },
  { name: "Arduino IDE", emoji: "🤖", color: "#00979D" },
  { name: "Canva", emoji: "🎨", color: "#00C4CC" },
  { name: "Figma", emoji: "📐", color: "#F24E1E" },
  { name: "Discord", emoji: "💬", color: "#5865F2" },
];

const Tools = () => {
  return (
    <section className="tools" id="tools">
      <h2 className="tools-title com-head">Tools</h2>
      <div className="tools-container">
        {tools.map((tool, index) => (
          <div
            className="tool-card"
            key={index}
            style={{ borderTop: `5px solid ${tool.color}` }}
          >
            <div className="tool-icon">{tool.emoji}</div>
            <h3>{tool.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tools;
