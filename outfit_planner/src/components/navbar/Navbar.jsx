import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePath, setActivePath] = useState('/'); // default page

  const handleNavClick = (path) => {
    setActivePath(path);     
    setMenuOpen(false);      
    navigate(path);          
  };

  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="Outfique logo" />
      </div>

      <button
        type="button"
        className="burger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        &#9776;
      </button>

      <div className={`nav-buttons ${menuOpen ? 'open' : ''}`}>
        <button
          type="button"
          className={`nav-btn ${activePath === '/' ? 'active' : ''}`}
          onClick={() => handleNavClick('/')}
        >
          Home
        </button>

        <button
          type="button"
          className={`nav-btn ${activePath === '/closet' ? 'active' : ''}`}
          onClick={() => handleNavClick('/closet')}
        >
          Wardrobe
        </button>

        <button
          type="button"
          className={`nav-btn ${activePath === '/outfits' ? 'active' : ''}`}
          onClick={() => handleNavClick('/outfits')}
        >
          Saved Outfits
        </button>
      </div>
    </div>
  );
};

export default Navbar;
