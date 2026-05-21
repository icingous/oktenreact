const baseUrl = import.meta.env.VITE_BASE_URL;

const api = {
  getAll: <T>(path: string): Promise<T> =>
    fetch(`${baseUrl}${path}`).then((res) => res.json()),

  getPage: <T>(path: string, page: number, limit: number = 10): Promise<T> => {
    const search = `?skip=${limit * --page}&limit=${limit}`;

    return fetch(`${baseUrl}${path}${search}`).then((res) => res.json());
  },
};

export default api;
