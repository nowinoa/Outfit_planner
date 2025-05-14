import React from 'react';
import './user_input.css';

const Userinput = () => {
  return (
    <div className="userinput-wrapper">
      <p>Where are you located?</p>
      <input type="text" />

      <p>What's the dress code?</p>
      <input type="text" />

      <p>What's your style vibe</p>
      <div className="style-buttons">
        <button>Minimalist</button>
        <button>Trendy</button>
        <button>Cozy</button>
        <button>Edgy</button>
      </div>

      <button className="generate-btn">Generate Outfit</button>
    </div>
  );
};

export default Userinput;
