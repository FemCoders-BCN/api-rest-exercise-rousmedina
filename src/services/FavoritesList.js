import React, { useEffect, useState } from 'react';
import FavoriteService from '../../services/FavoriteService';

function FavoritesList() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetchFavorites();
  }, []);

  const fetchFavorites = async () => {
    const favoritesData = await FavoriteService.getAllFavorites();
    setFavorites(favoritesData);
  };

  return (
    <div>
      <h2>Lista de Favoritos</h2>
      <ul>
        {favorites.map((favorite) => (
          <li key={favorite.id}>{favorite.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default FavoritesList;