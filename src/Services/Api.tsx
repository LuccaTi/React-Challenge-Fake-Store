import axios from 'axios';

const api = axios.create({
  baseURL: 'https://fakestoreapi.com' // API gratuita para produtos
});

export const getProducts = async () => {
  const response = await api.get('/products');
  return response.data;
};

export default api;
