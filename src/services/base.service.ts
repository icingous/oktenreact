import axios from 'axios';
import type { ITokenPair } from '../models/ITokenPair';
import { retrieveFromLocalStorage } from './helpers';

const axiosInstance = axios.create({
  baseURL: 'https://dummyjson.com/auth',
  headers: { 'Content-Type': 'application/json' },
});

axiosInstance.interceptors.request.use((req) => {
  if (req.method?.toUpperCase() === 'GET') {
    const tokenPair = retrieveFromLocalStorage<ITokenPair>('tokens');

    if (tokenPair) {
      req.headers.set('Authorization', `Bearer ${tokenPair.accessToken}`);
    }
  }

  return req;
});

export default axiosInstance;
