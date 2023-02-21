import axios from 'axios';


export const baseAPI = axios.create({
  baseURL: 'https://wallet.goit.ua/api',
});

export const baseRequestMono = axios.create({
  baseURL: 'https://api.monobank.ua/',
});

export const token = {
  set(token) {
    baseAPI.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    baseAPI.defaults.headers.common.Authorization = '';
  },
};
