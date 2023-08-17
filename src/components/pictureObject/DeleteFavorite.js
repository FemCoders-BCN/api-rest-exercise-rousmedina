import React from 'react';
import FavoriteService from '../../services/FavoriteService';

function DeleteFavoriteButton({ favorite, onDelete }) {
  const handleDelete = async () => {
    await FavoriteService.deleteFavorite(favorite.id);
    onDelete(favorite.id);
  };

  return (
    <button onClick={handleDelete}>Eliminar</button>
  );
}

export default DeleteFavoriteButton;
