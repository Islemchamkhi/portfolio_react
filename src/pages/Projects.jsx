import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';

function Projects() {
  const [projects] = useState([
    {
      id: 1,
      title: "Site E-commerce",
      description: "Une plateforme de vente en ligne avec panier et paiement",
      technologies: ["React", "Node.js", "MongoDB"],
      fullDescription: "Développement complet d'une plateforme e-commerce avec fonctionnalités avancées de panier, système de paiement sécurisé et interface administrateur.",
      images: ["/project1.jpg"],
      links: { github: "#", demo: "#" }
    },
    {
      id: 2,
      title: "Application Météo",
      description: "Application météo avec prévisions sur 7 jours",
      technologies: ["React", "API REST", "CSS"],
      fullDescription: "Application météo utilisant une API externe pour les données en temps réel avec interface responsive et historique des recherches.",
      images: ["/project2.jpg"],
      links: { github: "#", demo: "#" }
    },
    {
      id: 3,
      title: "Gestionnaire de Tâches",
      description: "Application de gestion de tâches avec drag & drop",
      technologies: ["React", "Local Storage", "Styled Components"],
      fullDescription: "Application de productivité permettant de créer, organiser et suivre des tâches avec fonctionnalités de glisser-déposer et catégorisation.",
      images: ["/project3.jpg"],
      links: { github: "#", demo: "#" }
    }
  ]);

  return (
    <div className="projects-page">
      <h1>Mes Projets</h1>
      <div className="projects-grid">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;