import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="logo">Zid</div>
        <ul className="nav-links">
          <li>Solutions</li>
          <li>Pricing</li>
          <li>Why Zid?</li>
          <li>How Zid Serves You?</li>
          <li>Enterprise</li>
          <li>Resources</li>
        </ul>
        <div className="nav-right">
          <span>AR</span>
          <button className="login-btn">Login</button>
          <button className="create-store-btn">Create a store</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;