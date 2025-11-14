import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaLock, FaGoogle, FaFacebook, FaEye, FaEyeSlash, FaHeart, FaSun, FaMoon, FaEnvelope } from 'react-icons/fa';
import './Login.css';

function Login({ setIsLoggedIn }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();


  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode) {
      setDarkMode(JSON.parse(savedMode));
    }
  }, []);

 
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, [darkMode]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (username && email && password) {
      setIsLoggedIn(true);
      navigate('/home');
    } else {
      alert('Veuillez remplir tous les champs');
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`login-container ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      
      <div className="animated-background">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
          <div className="shape shape-5"></div>
        </div>
        <div className="particle-field"></div>
        <div className="light-orbs">
          <div className="orb orb-1"></div>
          <div className="orb orb-2"></div>
          <div className="orb orb-3"></div>
        </div>
        <div className="floating-hearts">
          <div className="heart heart-1">❤</div>
          <div className="heart heart-2">❤</div>
          <div className="heart heart-3">❤</div>
        </div>
      </div>
      
      
      <button className="theme-toggle" onClick={toggleDarkMode} title={darkMode ? 'Mode Clair' : 'Mode Sombre'}>
        {darkMode ? <FaSun className="theme-icon" /> : <FaMoon className="theme-icon" />}
      </button>
      
      <div className="login-card">
        
        <div className="login-header">
          <div className="logo-container">
            <div className="logo-glow"></div>
            <FaHeart className="logo-icon" />
          </div>
          <h1 className="login-title">
            <span className="title-text">Connexion</span>
            <div className="title-underline"></div>
          </h1>
          <p className="login-subtitle">Entrez dans votre univers rose</p>
        </div>

       
        <form onSubmit={handleSubmit} className="login-form">
          {/* Champ Nom d'utilisateur */}
          <div className="input-group">
            <div className="input-icon">
              <FaUser />
            </div>
            <input 
              type="text" 
              placeholder="Nom d'utilisateur"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required 
              className="input-field"
            />
            <div className="input-focus-line"></div>
          </div>

        
        
          <div className="input-group">
            <div className="input-icon">
              <FaEnvelope />
            </div>
            <input 
              type="email" 
              placeholder="Adresse email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
              className="input-field"
            />
            <div className="input-focus-line"></div>
          </div>



          <div className="input-group">
            <div className="input-icon">
              <FaLock />
            </div>
            <input 
              type={showPassword ? "text" : "password"} 
              placeholder="Mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
              className="input-field"
            />
            <button 
              type="button"
              className="password-toggle"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash className="eye-icon" /> : <FaEye className="eye-icon" />}
            </button>
            <div className="input-focus-line"></div>
          </div>

          <button type="submit" className="login-button">
            <span className="button-text">S'identifier</span>
            <div className="button-sparkle"></div>
            <div className="button-glow"></div>
          </button>
        </form>

       
       
        <div className="animated-separator">
          <div className="separator-dot"></div>
          <div className="separator-dot"></div>
          <div className="separator-dot"></div>
        </div>



        <div className="social-buttons">
          <button className="social-btn google-btn">
            <FaGoogle className="social-icon" />
            <span>Google</span>
            <div className="social-hover-effect"></div>
          </button>
          <button className="social-btn facebook-btn">
            <FaFacebook className="social-icon" />
            <span>Facebook</span>
            <div className="social-hover-effect"></div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;