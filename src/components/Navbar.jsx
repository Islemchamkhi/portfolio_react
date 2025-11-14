import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar({ isLoggedIn, setIsLoggedIn }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/home">Mon Portfolio</Link>
      </div>
      
      {isLoggedIn && (
        <div className="nav-links">
          <Link to="/home">Accueil</Link>
          <Link to="/projects">Projets</Link>
          <Link to="/contact">Contact</Link>
          <button onClick={handleLogout} className="logout-btn">
            Déconnexion
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;