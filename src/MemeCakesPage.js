import React from 'react';
import styled from 'styled-components';

// Importa las imágenes de meme cakes
import memecake1 from './images/memecake4.JPG';
import memecake2 from './images/memecake2.JPG';
import memecake3 from './images/memecake3.JPG';

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

const MemeCakesPage = () => {
  const sendMessage = (cakeType) => {
    return `https://wa.me/573236024169?text=${encodeURIComponent(
      `Me interesa el meme cake: ${cakeType}`
    )}`;
  };

  return (
    <PageContainer>
      <Title>Meme Cakes</Title>
      <CatalogBottomSpace>
        <CatalogContainer>
          <Category>
            <img src={memecake1} alt="Meme Cake 1" />
            <Button href={sendMessage('Meme Cake 1')} target="_blank">Pedir</Button>
          </Category>
          <Category>
            <img src={memecake2} alt="Meme Cake 2" />
            <Button href={sendMessage('Meme Cake 2')} target="_blank">Pedir</Button>
          </Category>
          <Category>
            <img src={memecake3} alt="Meme Cake 3" />
            <Button href={sendMessage('Meme Cake 3')} target="_blank">Pedir</Button>
          </Category>
        </CatalogContainer>
      </CatalogBottomSpace>
    </PageContainer>
  );
};

export default MemeCakesPage;
