import React, { useState, useEffect } from 'react';
import countriesCities from 'countries-cities';
import './user_input.css';

const Userinput = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedStyle, setSelectedStyle] = useState('');
  const [isClicked, setIsClicked] = useState(false);
  const [selectedDressCode, setSelectedDressCode] = useState(false);

  useEffect(() => {
    const countryList = countriesCities.getCountries();
    setCountries(countryList); // already sorted alphabetically
  }, []);

  const handleCountryChange = (e) => {
    const country = e.target.value;
    setSelectedCountry(country);

    const cityList = countriesCities.getCities(country);
    const sortedCities = (cityList || []).sort((a, b) => a.localeCompare(b));

    setCities(sortedCities);
    setSelectedCity('');
  };

  const handleStyleClick = (style) => {
    if (selectedStyle === style) {
      setSelectedStyle(''); // unselect if already selected
    } else {
      setSelectedStyle(style); // select new style
    }
  };

  const handleGenerateClick = () => {
    setIsClicked(true);

    // Clear inputs
    setSelectedCountry('');
    setCities([]);
    setSelectedCity('');
    setSelectedStyle('');
    setSelectedDressCode('');


    // Reset click animation state
    setTimeout(() => {
      setIsClicked(false);
    }, 200);
  };

  return (
    <div className="userinput-wrapper">
      <p>Where are you located?</p>
      <select className="dropdown" value={selectedCountry} onChange={handleCountryChange}>
        <option value="">Select country...</option>
        {countries.map((country, idx) => (
          <option key={idx} value={country}>
            {country}
          </option>
        ))}
      </select>

      {selectedCountry && (
        <>
          <p>Choose your city</p>
          <select
            className="dropdown"
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
          >
            <option value="">Select city</option>
            {cities.map((city, idx) => (
              <option key={idx} value={city}>
                {city}
              </option>
            ))}
          </select>
        </>
      )}

      <p>What's the dress code?</p>
      <select className="dropdown" value={selectedDressCode} onChange={(e) => setSelectedDressCode(e.target.value)}>
        <option value="">Select...</option>
        <option value="casual">Casual</option>
        <option value="smart-casual">Smart Casual</option>
        <option value="business">Business</option>
        <option value="formal">Formal</option>
        <option value="party">Party</option>
      </select>

      <p>What's your style vibe</p>
      <div className="style-buttons">
        {['Minimalist', 'Trendy', 'Cozy', 'Edgy'].map((style) => (
          <button
            key={style}
            className={selectedStyle === style ? 'active' : ''}
            onClick={() => handleStyleClick(style)}
          >
            {style}
          </button>
        ))}
      </div>

      <button
        className={`generate-btn ${isClicked ? 'clicked' : ''}`}
        onClick={handleGenerateClick}
      >
        Generate Outfit
      </button>
    </div>
  );
};

export default Userinput;
