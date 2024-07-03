import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://backforport.onrender.com',
  // baseURL: 'https://deploy-porta-f5eff74bbe44.herokuapp.com/',
});