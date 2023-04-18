// src/pages/index.js
import React from 'react';
import Tabuleiro from '../components/Tabuleiro';

const Home = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <h1>Jogo da Velha</h1>
      <Tabuleiro />
    </div>
  );
};

export default Home;
