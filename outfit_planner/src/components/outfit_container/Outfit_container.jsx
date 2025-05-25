import './Outfit_container.css';
import React from 'react';
import jeans from '../../assets/deletion/jeans.png';
import blueTop from '../../assets/deletion/blue_top.png';

const clothes = [blueTop, jeans];

const OutfitContainer = () => {
  return (
    <div className="outfit-container">
      <div className="outfit-title">
        <h2>SAVED OUTFIT #x</h2>
      </div>
      <div className="outfit-clothes">
        {clothes.map((item, index) => (
          <img key={index} src={item} alt={`Clothing ${index}`} className="outfit-image" />
        ))}
      </div>
    </div>
  );
};

export default OutfitContainer;
