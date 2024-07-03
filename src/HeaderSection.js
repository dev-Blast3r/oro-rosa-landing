// src/HeaderSection.js

import React from 'react';
import styled from 'styled-components';
import logo from './oro-rosa-logo.png';  // Asegúrate de tener el logo en la carpeta src
import whatsappIcon from './whatsapp-icon.png';  // Icono de WhatsApp
import instagramIcon from './instagram-icon.png';  // Icono de Instagram
import facebookIcon from './facebook-icon.png';  // Icono de Facebook

const HeaderContainer = styled.div`
  background: linear-gradient(to right, #E982A5, #FFE5E6, #D29990);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  position: relative; // Posicionamiento relativo para centrar el logo absolutamente
  height: 100px;
`;

const Logo = styled.img`
  position: absolute; // Posicionamiento absoluto para el logo
  left: 50%; // Posicionar desde la mitad
  transform: translateX(-50%); // Desplazamiento para centrar exactamente
  height: 180px; // Ajusta según el tamaño deseado
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 10px;
  justify-content: right;
`;

const SocialIcon = styled.img`
  width: 40px;
  height: 40px;

  @media (max-width: 768px) {
    width: 25px;
    height: 25px;
  }
`;

const Spacer = styled.div`
  flex: 1;
`;

const HeaderSection = () => {
  return (
    <HeaderContainer>
      <Spacer /> {/* Espacio vacío para equilibrar el logo */}
      <Logo src={logo} alt="Oro Rosa Pastelería Logo" />
      <Spacer /> {/* Otro espacio vacío para empujar los iconos a la derecha */}
      <SocialIcons>
        <a href="#"><SocialIcon src={whatsappIcon} alt="WhatsApp" /></a>
        <a href="#"><SocialIcon src={instagramIcon} alt="Instagram" /></a>
        <a href="#"><SocialIcon src={facebookIcon} alt="Facebook" /></a>
      </SocialIcons>
    </HeaderContainer>
  );
};

export default HeaderSection;
