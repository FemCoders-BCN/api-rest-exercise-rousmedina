import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([]);
  const [newFavorite, setNewFavorite] = useState('');
  const [editingFavoriteId, setEditingFavoriteId] = useState(null);

  useEffect(() => {
    fetchFavorites();
  }, []);

  const fetchFavorites = async () => {
    try {
      const response = await axios.get('http://localhost:3001/favorites'); // Cambia la URL según tu configuración
      setFavorites(response.data);
    } catch (error) {
      console.error('Error fetching favorites:', error);
    }
  };

  const addFavorite = async () => {
    try {
      await axios.post('http://localhost:3001/favorites', { name: newFavorite }); // Cambia la URL según tu configuración
      setNewFavorite('');
      fetchFavorites();
    } catch (error) {
      console.error('Error adding favorite:', error);
    }
  };

  const editFavorite = (favoriteId) => {
    setEditingFavoriteId(favoriteId);
  };

  const updateFavorite = async (updatedFavorite) => {
    try {
      await axios.put(`http://localhost:3001/favorites/${updatedFavorite.id}`, updatedFavorite);
      setEditingFavoriteId(null);
      fetchFavorites();
    } catch (error) {
      console.error('Error updating favorite:', error);
    }
  };

  const deleteFavorite = async (favoriteId) => {
    try {
      await axios.delete(`http://localhost:3001/favorites/${favoriteId}`);
      fetchFavorites();
    } catch (error) {
      console.error('Error deleting favorite:', error);
    }
  };

  return (
    <div>
      <h2>Favorites Page</h2>
      <ul>
        {favorites.map((favorite) => (
          <li key={favorite.id}>
            {editingFavoriteId === favorite.id ? (
              <input
                type="text"
                value={favorite.name}
                onChange={(e) =>
                  updateFavorite({ ...favorite, name: e.target.value })
                }
              />
            ) : (
              favorite.name
            )}
            <button onClick={() => editFavorite(favorite.id)}>
              {editingFavoriteId === favorite.id ? 'Save' : 'Edit'}
            </button>
            <button onClick={() => deleteFavorite(favorite.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={newFavorite}
          onChange={(e) => setNewFavorite(e.target.value)}
        />
        <button onClick={addFavorite}>Add Favorite</button>
      </div>
    </div>
  );
};

export default FavoritesPage;
