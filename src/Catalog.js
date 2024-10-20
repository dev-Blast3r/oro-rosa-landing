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
  gap: 30px;
  background-color: #fdf3f2; /* Fondo suave */
`;

const StyledLink = styled.a`
  text-decoration: none; /* Elimina el subrayado */
  color: inherit; /* Mantiene el color del texto */
  
  &:hover {
    text-decoration: none; /* Asegura que no haya subrayado en hover */
  }
`;

const Category = styled.div`
  width: 300px;
  text-align: center;
  padding: 15px;
  border-radius: 15px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  /* Borde con degradado ajustado a oro-rosa metálico */
  border: 2px solid transparent;
  background-image: linear-gradient(#fff, #fff), 
                    linear-gradient(45deg, #e6b8b7, #f2d7d5, #f1c1b4, #f6d4cc); /* Oro rosa metálico más definido */
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

const CatalogBottomSpace = styled.div`
  margin-bottom: 60px;
`;

const Catalog = () => {
  return (
    <CatalogBottomSpace>
      <CatalogContainer>
        <Category>
          <StyledLink href="/tortas-clasicas">
            <h3>Tortas Clásicas</h3>
            <img src={cake1} alt="Torta Clásica" />
          </StyledLink>
        </Category>
        <Category>
          <StyledLink href="/meme-cakes">
            <h3>Meme Cakes</h3>
            <img src={cake2} alt="Meme Cake" />
          </StyledLink>
        </Category>
        <Category>
          <StyledLink href="/pasteles-de-grado">
            <h3>Pasteles de Grado</h3>
            <img src={cake3} alt="Pastel de Grado" />
          </StyledLink>
        </Category>
        <Category>
          <StyledLink href="/personalizados">
            <h3>Personalizados</h3>
            <img src={cake3} alt="Pastel Personalizado" />
          </StyledLink>
        </Category>
      </CatalogContainer>
    </CatalogBottomSpace>
  );
};

export default Catalog;
