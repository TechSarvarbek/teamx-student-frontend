import axios from 'axios';

const api = axios.create({
  baseURL: 'https://techsarvarbek.pythonanywhere.com',
});

export default api;