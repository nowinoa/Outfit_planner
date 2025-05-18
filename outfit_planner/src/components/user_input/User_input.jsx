import React from 'react';
import './user_input.css';

const Userinput = () => {
  return (
    <div className="userinput-wrapper">
      <p>Where are you located?</p>
      <input type="text" />

      <p>What's the dress code?</p>
      <select className="dropdown">
        <option value="">Select...</option>
        <option value="casual">Casual</option>
        <option value="smart-casual">Smart Casual</option>
        <option value="business">Business</option>
        <option value="formal">Formal</option>
        <option value="party">Party</option>
      </select>

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
