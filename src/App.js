// src/App.js

import React from 'react';
import TopBar from './TopBar';
import HeaderSection from './HeaderSection';
import NavBar from './NavBar';
import MainContent from './MainContent';
import './App.css';

function App() {
  return (
    <div className="App">
      <TopBar />
      <HeaderSection />
      <NavBar />
      <MainContent />
    </div>
  );
}

export default App;
