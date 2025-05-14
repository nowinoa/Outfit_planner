import React from 'react';
import './hero.css';
import heroImage from '../../assets/hero.jpeg';

const Hero = () => {
  return (
    <div className='hero-container'>
      <img src={heroImage} alt="Wardrobe" className='hero-image' />
      <div className='hero-text'>
        <h1>
          LOST IN YOUR WARDROBE?<br />
          <span>NAME</span> GOT YOUR BACK.
        </h1>
      </div>
    </div>
  );
};

export default Hero;
