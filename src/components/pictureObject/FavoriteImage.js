import React from 'react';
import './FavoriteImage.css';

function FavoriteImage({ image }) {
  return (
    <div className="favorite-image-card">
      <img src={image.download_url} alt={`Image ${image.id}`} className="favorite-image" />
      <p className="favorite-image-title">{image.title}</p>
    </div>
  );
}

export default FavoriteImage;