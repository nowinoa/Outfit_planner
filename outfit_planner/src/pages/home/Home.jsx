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
      <div className='result-pannel'>
        <h2>Recommended Outfits</h2>
        <div className='result-cards'>
          <Card />
          <Card />
          <Card />
        </div>
        <button className='reset-btn'>Re-style</button>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore et doloribus modi corrupti commodi in distinctio impedit, dolores reprehenderit porro quisquam asperiores inventore quam nostrum excepturi libero assumenda dignissimos minima. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis tenetur sint optio pariatur similique, molestias obcaecati, reiciendis voluptatibus totam autem impedit. Facilis, nisi! Nesciunt alias aliquid enim facilis tempore earum.</p>
        
      </div>
     
    </>
  );
};

export default Home;
