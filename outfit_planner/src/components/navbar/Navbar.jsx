import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

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
        <button type="button" className="nav-btn" onClick={() => navigate('/')}>Home</button>
        <button type="button" className="nav-btn" onClick={() => navigate('/closet')}>Wardrobe</button>
        <button type="button" className="nav-btn active" onClick={() => navigate('/outfits')}>Saved Outfits</button>
      </div>
    </div>
  );
};

export default Navbar;
