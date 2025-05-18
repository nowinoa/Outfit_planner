import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (path) => {
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
          className={`nav-btn ${location.pathname === '/' ? 'active' : ''}`}
          onClick={() => handleNavClick('/')}
        >
          Home
        </button>

        <button
          type="button"
          className={`nav-btn ${location.pathname === '/closet' ? 'active' : ''}`}
          onClick={() => handleNavClick('/closet')}
        >
          Wardrobe
        </button>

        <button
          type="button"
          className={`nav-btn ${location.pathname === '/outfits' ? 'active' : ''}`}
          onClick={() => handleNavClick('/outfits')}
        >
          Saved Outfits
        </button>
      </div>
    </div>
  );
};

export default Navbar;
