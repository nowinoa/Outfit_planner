import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import the hook
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate(); // Initialize the hook

  return (
    <div className='navbar'>
      <div className='logo'>Name</div>
      <div className='button-pannel'>
        <button className='home-btn' onClick={() => navigate('/')}>Home</button>
        <button className='closet-btn' onClick={() => navigate('/closet')}>Wardrobe</button>
        <button className='outfit-btn' onClick={() => navigate('/outfits')}>Saved Outfits</button>
      </div>
    </div>
  );
}

export default Navbar;
