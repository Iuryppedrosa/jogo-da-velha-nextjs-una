// src/components/Tabuleiro.js
import React, { useState } from 'react';
import Celula from './Celula';

const Tabuleiro = () => {
  const [tabuleiro, setTabuleiro] = useState(Array(9).fill(null));
  const [jogadorX, setJogadorX] = useState(true);

  const handleClick = (index) => {
    if (tabuleiro[index] || verificaVencedor(tabuleiro)) return;
    const novoTabuleiro = [...tabuleiro];
    novoTabuleiro[index] = jogadorX ? 'X' : 'O';
    setTabuleiro(novoTabuleiro);
    setJogadorX(!jogadorX);
  };

  const verificaVencedor = (tabuleiro) => {
    const linhasVencedoras = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < linhasVencedoras.length; i++) {
      const [a, b, c] = linhasVencedoras[i];
      if (
        tabuleiro[a] &&
        tabuleiro[a] === tabuleiro[b] &&
        tabuleiro[a] === tabuleiro[c]
      ) {
        return tabuleiro[a];
      }
    }

    return null;
  };

  const renderCelula = (indice) => {
    return (
      <Celula
        key={indice}
        valor={tabuleiro[indice]}
        onClick={() => handleClick(indice)}
        style={{
          flex: '1', // Adiciona a propriedade flex para preencher todo o espaço disponível
          fontSize: tabuleiro[indice] ? '3rem' : '3rem', // define o tamanho com base no valor da célula
          fontWeight: 'bold',
        }}
      />
    );
  };

  const vencedor = verificaVencedor(tabuleiro);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '300px', margin: '0 auto',
}}>
<div style={{ display: 'flex', flexDirection: 'row' }}>
{renderCelula(0)}
{renderCelula(1)}
{renderCelula(2)}
</div>
<div style={{ display: 'flex', flexDirection: 'row' }}>
{renderCelula(3)}
{renderCelula(4)}
{renderCelula(5)}
</div>
<div style={{ display: 'flex', flexDirection: 'row' }}>
{renderCelula(6)}
{renderCelula(7)}
{renderCelula(8)}
</div>
{vencedor && (
<div style={{ marginTop: '1rem' }}>
Vencedor: {vencedor}
</div>
)}
</div>
);
};

export default Tabuleiro;