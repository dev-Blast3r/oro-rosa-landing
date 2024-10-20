// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopBar from './TopBar';
import HeaderSection from './HeaderSection';
import NavBar from './NavBar';
import MainContent from './MainContent';
import CategoryPage from './CategoryPage'; // Asegúrate de tener este componente
import './App.css';
import TortasClasicasPage from './TortasClasicasPage';
import MemeCakesPage from './MemeCakesPage';
import PastelesDeGradoPage from './PastelesDeGradoPage';
import PersonalizadosPage from './PersonalizadosPage';


function App() {
  return (
    <Router>
      <div className="App">
        <TopBar />
        <HeaderSection />
        <NavBar />

        <Routes>
          {/* Ruta para la página principal */}
          <Route path="/" element={<MainContent />} />
          
          {/* Ruta dinámica para las páginas de categorías */}
          <Route path="/categoria/:categoryName" element={<CategoryPage />} />
          <Route path="/tortas-clasicas" element={<TortasClasicasPage />} />
        <Route path="/meme-cakes" element={<MemeCakesPage />} />
        <Route path="/pasteles-de-grado" element={<PastelesDeGradoPage />} />
        <Route path="/personalizados" element={<PersonalizadosPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
