import React from "react";

function ProjectItem({ name, about, technologies }) {
  // Map over the technologies array and create a <span> for each technology
  const technologyElements = technologies.map((technology, index) => (
    <span key={index}>{technology}</span>
  ));

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">{technologyElements}</div>
    </div>
  );
}

export default ProjectItem;
