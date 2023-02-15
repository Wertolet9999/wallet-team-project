import axios from 'axios';

axios.defaults.baseURL = 'https://wallet.goit.ua/';

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
