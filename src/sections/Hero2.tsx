import { useState, useEffect } from 'react';
import './Hero2.css';
import { title } from 'framer-motion/client';

interface Hero2Props {

  title: string;
  description: string;
  buttonText: string;
  image: string;
}
const Hero2 = (title:string,description:string,buttonText:string,image:string) => {
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
        <h1>{title}</h1>
        <p>
          {description}
        </p>
        <button className="launch-btn">{buttonText}</button>
      </div>
      <div className="hero-image-container">
        <img
          src={image}
          alt="E-commerce demo"
          className="hero-image"
          style={{ opacity }}
        />
      </div>
    </section>
  );
};

export default Hero2;