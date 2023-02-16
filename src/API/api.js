import axios from 'axios';

export const baseAPI = axios.create({
  baseURL: 'https://wallet.goit.ua/api',
});

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};
