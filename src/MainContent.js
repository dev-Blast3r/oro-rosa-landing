// src/MainContent.js

import React from 'react';
import styled from 'styled-components';
import cake1 from './cake1.png'; // Asegúrate de tener la imagen cake1 en la carpeta src
import cake2 from './cake2.png'; // Asegúrate de tener la imagen cake2 en la carpeta src
import cake3 from './cake3.png'; // Asegúrate de tener la imagen cake3 en la carpeta src
import circleTextImage from './circleTextImage.png';
import whatsappIcon from './whatsapp-icon.png';
import Catalog from './Catalog'; // Componente de categorías
import ImageUpload from './ImageUpload'; // Componente de subida de imágenes
import CategoryPage from './CategoryPage';

// Estilo para el botón flotante de WhatsApp
// Estilo para el botón flotante de WhatsApp con fondo blanco y borde
const FloatingWhatsAppButton = styled.a`
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 40px;
  right: 40px;
  background-color: #fff; /* Fondo blanco */
  color: #25d366; /* Color de WhatsApp */
  border-radius: 50px;
  border: 2px solid #25d366; /* Borde verde de WhatsApp */
  text-align: center;
  font-size: 30px;
  box-shadow: 2px 2px 3px #999;
  z-index: 1000;

  &:hover {
    background-color: #25d366;
    color: #fff;
  }

  img {
    width: 35px;
    height: 35px;
    margin-top: 12px; /* Centra el ícono verticalmente */
  }

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    right: 20px;
    bottom: 20px;

    img {
      width: 25px;
      height: 25px;
      margin-top: 12px;
    }
  }
`;



const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 20px;
  background-color: #FCF9F4;
  position: relative;
  height: 500px; /* Ajusta según sea necesario */
  

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    margin-top: 0;
  }
`;

const Image1 = styled.img`
  position: absolute;
  top: 5px;
  left: 5%;
  width: 220px;
  height: auto;
  z-index: 1;

  @media (max-width: 768px) {
    position: relative;
    left: auto;
    width: 150px;
    margin-bottom: 20px;
  }
`;

const Image2 = styled.img`
  position: absolute;
  left: 18%;
  top: 150px;
  width: 240px;
  height: 100;
  z-index: 2;

  @media (max-width: 768px) {
    position: relative;
    left: auto;
    top: auto;
    width: 150px;
    margin-bottom: 20px;
  }
`;

const TextContainer = styled.div`
  text-align: center;
  z-index: 3;
  max-width: 600px;
  margin: 0 auto;
  margin-top: -60px;

  h1 {
    font-size: 5rem;
    color: #333;
    margin-bottom: 25px;
    font-family: 'Berretti', sans-serif; 
    line-height: 1.2;
    font-weight: normal;
    
     @media (max-width: 768px) {
      font-size: 2rem;
      margin-top: 40px;
    }
  }

  p {
    font-size: 0.9rem;
    color: #777;
    font-family: arial, sans-serif; 
    margin-bottom: 20px;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }

  a {
    text-decoration: none;
  }

  button {
    background-color: #fff;
    color: #000;
    border: 2px solid #D29990; /* Borde grueso para el rectángulo */
    padding: 10px 30px; /* Ajuste del padding para parecerse más al diseño */
    font-size: 1.2rem;
    font-family: 'Arial', sans-serif;
    border-radius: 0; /* Ajuste de border-radius a 0 para eliminar bordes redondeados */
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin: 0 auto;
    position: relative;

    &:hover {
      background-color: #fff;
      color: #D29990;
    }

    img {
      width: 20px;
      height: 20px;
    }

    &::before, &::after {
      content: '';
      position: absolute;
      border: 1px solid #D29990;
      pointer-events: none;
    }

    &::before {
      top: 100%; /* Línea en la parte inferior */
      left: 0;
      right: 0;
    }

    &::after {
      top: 0;
      bottom: 0;
      left: 100%; /* Línea en el lado izquierdo */
    }
  }
  h1 {
    font-size: 5rem;
    color: #333;
    margin-bottom: 25px;
    font-family: 'Poppins', sans-serif;
    line-height: 1.2;
    font-weight: 600; 
  }
  
  p {
    font-size: 0.9rem;
    color: #777;
    font-family: 'Poppins', sans-serif;
    margin-bottom: 20px;
  }
  
  button {
    font-family: 'Poppins', sans-serif;
  }
  

`;

const Image3 = styled.img`
  position: absolute;
  right: 5%;
  width: 450px;
  height: 500px;
  z-index: 1;

  @media (max-width: 768px) {
    position: relative;
    right: auto;
    width: 300px;
    height: 400px;
    margin: 20px 0;
  }
`;

const CircleTextImage = styled.img`
  position: absolute;
  left: 10%;
  top: 50px;
  width: 300px;
  height: 300px;
  z-index: 0;
  animation: rotate 10s linear infinite;

  @media (max-width: 768px) {
    position: relative;
    left: auto;
    top: auto;
    width: 150px;
    height: 150px;
    margin-bottom: 20px;
  }
`;

const CatalogContainer = styled.div`
  padding: 50px;
  text-align: center;
  background-color: #FFF5EE;
`;


const MainContent = () => {
  const whatsappLink = 'https://wa.me/573106819768';
  return (
    <>
      <MainContainer>
        <CircleTextImage src={circleTextImage} alt="Circle Text" />
        <Image1 src={cake1} alt="Cake 1" />
        <Image2 src={cake2} alt="Cake 2" />
        <TextContainer>
          <h1>PASTELES CREATIVOS & EXQUISITOS</h1>
          <p>Deliciosos pasteles creativos y meme cakes para toda ocasión</p>
          {/* <button>¡PIDE EL TUYO!</button> */}
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <button>
              <img src={whatsappIcon} alt="WhatsApp" />
              ¡PIDE EL TUYO!
            </button>
          </a>
        </TextContainer>
        
        <Image3 src={cake3} alt="Cake 3" />
      </MainContainer>
      <CatalogContainer>
      <h2>Explora Nuestro Catálogo</h2>
      <Catalog />
      {/* <h3>Sube Tus Imágenes</h3> */}
      {/* <ImageUpload /> */}
    </CatalogContainer>
    {/* Ícono flotante de WhatsApp */}
    <FloatingWhatsAppButton href={whatsappLink} target="_blank" rel="noopener noreferrer">
        <img src={whatsappIcon} alt="WhatsApp" />
      </FloatingWhatsAppButton>
    </>
  );
};

export default MainContent;
