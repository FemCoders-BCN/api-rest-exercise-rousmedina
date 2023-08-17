import React, { useState, useEffect } from 'react';
import { LoremPicsumService } from '../services/LoremPicsumService';

const ImageById = () => {
  const loremPicsum = LoremPicsumService();
  const [image, setImage] = useState(null);
  const imageId = 10; // Cambia este ID por el que desees

  useEffect(() => {
    // Llama al método getById del servicio
    loremPicsum.getById(imageId, '300')
      .then(response => {
        setImage(response.data);
      })
      .catch(error => {
        console.error('Error fetching image by ID:', error);
      });
  }, [imageId]);

  return (
    <div>
      <h3>Imagen por ID</h3>
      {image && (
        <div className="picture-card">
          <img src={image.download_url} alt={`Image ${image.id}`} />
          <p>ID: {image.id}</p>
          <p>Author: {image.author}</p>
        </div>
      )}
    </div>
  );
};

export default ImageById;
