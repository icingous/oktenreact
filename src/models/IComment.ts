import type { IUser } from './IUser';

export interface IComment {
  postId: number;
  id: number;
  user: IUser;
  likes: number;
  body: string;
}
