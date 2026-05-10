const baseUrl = import.meta.env.VITE_BASE_URL;

const api = {
  getAll: <T>(path: string): Promise<T> =>
    fetch(`${baseUrl}${path}`).then((res) => res.json()),
};

export default api;
