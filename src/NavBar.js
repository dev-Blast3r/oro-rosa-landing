// src/NavBar.js

import React from 'react';
import styled from 'styled-components';

const NavBarContainer = styled.nav`
  display: flex;
  justify-content: center;
  background-color: #f8f8f8;
  padding: 10px 0;
  font-family: 'Montserrat', sans-serif;

  @media (max-width: 768px) {
    flex-direction: column; /* Cambiar dirección del flex a columna en pantallas pequeñas */
    align-items: center;
  }
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 30px;

  @media (max-width: 768px) {
    flex-direction: column; /* Cambiar dirección del flex a columna en pantallas pequeñas */
    gap: 15px;
    margin-left: -40px;
  }
`;

const NavItem = styled.li`
  position: relative;
  font-size: 1rem;
  color: #333;
  cursor: pointer;

  &:hover::after {
    content: '▼';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    font-size: 0.8rem;
  }

  &.active::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    right: 0;
    height: 2px;
    background-color: #d29990;
    width: 100%;
  }
`;

const NavBar = () => {
  return (
    <NavBarContainer>
      <NavList>
        <NavItem className="active">HOME</NavItem>
        <NavItem>SOBRE NOSOTROS</NavItem>
        <NavItem>CONTACTO</NavItem>
      </NavList>
    </NavBarContainer>
  );
};

export default NavBar;
