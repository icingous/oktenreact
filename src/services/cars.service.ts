import axios, { type AxiosResponse } from 'axios';
import { URL } from '../constants/urls';
import type { ICar } from '../models';

const axiosInstance = axios.create({
  baseURL: 'http://owu.linkpc.net/carsAPI/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

const carService = {
  getCars: (): Promise<ICar[]> => {
    return axiosInstance.get(URL.cars).then((res) => res.data);
  },
  createCar: (car: ICar): Promise<AxiosResponse> => {
    return axiosInstance.post(URL.cars, car);
  },
};

export { carService };
