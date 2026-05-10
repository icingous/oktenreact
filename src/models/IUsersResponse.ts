import type { IUser } from './IUser';

export interface IUserResponse {
  users: IUser[];
  total: number;
  limit: number;
  skip: number;
}
