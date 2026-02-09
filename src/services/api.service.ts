import type { IPost } from '../models/IPost';

const baseUrl = import.meta.env.VITE_APP_BASE_URL;

const getPosts = (): Promise<IPost[]> =>
  fetch(`${baseUrl}/posts`).then((response) => response.json());

export { getPosts };
