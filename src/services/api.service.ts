import type { IComment } from '../models/IComment';

const baseUrl = import.meta.env.VITE_APP_BASE_URL;

export const getComments = (): Promise<IComment[]> => {
  return fetch(`${baseUrl}/comments`).then((response) => response.json());
};
