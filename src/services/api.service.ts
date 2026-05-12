import type IComment from '../models/IComment';
import type IPost from '../models/IPost';
import type IUser from '../models/IUser';

export const userService = {
  async getUsers(url: string): Promise<IUser[]> {
    return fetch(url)
      .then((res) => res.json())
      .then((res) => res.users || res);
  },
  async getPosts(url: string): Promise<IPost[]> {
    return fetch(url)
      .then((res) => res.json())
      .then((res) => res.posts || res);
  },
  async getComments(url: string): Promise<IComment[]> {
    return fetch(url)
      .then((res) => res.json())
      .then((res) => res.comments || res);
  },
};
