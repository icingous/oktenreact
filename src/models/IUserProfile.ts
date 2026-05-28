import type { ITokenPair } from './ITokenPair';

export interface IUserProfile extends ITokenPair {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  accessToken: string;
  refreshToken: string;
}
