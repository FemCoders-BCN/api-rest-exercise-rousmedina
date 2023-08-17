import axios from "axios";

//estas son algunas configuraciones que tiene axios, mientras seguimos con el curso encontrarás más
axios.defaults.baseURL = 'https://picsum.photos';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';

export const LoremPicsumService = () => {
  const urlGetAll = '/v2/list';
  const urlGetById = '/id/{image}/{size}';
  const urlGetGrayscale = '/id/{image}/{size}?grayscale'; // Agrega la URL para el tercer endpoint

  const getAll = () => {
    return axios.get(urlGetAll);
  };

  const getById = (id, size) => {
    return axios.get(`${urlGetById}/${id}/${size}`);
  };

  const getRandomGrayscale = () => {
    return axios.get(urlGetGrayscale);
  };

  return {
    getAll,
    getById,
    getRandomGrayscale, // No olvides agregar este método para que puedas exportarlo
  };
};