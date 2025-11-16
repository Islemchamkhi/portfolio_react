import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaGoogle, FaFacebookF } from 'react-icons/fa';
import './Login.css';

function Login({ setIsLoggedIn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (email && password) {
      setIsLoggedIn(true);
      navigate('/home');
    } else {
      alert('Veuillez remplir tous les champs');
    }
  };

  return (
    <div className="login-container">
     
     
      <div className="background-image"></div>
      
      <div className="login-card">
        
        
        <h1 className="login-title">Enregister</h1>
        
    
    
        <div className="login-tabs">
          <div 
            className={`tab ${isLogin ? 'active' : ''}`} 
            onClick={() => setIsLogin(true)}
          >
            LOGIN
          </div>
          <div 
            className={`tab ${!isLogin ? 'active' : ''}`} 
            onClick={() => setIsLogin(false)}
          >
            SIGN IN
          </div>
        </div>

     
     
        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-group">
            <input 
              type="email" 
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>
          
          <div className="input-group">
            <input 
              type="password" 
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>

         
         

          <div className="forgot-password">
            <a href="#forgot">Forgot Password?</a>
          </div>

       
       
      
          <button type="submit" className="login-button">
            {isLogin ? 'LOGIN' : 'SIGN IN'}
          </button>
        </form>


        <div className="separator">
          <span>Or Login with</span>
        </div>

       
        <div className="social-buttons">
          <button className="social-button google">
            <FaGoogle className="social-icon" />
            Google
          </button>
          <button className="social-button facebook">
            <FaFacebookF className="social-icon" />
            Facebook
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;