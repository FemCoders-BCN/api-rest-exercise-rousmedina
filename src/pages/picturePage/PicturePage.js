import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { LoremPicsumService } from '../../services/LoremPicsumService';

const PicturePage = () => {
  const [imageData, setImageData] = useState(null);
  const loremPicsum = LoremPicsumService();

  useEffect(() => {
    fetchImageData();
  }, []);

  const fetchImageData = async () => {
    try {
      const response = await loremPicsum.getImageById('123', '200'); // Cambia el ID y tamaño según tus necesidades
      setImageData(response.data);
    } catch (error) {
      console.error('Error fetching image data:', error);
    }
  };

  if (!imageData) {
    return <p>Cargando imagen...</p>;
  }

  return (
    <div>
      <h2>Detalles de la imagen</h2>
      <img src={imageData.download_url} alt={`Image ${imageData.id}`} />
    </div>
  );
};

export default PicturePage;