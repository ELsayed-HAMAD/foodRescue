import axios from 'axios';

const api = axios.create({
  baseURL: 'http://food-rescue-isf6-euxb4azn7-elsayed-hamads-projects.vercel.app/api',
});

api.interceptors.request.use((config) => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user?.token) {
    config.headers.Authorization = `Bearer ${user.token}`;
  }
  return config;
});

export default api;
