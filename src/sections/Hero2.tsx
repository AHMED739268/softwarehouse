import { useState, useEffect } from 'react';
import './Hero2.css';

const Hero2 = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fade out the hero image based on scroll
  const opacity = Math.max(0, 1 - scrollY / 300); // Disappear after ~300px scroll

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>TURN YOUR BIG IDEA INTO A THRIVING E-STORE</h1>
        <p>
          New to e-commerce? Don’t sweat it. We’ve got everything you need to get started and expand with minimal costs.
        </p>
        <button className="launch-btn">Launch Your Store</button>
      </div>
      <div className="hero-image-container">
        <img
          src="./images/sol.png"
          alt="E-commerce demo"
          className="hero-image"
          style={{ opacity }}
        />
      </div>
    </section>
  );
};

export default Hero2;