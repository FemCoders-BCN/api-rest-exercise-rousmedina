import React from 'react';
import './GrayscaleImage.css';

function GrayscaleImage({ image }) {
  return (
    <div className="grayscale-image-card">
      <img src={image.download_url} alt={`Image ${image.id}`} className="grayscale-image" />
    </div>
  );
}

export default GrayscaleImage;