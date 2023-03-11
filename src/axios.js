import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://ecommerce-dumaug-final.onrender.com',
});

export default instance;
