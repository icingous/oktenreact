import type { ITodo } from '../models/ITodo';

const baseUrl = import.meta.env.VITE_API_URL;

export const getTodos: () => Promise<ITodo[]> = () =>
  fetch(`${baseUrl}/todos`).then((response) => response.json());
