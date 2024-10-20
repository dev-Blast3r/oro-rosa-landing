import React, { useState } from 'react';

const ImageUpload = () => {
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState('');

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (user.uploadedImages.length >= 5) { // Ejemplo de límite
//       alert('Has alcanzado el límite de imágenes subidas en el plan gratuito');
//       return;
//     }
//     // Continuar con la subida
//   };
  
const handleSubmit = (e) => {
    e.preventDefault();
    if (!image) {
      alert('Por favor selecciona una imagen antes de subir.');
      return;
    }
    console.log('Imagen subida:', image, 'Categoría:', category);
    // Aquí puedes agregar lógica para subir la imagen a un servidor.
  };
  
  const user = { uploadedImages: [] }; // Reemplaza este objeto con los datos reales del usuario


  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="category">Selecciona una categoría:</label>
      <select id="category" value={category} onChange={handleCategoryChange}>
        <option value="Tortas Clásicas">Tortas Clásicas</option>
        <option value="Meme Cakes">Meme Cakes</option>
        <option value="Pasteles de Bodas">Pasteles de Bodas</option>
      </select>

      <label htmlFor="image">Subir imagen:</label>
      <input type="file" id="image" onChange={handleImageChange} />

      <button type="submit">Subir Imagen</button>
    </form>
  );
};

export default ImageUpload;
