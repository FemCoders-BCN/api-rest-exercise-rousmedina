import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000'; // Cambia el puerto según la configuración de json-server

const FavoriteService = {
  getAllFavorites: async () => {
    const response = await axios.get('/favorites');
    return response.data;
  },

  addFavorite: async (favoriteData) => {
    const response = await axios.post('/favorites', favoriteData);
    return response.data;
  },

  updateFavorite: async (id, updatedData) => {
    const response = await axios.put(`/favorites/${id}`, updatedData);
    return response.data;
  },

  deleteFavorite: async (id) => {
    const response = await axios.delete(`/favorites/${id}`);
    return response.data;
  },
};

export default FavoriteService;