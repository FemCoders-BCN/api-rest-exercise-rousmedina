import React from 'react';
import { LoremPicsumService } from '../../services/LoremPicsumService';

function PictureFromId({ imageId }) {
  const loremPicsum = LoremPicsumService();
  const [image, setImage] = useState(null);

  useEffect(() => {
    loremPicsum.getById(imageId, '600') // Cambia el tamaño según tus necesidades
      .then(response => {
        setImage(response.data);
      })
      .catch(error => {
        console.error('Error fetching image by ID:', error);
      });
  }, [imageId]);

  if (!image) {
    return <p>Cargando imagen...</p>;
  }

  return (
    <div className="picture-card">
      <img src={image.download_url} alt={`Image ${image.id}`} />
      <p className="image-id">ID: {image.id}</p>
      <p className="image-author">Author: {image.author}</p>
    </div>
  );
}

export default PictureFromId;