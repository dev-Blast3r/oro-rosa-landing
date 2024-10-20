import React from 'react';
import styled from 'styled-components';

// Importa las imágenes de personalizados
import personalizado1 from './images/personalizado1.JPG';
import personalizado2 from './images/personalizado2.JPG';
import personalizado3 from './images/personalizado3.JPG';

const PageContainer = styled.div`
  text-align: center;
  padding: 20px;
`;

const Title = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: 2.5rem;
  color: #d29990;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const CatalogContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 768px) {
    gap: 15px;
  }
`;

const Category = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;

  @media (max-width: 768px) {
    width: 90%;
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
    transition: transform 0.3s ease;
  }

  img:hover {
    transform: scale(1.05);
  }
`;

const Button = styled.a`
  display: inline-block;
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #d29990;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-family: 'Poppins', sans-serif;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #c77b7a;
    transform: scale(1.05);
    box-shadow: 0 0 10px rgba(255, 192, 203, 0.5);
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
  }
`;

const CatalogBottomSpace = styled.div`
  margin-bottom: 60px;
`;

const PersonalizadosPage = () => {
  const sendMessage = (cakeType) => {
    return `https://wa.me/573236024169?text=${encodeURIComponent(
      `Me interesa el pastel personalizado: ${cakeType}`
    )}`;
  };

  return (
    <PageContainer>
      <Title>Pasteles Personalizados</Title>
      <CatalogBottomSpace>
        <CatalogContainer>
          <Category>
            <img src={personalizado1} alt="Pastel Personalizado 1" />
            <Button href={sendMessage('Pastel Personalizado 1')} target="_blank">Pedir</Button>
          </Category>
          <Category>
            <img src={personalizado2} alt="Pastel Personalizado 2" />
            <Button href={sendMessage('Pastel Personalizado 2')} target="_blank">Pedir</Button>
          </Category>
          <Category>
            <img src={personalizado3} alt="Pastel Personalizado 3" />
            <Button href={sendMessage('Pastel Personalizado 3')} target="_blank">Pedir</Button>
          </Category>
        </CatalogContainer>
      </CatalogBottomSpace>
    </PageContainer>
  );
};

export default PersonalizadosPage;
