// src/NavBar.js

import React from 'react';
import styled from 'styled-components';

const NavBarContainer = styled.nav`
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 10px 0;
`;

const NavBarContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1200px; // Limitar el ancho para centrar el contenido
  width: 100%;
  margin: auto;
`;

const NavItem = styled.a`
  color: #333;
  text-decoration: none;
  font-size: 1rem;
  padding: 10px 15px;
  transition: color 0.3s;
  border-radius: 20px; // Agregar bordes redondeados

  &:hover {
    color: #E982A5;
    background-color: #f9e2e7; // Suave fondo rosado al hacer hover
  }
`;

const NavBar = () => {
  return (
    <NavBarContainer>
      <NavBarContent>
        <NavItem href="#">Inicio</NavItem>
        <NavItem href="#">Páginas</NavItem>
        <NavItem href="#">Blog</NavItem>
        <NavItem href="#">Portafolio</NavItem>
        <NavItem href="#">Comprar</NavItem>
        <NavItem href="#">Contacto</NavItem>
      </NavBarContent>
    </NavBarContainer>
  );
};

export default NavBar;
