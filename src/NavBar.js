// src/NavBar.js

import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

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

  a {
    text-decoration: none;
    color: inherit;
    padding: 5px 0;
    transition: color 0.3s;

    &:hover {
      color: #d29990;
    }

    &.active {
      color: #d29990;
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
  }
`;

const NavBar = () => {
  return (
    <NavBarContainer>
      <NavList>
        {/* HOME */}
        <NavItem>
          <NavLink exact to="/" activeClassName="active">HOME</NavLink>
        </NavItem>

        {/* Categorías: Asegúrate de que coincidan con App.js */}
        <NavItem>
          <NavLink to="/tortas-clasicas" activeClassName="active">Tortas Clásicas</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/meme-cakes" activeClassName="active">Meme Cakes</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/fechas-especiales" activeClassName="active">Fechas Especiales</NavLink>
        </NavItem>

        {/* CONTACTO */}
        <NavItem>
          <NavLink to="/contacto" activeClassName="active">CONTACTO</NavLink>
        </NavItem>
      </NavList>
    </NavBarContainer>
  );
};

export default NavBar;
