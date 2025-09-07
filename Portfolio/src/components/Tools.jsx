import React from "react";
import "../Styles/Tools.css";

const tools = [
  {
    name: "GitHub",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png",
    color: "#181717",
  },
  {
    name: "VS Code",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png",
    color: "#007ACC",
  },
  {
    name: "Arduino IDE",
    icon: "https://cdn.worldvectorlogo.com/logos/arduino-1.svg",
    color: "#00979D",
  },
  {
    name: "Canva",
    icon: "https://public.canva.site/logo/media/dfb96cc174513093cd6ed61489ccb750.svg",
    color: "#00C4CC",
  },
  {
    name: "Figma",
    icon: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
    color: "#F24E1E",
  },
  {
    name: "Discord",
    icon: "https://logos-world.net/wp-content/uploads/2020/12/Discord-Logo.png",
    color: "#5865F2",
  },
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
            <img src={tool.icon} alt={tool.name} className="tool-icon" />
            <h3>{tool.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tools;
