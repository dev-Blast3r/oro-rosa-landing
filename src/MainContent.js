// src/MainContent.js

import React from 'react';
import styled from 'styled-components';
import cake1 from './cake1.png'; // Asegúrate de tener la imagen cake1 en la carpeta src
import cake2 from './cake2.png'; // Asegúrate de tener la imagen cake2 en la carpeta src
import cake3 from './cake3.png'; // Asegúrate de tener la imagen cake3 en la carpeta src
import circleTextImage from './circleTextImage.png';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px -10px;
  background-color: #fff;
  position: relative;
  height: 500px; /* Ajusta según sea necesario */
  margin-top: 20px; /* Subir el contenido para que se muestre en conjunto con los otros elementos */
`;

const Image1 = styled.img`
  position: absolute;
  top: 5px;
  left: 5%;
  width: 220px;
  height: auto;
  z-index: 1;
`;

const Image2 = styled.img`
  position: absolute;
  left: 18%;
  top: 150px;
  width: 240px;
  height: 100;
  z-index: 2;
`;

const TextContainer = styled.div`
  text-align: center;
  z-index: 3;
  max-width: 600px;
  margin: 0 auto;

  h1 {
    font-size: 5rem;
    color: #333;
    margin-bottom: 25px;
    font-family: 'Berretti', sans-serif; 
    line-height: 1.2;
    font-weight: normal; 
  }

  p {
    font-size: 0.9rem;
    color: #777;
    font-family: arial, sans-serif; 
    margin-bottom: 20px;
  }

  button {
    background-color: #25D366;
    color: #fff;
    border: 2px solid #25D366;
    padding: 10px 20px;
    font-size: 1.2rem;
    font-family: 'Arial', sans-serif;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;

    &:hover {
      background-color: #fff;
      color: #25D366;
    }
  }
`;

const Image3 = styled.img`
  position: absolute;
  right: 5%;
  width: 450px;
  height: 500px;
  z-index: 1;
`;

const CircleTextImage = styled.img`
  position: absolute;
  left: 10%;
  top: 50px;
  width: 300px;
  height: 300px;
  z-index: 0;
  animation: rotate 10s linear infinite;
`;

const MainContent = () => {
  return (
    <MainContainer>
      <CircleTextImage src={circleTextImage} alt="Circle Text" />
      <Image1 src={cake1} alt="Cake 1" />
      <Image2 src={cake2} alt="Cake 2" />
      <TextContainer>
        <h1>PASTELES CREATIVOS & EXQUISITOS</h1>
        <p>Deliciosos pasteles creativos y meme cakes para toda ocasión</p>
        <button>¡PIDE EL TUYO!</button>
      </TextContainer>
      <Image3 src={cake3} alt="Cake 3" />
    </MainContainer>
  );
};

export default MainContent;
