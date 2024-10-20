// src/CategoryPage.js

import React from 'react';
import { useParams } from 'react-router-dom';

const CategoryPage = () => {
  const { categoryName } = useParams();

  // Aquí puedes tener un objeto que mapea las categorías a las imágenes
  const images = {
    'tortas-clasicas': ['torta1.jpg', 'torta2.jpg'],
    'meme-cakes': ['meme1.jpg', 'meme2.jpg'],
    'fechas-especiales': ['especial1.jpg', 'especial2.jpg'],
  };

  return (
    <div>
      <h2>{categoryName.replace('-', ' ').toUpperCase()}</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {images[categoryName]?.map((image, index) => (
          <img
            key={index}
            src={`/images/${categoryName}/${image}`}
            alt={image}
            style={{ width: '300px', margin: '10px', borderRadius: '10px' }}
          />
        )) || <p>No hay imágenes disponibles.</p>}
      </div>
    </div>
  );
};

export default CategoryPage;
