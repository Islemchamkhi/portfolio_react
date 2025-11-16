import React from 'react';
import { useParams, Link } from 'react-router-dom';

function ProjectDetail() {
  const { id } = useParams();
  
  const projects = {
    1: {
      title: "Site",
      fullDescription: "Développement complet d'une plateforme de bookclub",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      images: ["/project1.jpg"],
      links: { github: "#", demo: "#" }
    },
    2: {
      title: "Application Météo",
      fullDescription: "Application météo avec interface responsive et historique des recherches. Features incluent la géolocalisation, prévisions sur 7 jours et changement d'unités météo.",
      technologies: ["React"],
      images: ["/project2.jpg"],
      links: { github: "#", demo: "#" }
    },
    3: {
      title: "to do list",
      fullDescription: "Application de productivité permettant de créer, organiser et suivre des tâches avec fonctionnalités de glisser-déposer et catégorisation. Synchronisation avec le localStorage pour la persistance des données.",
      technologies: ["React", "Local Storage", "Styled Components", "React DnD"],
      images: ["/project3.jpg"],
      links: { github: "#", demo: "#" }
    } 
  };

  const project = projects[id];

  if (!project) {
    return (
      <div className="project-detail">
        <h1>Projet non trouvé</h1>
        <Link to="/projects" className="back-link">← Retour aux projets</Link>
      </div>
    );
  }

  return (
    <div className="project-detail">
      <Link to="/projects" className="back-link">← Retour aux projets</Link>
      
      <h1>{project.title}</h1>
      <p className="project-full-description">{project.fullDescription}</p>
      
      <div className="technologies-section">
        <h3>Technologies utilisées:</h3>
        <div className="technologies">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
      </div>

      <div className="project-links">
        <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="project-link">
          Code GitHub
        </a>
        <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="project-link">
          Voir la démo
        </a>
      </div>
    </div>
  );
}

export default ProjectDetail;