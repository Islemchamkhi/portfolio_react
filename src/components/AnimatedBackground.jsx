import React, { useEffect } from 'react';

const AnimatedBackground = () => {
  useEffect(() => {
    createStars();
    createParticles();
    createHearts();
  }, []);

  const createStars = () => {
    const starsContainer = document.querySelector('.stars');
    if (!starsContainer) return;

    for (let i = 0; i < 100; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.cssText = `
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        width: ${Math.random() * 2 + 1}px;
        height: ${Math.random() * 2 + 1}px;
        --duration: ${Math.random() * 3 + 2}s;
        animation-delay: ${Math.random() * 5}s;
      `;
      starsContainer.appendChild(star);
    }
  };

  const createParticles = () => {
    const particlesContainer = document.querySelector('.particles');
    if (!particlesContainer) return;

    for (let i = 0; i < 40; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.cssText = `
        left: ${Math.random() * 100}%;
        width: ${Math.random() * 6 + 3}px;
        height: ${Math.random() * 6 + 3}px;
        --duration: ${Math.random() * 15 + 10}s;
        animation-delay: ${Math.random() * 5}s;
      `;
      particlesContainer.appendChild(particle);
    }
  };

  const createHearts = () => {
    const heartsContainer = document.querySelector('.hearts');
    if (!heartsContainer) return;

    for (let i = 0; i < 20; i++) {
      const heart = document.createElement('div');
      heart.className = 'heart';
      heart.innerHTML = '❤';
      heart.style.cssText = `
        left: ${Math.random() * 100}%;
        font-size: ${Math.random() * 10 + 15}px;
        --duration: ${Math.random() * 20 + 15}s;
        animation-delay: ${Math.random() * 10}s;
        opacity: ${Math.random() * 0.3 + 0.1};
      `;
      heartsContainer.appendChild(heart);
    }
  };

  return (
    <>
      <div className="stars"></div>
      <div className="particles"></div>
      <div className="hearts"></div>
      <div className="bubbles">
        <div className="bubble bubble-1"></div>
        <div className="bubble bubble-2"></div>
        <div className="bubble bubble-3"></div>
        <div className="bubble bubble-4"></div>
        <div className="bubble bubble-5"></div>
      </div>
      <div className="rose-waves">
        <div className="rose-wave"></div>
        <div className="rose-wave"></div>
        <div className="rose-wave"></div>
      </div>
      <div className="light-beams">
        <div className="beam"></div>
        <div className="beam"></div>
        <div className="beam"></div>
        <div className="beam"></div>
      </div>
      <div className="animated-grid"></div>
    </>
  );
};

export default AnimatedBackground;