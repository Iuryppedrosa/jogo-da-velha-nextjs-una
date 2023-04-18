const Celula = ({ valor, onClick }) => {
    return (
      <button
        style={{
          width: '100px',
          height: '100px',
          fontSize: '2rem',
          fontWeight: 'bold',
          margin: '5px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          lineHeight: '100px',
          transition: 'all 0.3s', // Adiciona transição para mudanças de tamanho
        }}
        onClick={onClick}
      >
        {valor && <span style={{ fontSize: '3rem', textAlign: 'center' }}>{valor}</span>}
      </button>
    );
  };
  
  export default Celula;
  
