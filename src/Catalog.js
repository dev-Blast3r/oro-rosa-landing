import React from 'react';
import styled from 'styled-components';

// Asegúrate de tener las imágenes en la carpeta correcta
import cake1 from './cake1.png';
import cake2 from './cake2.png';
import cake3 from './cake3.png';

const CatalogContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 50px;
`;

const Category = styled.div`
  width: 30%;
  padding: 10px;
  box-sizing: border-box;
  text-align: center;

  h3 {
    font-family: 'Poppins', sans-serif;
    font-size: 1.5rem;
    color: #D29990;
    margin-bottom: 15px;
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }

  img:hover {
    transform: scale(1.05);
  }
`;

const Catalog = () => {
  return (
    <CatalogContainer>
      <Category>
        <h3>Tortas Clásicas</h3>
        <img src={cake1} alt="Torta Clásica" />
      </Category>
      <Category>
        <h3>Meme Cakes</h3>
        <img src={cake2} alt="Meme Cake" />
      </Category>
      <Category>
        <h3>Pasteles de Bodas</h3>
        <img src={cake3} alt="Pastel de Boda" />
      </Category>
    </CatalogContainer>
  );
};

export default Catalog;
