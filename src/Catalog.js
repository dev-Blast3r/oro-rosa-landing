import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Importa las imágenes por categoría
import clasico1 from './images/clasico1.JPG';
import memecake1 from './images/memecake1.JPG';
import fechas_especiales1 from './images/fechas_especiales1.JPG';
import personalizado1 from './images/personalizado1.JPG';

const CatalogContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 50px;
  gap: 30px;
  background-color: #fdf3f2;
`;

const Category = styled.div`
  width: 300px;
  text-align: center;
  padding: 15px;
  border-radius: 15px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 2px solid transparent;
  background-image: linear-gradient(#fff, #fff), 
                    linear-gradient(45deg, #e6b8b7, #f2d7d5, #f1c1b4, #f6d4cc);
  background-origin: border-box;
  background-clip: content-box, border-box;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }

  h3 {
    font-family: 'Poppins', sans-serif;
    font-size: 1.75rem;
    color: #d29990;
    margin-bottom: 15px;
    font-weight: bold;
  }

  img {
    width: 90%;
    height: 250px;
    object-fit: cover;
    border-radius: 10px;
    border: 3px solid transparent;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }

  img:hover {
    transform: scale(1.05);
  }
`;

// Estilos para quitar subrayado y modificar el color del enlace
const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:hover {
    color: #d29990; /* Cambiar color al hacer hover */
  }
`;

const CatalogBottomSpace = styled.div`
  margin-bottom: 60px;
`;

const Catalog = () => {
  return (
    <CatalogBottomSpace>
      <CatalogContainer>
        <Category>
          <StyledLink to="/tortas-clasicas">
            <h3>Tortas Clásicas</h3>
            <img src={clasico1} alt="Torta Clásica" />
          </StyledLink>
        </Category>
        <Category>
          <StyledLink to="/meme-cakes">
            <h3>Meme Cakes</h3>
            <img src={memecake1} alt="Meme Cake" />
          </StyledLink>
        </Category>
        <Category>
          <StyledLink to="/fechas-especiales">
            <h3>Fechas Especiales</h3>
            <img src={fechas_especiales1} alt="Fechas Especiales" />
          </StyledLink>
        </Category>
        <Category>
          <StyledLink to="/personalizados">
            <h3>Personalizados</h3>
            <img src={personalizado1} alt="Personalizados" />
          </StyledLink>
        </Category>
      </CatalogContainer>
    </CatalogBottomSpace>
  );
};

export default Catalog;
