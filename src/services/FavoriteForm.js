import React, { useState } from 'react';
import { FavoriteService } from '../../services/FavoriteService';

function FavoriteForm({ onAddFavorite }) {
    const favoriteService = FavoriteService();
    const [newFavorite, setNewFavorite] = useState({
      id: '',
      author: '',
      download_url: '',
    });
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setNewFavorite((prevFavorite) => ({
        ...prevFavorite,
        [name]: value,
      }));
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        const addedFavorite = await favoriteService.addFavorite(newFavorite);
        onAddFavorite(addedFavorite);
        setNewFavorite({
          id: '',
          author: '',
          download_url: '',
        });
      } catch (error) {
        console.error('Error adding favorite:', error);
      }
    };
  
    return (
      <div className="favorite-form">
        <h2>Agregar Favorito</h2>
        <form onSubmit={handleSubmit}>
          <label>
            ID:
            <input
              type="text"
              name="id"
              value={newFavorite.id}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Autor:
            <input
              type="text"
              name="author"
              value={newFavorite.author}
              onChange={handleInputChange}
            />
          </label>
          <label>
            URL de la imagen:
            <input
              type="text"
              name="download_url"
              value={newFavorite.download_url}
              onChange={handleInputChange}
            />
          </label>
          <button type="submit">Agregar</button>
        </form>
      </div>
    );
  }
  
  export default FavoriteForm;