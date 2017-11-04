import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3001/api',
  withCredentials: false,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
  }
});

api.interceptors.response.use(
  response => {
    return response;
  },
  ({ response = { data: { error: 'Что-то пошло не так...' } } }) => {
    return Promise.reject(response);
  }
);
