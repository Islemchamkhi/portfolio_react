import React from 'react';
import profileImage from './576013486_33286985614234276_378904598314389146_n.png';


function Home() {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <div className="profile-pic-placeholder">



 <img 
              src={profileImage} 
              alt="Islem Chamkhi"
              className="profile-image"
            />
            
            
          </div>
          <h1>Bienvenue le portfolio de islem chamkhi </h1>
          <p>étudiante en business intelligence passionné par la création d'applications web modernes </p>
        </div>
      </section>
      <div className="contact-info">
            <p>mail : islemchamkhi@gmail.com</p>
            <p>num :  52 037 926</p>
            <p>📍 Bizerte 7000, Tunisie</p>
          </div>

      <section className="skills">
        <h2>Mes Compétences</h2>
        <div className="skills-grid">
          <div className="skill-card">React</div>
          <div className="skill-card">Java</div>
                    <div className="skill-card">programmation C </div>
          <div className="skill-card">gestion de projet</div>
          <div className="skill-card">python</div>
          <div className="skill-card">Développement Web</div>
          <div className="skill-card">Analyse de Données</div>
        </div>
      </section>
    </div>
  );
}

export default Home;