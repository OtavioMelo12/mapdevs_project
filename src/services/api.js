import axios from 'axios';

const api = axios.create({
  baseURL: 'https://mapdevs-backend.herokuapp.com',
});

export default api;
