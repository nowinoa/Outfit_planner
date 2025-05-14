import React from 'react';
import './result_card.css';
import dummyOutfit from '../../assets/deletion/dummy_outfit.png';

const Result_card = () => {
  return (
    <div className="card">
      <div className="card-inner">
        <img src={dummyOutfit} alt="Outfit" className="card-image" />
      </div>
    </div>
  );
};

export default Result_card;
