// src/TopBar.js

import React from 'react';
import styled from 'styled-components';

const TopBarContainer = styled.div`
  background-color: #af6c7b;
  color: #fff;
  padding: 10px 0;
  display: flex;
  justify-content: flex-start; /* Cambia esto a flex-start para alinear a la izquierda */
  align-items: center;
  font-size: 0.9rem;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  margin: 0 15px;

  i {
    margin-right: 5px;
  }
`;

const TopBar = () => {
  return (
    <TopBarContainer>
      <InfoItem>
        <i className="fas fa-phone-alt"></i>
        <span>+57 323 6024169</span>
      </InfoItem>
      <InfoItem>
        <i className="fas fa-map-marker-alt"></i>
        <span>Cra 46 #56f1-35 Cali, Colombia</span>
      </InfoItem>
    </TopBarContainer>
  );
};

export default TopBar;
