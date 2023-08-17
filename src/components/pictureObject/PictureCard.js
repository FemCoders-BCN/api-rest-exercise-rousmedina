import React from 'react';
import './PictureCard.css'; // Importa los estilos

const PictureCard = ({ image }) => {
  return (
    <div className="picture-card">
      <img
        src={image.download_url}
        alt={`Image ${image.id}`}
        style={{ width: '300px', height: '200px' }}
      />
      <p>ID: {image.id}</p>
      <p>Author: {image.author}</p>
    </div>
  );
};

export default PictureCard;