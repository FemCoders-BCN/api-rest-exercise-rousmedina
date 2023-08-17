import React, { useEffect, useState } from 'react';
import { LoremPicsumService } from '../services/LoremPicsumService';
import PictureCard from './PictureCard';

const PictureList = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await LoremPicsumService.getAll();
      setImages(response.data);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  return (
    <div className="picture-list">
      {images.map(image => (
        <PictureCard key={image.id} image={image} />
      ))}
    </div>
  );
};

export default PictureList;
