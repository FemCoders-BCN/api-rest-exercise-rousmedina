import React, { useState, useEffect } from 'react';
import Navbar from '../../components/navbar/Navbar';
import axios from 'axios';
import './GrayscalePage.css'; 

function GrayscalePage() {
  const [grayscaleImage, setGrayscaleImage] = useState('');

  useEffect(() => {
    fetchGrayscaleImage();
  }, []);

  const fetchGrayscaleImage = async () => {
    try {
      const response = await axios.get('https://picsum.photos/400?grayscale');
      setGrayscaleImage(response.request.responseURL);
    } catch (error) {
      console.error('Error fetching grayscale image:', error);
    }
  };

  return (
    <main>
      <h2>Aquí estará la imagen aleatoria en escala de grises de la tercera llamada</h2>
      <Navbar />
      {grayscaleImage && <img src={grayscaleImage} alt="Grayscale Image" />}
    </main>
  );
}

export default GrayscalePage;
