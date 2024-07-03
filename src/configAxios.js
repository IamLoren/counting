import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://backforport.onrender.com',
  // baseURL: 'http://localhost:4000',
});