import React from 'react';
import Navbar from './components/navbar/Navbar.jsx';
import Home from './pages/home/Home.jsx';
import Outfits from './pages/outfits/Outfits.jsx';
import Closet from './pages/closet/Closet.jsx';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/outfits" element={<Outfits />} />
        <Route path="/closet" element={<Closet />} />
      </Routes>
    </Router>
  );
};

export default App;
