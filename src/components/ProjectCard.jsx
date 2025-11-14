import React from 'react';
import { Link } from 'react-router-dom';

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      
      <div className="project-image-container">
        {project.images && project.images.length > 0 ? (
          <img 
            src={project.images[0]} 
            alt={`Capture d'écran du projet ${project.title}`}
            className="project-image"
            onError={(e) => {
              
              e.target.style.display = 'none';
            }}
          />
        ) : (
          <div className="project-image-placeholder">
            <span>🖼️ Aucune image</span>
          </div>
        )}
      </div>
      
      
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="technologies">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
        <Link to={`/project/${project.id}`} className="view-details">
          Voir les détails
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard;