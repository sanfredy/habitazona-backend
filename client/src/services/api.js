import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3001/api', // Cambia el puerto si es necesario
});

export default instance;
