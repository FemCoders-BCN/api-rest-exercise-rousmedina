import React from 'react';
import './PictureCard.css'; 

function PictureObject({ image }) {
  return (
    <div className="picture-card">
      <img src={image.download_url} alt={`Image ${image.id}`} />
      <p className="image-id">ID: {image.id}</p>
      <p className="image-author">Author: {image.author}</p>
    </div>
  );
}

export default PictureObject;
