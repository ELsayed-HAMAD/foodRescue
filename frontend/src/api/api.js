import axios from 'axios';

const api = axios.create({
  // تم تغيير localhost إلى لينك Railway الحقيقي الخاص بك
  baseURL: 'https://zooming-illumination-production-33f2.up.railway.app/api', 
});

api.interceptors.request.use((config) => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user?.token) {
    config.headers.Authorization = `Bearer ${user.token}`;
  }
  return config;
});

export default api;
