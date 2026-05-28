import axiosInstance from './base.service';

const service = {
  getResource: <T>(resource: string): Promise<T[]> =>
    axiosInstance.get(`/${resource}`).then((res) => res.data[resource]),
};

export default service;
