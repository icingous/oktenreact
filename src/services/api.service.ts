import urls from '../constants/urls';
import type IComment from '../models/IComment';
import type IPost from '../models/IPost';
import type IUser from '../models/IUser';

export const JPUserService = {
  async getUsers(): Promise<IUser[]> {
    return fetch(urls.jp.users.all).then((res) => res.json());
  },
  async getPosts(): Promise<IPost[]> {
    return fetch(urls.jp.posts.all).then((res) => res.json());
  },
  async getComments(): Promise<IComment[]> {
    return fetch(urls.jp.comments.all).then((res) => res.json());
  },
};

export const DJUserService = {
  async getUsers(): Promise<IUser[]> {
    return fetch(urls.dj.users.all)
      .then((res) => res.json())
      .then((res) => res.users);
  },
  async getPosts(): Promise<IPost[]> {
    return fetch(urls.dj.posts.all)
      .then((res) => res.json())
      .then((res) => res.posts);
  },
  async getComments(): Promise<IComment[]> {
    return fetch(urls.dj.comments.all)
      .then((res) => res.json())
      .then((res) => res.comments);
  },
};
