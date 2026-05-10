import type IComment from './IComment';
import type IPost from './IPost';
import type IUser from './IUser';

export default interface IUserService {
  getUsers: () => Promise<IUser[]>;
  getPosts: () => Promise<IPost[]>;
  getComments: () => Promise<IComment[]>;
}
