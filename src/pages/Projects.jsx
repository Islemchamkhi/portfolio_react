import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';


import ecommerceImg from '../assets/ecommerce.jpg';
import weatherAppImg from '../assets/weather-app.jpg';
import taskManagerImg from '../assets/task-manager.jpg';
import healthTrackerImg from '../assets/health-tracker.jpg';
import personalFinanceDashImg from '../assets/personalfinancedash.jpg'; 

function Projects() {
  const [projects] = useState([
    {
      id: 1,
      title: "Site E-commerce",
      description: "Une plateforme de vente en ligne avec panier et paiement",
      technologies: ["React", "Node.js", "MongoDB"],
      fullDescription: "Développement complet d'une plateforme e-commerce avec fonctionnalités avancées de panier, système de paiement sécurisé et interface administrateur.",
      images: [ecommerceImg],
      links: { github: "#", demo: "#" }
    },
    {
      id: 2,
      title: "Application Météo",
      description: "Application météo avec prévisions sur 7 jours",
      technologies: ["React", "API REST", "CSS"],
      fullDescription: "Application météo utilisant une API externe pour les données en temps réel avec interface responsive et historique des recherches.",
      images: [weatherAppImg],
      links: { github: "#", demo: "#" }
    },
    {
      id: 3,
      title: "Gestionnaire de Tâches",
      description: "Application de gestion de tâches avec drag & drop",
      technologies: ["React", "Local Storage", "Styled Components"],
      fullDescription: "Application de productivité permettant de créer, organiser et suivre des tâches avec fonctionnalités de glisser-déposer et catégorisation.",
      images: [taskManagerImg],
      links: { github: "#", demo: "#" }
    },
    {
      id: 4,
      title: "HealthTrack - Suivi Médical",
      description: "Application de suivi santé et bien-être",
      technologies: ["React Native", "Firebase", "Chart.js", "Health API"],
      fullDescription: "Application mobile de suivi santé avec monitoring d'activité physique, rappels de médicaments, journal de symptômes et visualisation de données santé.",
      images: [healthTrackerImg],
      links: { 
        github: "https://github.com/tonusername/healthtrack", 
        demo: "https://healthtrack-demo.netlify.app" 
      },
      category: "health",
      featured: false
    },
    {
      id: 5,
      title: "FinanceDash - Tableau de Bord Financier",
      description: "Outil de gestion financière personnelle",
      technologies: ["React", "D3.js", "Node.js", "Plaid API"],
      fullDescription: "Tableau de bord financier interactif avec analyse des dépenses, prévisions budgétaires, visualisations avancées et intégration avec les comptes bancaires via API sécurisée.",
      images: [personalFinanceDashImg], 
      links: { 
        github: "https://github.com/tonusername/financedash", 
        demo: "https://financedash-app.netlify.app" 
      },
      category: "finance",
      featured: false
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