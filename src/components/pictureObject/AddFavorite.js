import React, { useState } from 'react';
import FavoriteService from '../../services/FavoriteService';

function AddFavoriteForm({ onAdd }) {
  const [newFavorite, setNewFavorite] = useState('');

  const handleAdd = async () => {
    const favoriteData = { name: newFavorite };
    const addedFavorite = await FavoriteService.addFavorite(favoriteData);
    onAdd(addedFavorite);
    setNewFavorite('');
  };

  return (
    <div>
      <h2>Agregar Favorito</h2>
      <input
        type="text"
        value={newFavorite}
        onChange={(e) => setNewFavorite(e.target.value)}
      />
      <button onClick={handleAdd}>Agregar</button>
    </div>
  );
}

export default AddFavoriteForm;
