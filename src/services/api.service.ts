import type { IComment } from '../models/IComment';
import type { IPost } from '../models/IPost';
import type { ITodo } from '../models/ITodo';

const baseUrl = import.meta.env.VITE_API_URL;

export const getTodos: () => Promise<ITodo[]> = () =>
  fetch(`${baseUrl}/todos`)
    .then((response) => response.json())
    .then(({ todos }) => todos);

export const getPosts = (): Promise<IPost[]> =>
  fetch(`${baseUrl}/posts`)
    .then((response) => response.json())
    .then(({ posts }) => posts);

export const getComments = (): Promise<IComment[]> => {
  return fetch(`${baseUrl}/comments`)
    .then((response) => response.json())
    .then(({ comments }) => comments);
};
