import React from 'react';
import styled from 'styled-components';

// Importa las imágenes de tortas clásicas
import clasico1 from './images/clasico1.JPG';
import clasico2 from './images/clasico2.JPG';
import clasico3 from './images/clasico3.JPG';

const PageContainer = styled.div`
  text-align: center;
  padding: 20px;
`;

const Title = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: 2.5rem;
  color: #d29990;
  margin-bottom: 40px;
`;

const CatalogContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;

const Category = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;

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
`;

const CatalogBottomSpace = styled.div`
  margin-bottom: 60px;
`;

const TortasClasicasPage = () => {
  const sendMessage = (cakeType) => {
    return `https://wa.me/573236024169?text=${encodeURIComponent(
      `Me interesa la torta clásica: ${cakeType}`
    )}`;
  };

  return (
    <PageContainer>
      <Title>Tortas Clásicas</Title>
      <CatalogBottomSpace>
        <CatalogContainer>
          <Category>
            <img src={clasico1} alt="Torta Clásica 1" />
            <Button href={sendMessage('Torta Clásica 1')} target="_blank">Pedir</Button>
          </Category>
          <Category>
            <img src={clasico2} alt="Torta Clásica 2" />
            <Button href={sendMessage('Torta Clásica 2')} target="_blank">Pedir</Button>
          </Category>
          <Category>
            <img src={clasico3} alt="Torta Clásica 3" />
            <Button href={sendMessage('Torta Clásica 3')} target="_blank">Pedir</Button>
          </Category>
        </CatalogContainer>
      </CatalogBottomSpace>
    </PageContainer>
  );
};

export default TortasClasicasPage;
