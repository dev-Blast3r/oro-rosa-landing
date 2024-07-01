// src/FirstSection.js

import React from 'react';
import styled from 'styled-components';
import oroRosaLogo from './oro-rosa-logo.png'; // Asegúrate de tener el logo y las imágenes en la carpeta src
import cakeImage1 from './cake1.png'; // Imagen de pastel 1
import cakeImage2 from './cake2.png'; // Imagen de pastel 2
import cakeImage3 from './cake3.png'; // Imagen de pastel 3

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  color: #000;
  padding: 20px;
`;

const Header = styled.header`
  width: 100%;
  background: linear-gradient(90deg, rgba(255,192,203,1) 0%, rgba(245,245,245,1) 100%);
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
  gap: 10px;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 10px;

  a {
    color: #000;
    font-size: 1.5rem;
    text-decoration: none;
  }
`;

const Logo = styled.img`
  width: 150px;
  margin: 20px 0;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  font-family: 'Arial', sans-serif;
`;

const Description = styled.p`
  font-size: 1.25rem;
  text-align: center;
  max-width: 600px;
  margin: 10px 0;
  font-family: 'Arial', sans-serif;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 20px 0;

  img {
    width: 30%;
    max-width: 200px;
    margin: 10px;
  }
`;

const OrderButton = styled.a`
  background: #25D366;
  color: #fff;
  padding: 10px 20px;
  font-size: 1.25rem;
  border-radius: 5px;
  text-decoration: none;
  margin: 20px 0;
  display: inline-block;
`;

const FirstSection = () => {
  return (
    <Section>
      <Header>
        <ContactInfo>
          <span>+57 323 6024169</span>
          <span>Cra 46 #56f1-35 Cali, Colombia</span>
        </ContactInfo>
        <SocialLinks>
          <a href="#"><i className="fab fa-whatsapp"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-facebook"></i></a>
        </SocialLinks>
      </Header>
      <Logo src={oroRosaLogo} alt="Oro Rosa Pastelería Logo" />
      <Title>PASTELES CREATIVOS & EXQUISITOS</Title>
      <Description>Deliciosos pasteles creativos y meme cakes para toda ocasión</Description>
      <ImageContainer>
        <img src={cakeImage1} alt="Pastel 1" />
        <img src={cakeImage2} alt="Pastel 2" />
        <img src={cakeImage3} alt="Pastel 3" />
      </ImageContainer>
      <OrderButton href="https://wa.me/573236024169">PIDE EL TUYO!</OrderButton>
    </Section>
  );
};

export default FirstSection;
