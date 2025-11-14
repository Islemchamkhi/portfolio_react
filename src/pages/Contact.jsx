import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [touched, setTouched] = useState({});

  const mapContainerStyle = {
    width: '100%',
    height: '300px',
    borderRadius: '12px'
  };

  const center = {
    lat: 37.2742,  
    lng: 9.8739
  };

  const mapOptions = {
    zoomControl: true,
    tilt: 0,
    gestureHandling: 'cooperative',
    styles: [
      {
        featureType: 'all',
        elementType: 'geometry',
        stylers: [{ color: '#f5f5f5' }]
      },
      {
        featureType: 'all',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#d86464' }]
      }
    ]
  };

  const errors = {
    name: formData.name.length < 2 ? 'Le nom doit contenir au moins 2 caractères' : '',
    email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) ? 'Email invalide' : '',
    message: formData.message.length < 10 ? 'Le message doit contenir au moins 10 caractères' : ''
  };

  const isFormValid = Object.values(errors).every(error => error === '') && 
                     formData.name.trim() !== '' && 
                     formData.email.trim() !== '' && 
                     formData.message.trim() !== '';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!isFormValid) {
      setTouched({
        name: true,
        email: true,
        subject: true,
        message: true
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
     
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Message envoyé:', formData);
      setSubmitStatus('success');
      
     
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setTouched({});

    } catch (error) {
      console.error('Erreur:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    setTouched({});
    setSubmitStatus(null);
  };

 
  const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY || 'YOUR_GOOGLE_MAPS_API_KEY';

  return (
    <div className="contact-page">
    
      <div className="contact-hero">
        <h1>Contactez-moi</h1>
        <p className="hero-subtitle">
          Bienvenue sur mon portfolio ! N'hésitez pas à me contacter pour discuter 
          de vos projets de développement web et mobile.
        </p>
      </div>

      <div className="contact-container">
        
        <div className="contact-info-section">
          <h2>Prendre Contact</h2>
          <p className="info-description">
            Je suis passionné par la création de solutions digitales innovantes. 
            Discutons de la manière dont je peux vous aider à concrétiser vos idées.
          </p>

          <div className="contact-details">
            <div className="contact-detail-item">
              <div className="detail-icon">📍</div>
              <div className="detail-content">
                <h3>Adresse</h3>
                <p>Bizerte, Tunisie</p>
                <small>Disponible pour des projets en remote</small>
              </div>
            </div>

            <div className="contact-detail-item">
              <div className="detail-icon">📱</div>
              <div className="detail-content">
                <h3>Téléphone</h3>
                <p>+216 52 037 926</p>
              </div>
            </div>

            <div className="contact-detail-item">
              <div className="detail-icon">📧</div>
              <div className="detail-content">
                <h3>Email</h3>
                <p>isslemchamkhii@gmail.com</p>
              </div>
            </div>

           
          </div>


          <div className="map-section">
         
            <div className="map-container">
              {googleMapsApiKey && googleMapsApiKey !== 'YOUR_GOOGLE_MAPS_API_KEY' ? (
                <LoadScript googleMapsApiKey={googleMapsApiKey}>
                  <GoogleMap
                    mapContainerStyle={mapContainerStyle}
                    center={center}
                    zoom={12}
                    options={mapOptions}
                  >
                    <Marker 
                      position={center}
                      icon={{
                        url: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDJDNy41ODYgMiA0IDUuNTg2IDQgMTBDNCAxNC40MTQgNy41ODYgMTggMTIgMThDMTYuNDE0IDE4IDIwIDE0LjQxNCAyMCAxMEMyMCA1LjU4NiAxNi40MTQgMiAxMiAyWk0xMiAxMkMxMC44OTcgMTIgMTAgMTEuMTAzIDEwIDEwQzEwIDguODk3IDEwLjg5NyA4IDEyIDhDMTMuMTAzIDggMTQgOC44OTcgMTQgMTBDMTQgMTEuMTAzIDEzLjEwMyAxMiAxMiAxMloiIGZpbGw9IiNkODY0NjQiLz4KPC9zdmc+',
                        scaledSize: new window.google.maps.Size(40, 40),
                      }}
                    />
                  </GoogleMap>
                </LoadScript>
              ) : (
                <div className="map-fallback">
                  
                </div>
              )}
            </div>
            <p className="map-note">
              Basé à Bizerte, je travaille sur des projets nationaux et internationaux
            </p>
          </div>

          
          <div className="expertise-badge">
            <div className="badge-icon">⚡</div>
            <div className="badge-content">
              <h4>Développeur Full Stack</h4>
              
            </div>
          </div>
        </div>


        <div className="contact-form-section">
          <div className="form-header">
            <h2>Écrivez-moi un message</h2>
            <p>Je vous répondrai dans les plus brefs délais</p>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Nom complet *</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  placeholder="Votre nom et prénom"
                  className={touched.name && errors.name ? 'error' : ''}
                  disabled={isSubmitting}
                />
                {touched.name && errors.name && (
                  <span className="error-message">{errors.name}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  placeholder="*****@gmail.com"
                  className={touched.email && errors.email ? 'error' : ''}
                  disabled={isSubmitting}
                />
                {touched.email && errors.email && (
                  <span className="error-message">{errors.email}</span>
                )}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Téléphone</label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="+216 "
                  disabled={isSubmitting}
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Sujet</label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Ecrit votre message"
                  disabled={isSubmitting}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                rows="6"
                required
                placeholder="Décrivez votre projet, vos besoins ou toute question que vous pourriez avoir..."
                className={touched.message && errors.message ? 'error' : ''}
                disabled={isSubmitting}
              ></textarea>
              {touched.message && errors.message && (
                <span className="error-message">{errors.message}</span>
              )}
              <div className="character-count">
                {formData.message.length}/500 caractères
              </div>
            </div>

            {submitStatus === 'success' && (
              <div className="status-message success">
                ✅ Message envoyé avec succès ! Je vous contacte très rapidement.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="status-message error">
                ❌ Une erreur est survenue. Veuillez réessayer ou me contacter directement par email.
              </div>
            )}

            <div className="form-actions">
              <button 
                type="submit" 
                className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                disabled={!isFormValid || isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner"></span>
                    Envoi en cours...
                  </>
                ) : (
                  'Envoyer le message'
                )}
              </button>

              <button 
                type="button" 
                onClick={resetForm}
                className="btn-secondary"
                disabled={isSubmitting}
              >
                Réinitialiser
              </button>
            </div>
          </form>

         
          <div className="social-section">
            <h3>Suivez-moi sur les réseaux</h3>
            <div className="social-links-container">
          
              <a 
                href="https://www.linkedin.com/in/isslem-chamkhi/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-link"
              >
                <span></span> LinkedIn
              </a>
              <a 
                href="https://github.com/isslemchamkhi" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-link"
              >
                <span></span> GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;