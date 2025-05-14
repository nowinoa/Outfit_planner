import React from 'react';
import './home.css';
import Hero from '../../components/hero/Hero.jsx';
import Userinput from '../../components/user_input/User_input.jsx';
import Card from '../../components/result_card/Result_card.jsx';

const Home = () => {
  return (
    <>
      <Hero />
      <Userinput />
      <Card />
    </>
  );
};

export default Home;
