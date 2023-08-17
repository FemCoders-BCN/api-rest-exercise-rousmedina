import React, { useState } from 'react';
import FavoriteService from '../../services/FavoriteService';

function EditFavoriteForm({ favorite, onUpdate }) {
  const [editedName, setEditedName] = useState(favorite.name);

  const handleUpdate = async () => {
    const updatedData = { name: editedName };
    const updatedFavorite = await FavoriteService.updateFavorite(
      favorite.id,
      updatedData
    );
    onUpdate(updatedFavorite);
  };

  return (
    <div>
      <h2>Editar Favorito</h2>
      <input
        type="text"
        value={editedName}
        onChange={(e) => setEditedName(e.target.value)}
      />
      <button onClick={handleUpdate}>Actualizar</button>
    </div>
  );
}

export default EditFavoriteForm;
