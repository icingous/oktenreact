import type { ILoginData } from '../models/ILoginData';
import type { ITokenPair } from '../models/ITokenPair';
import type { IUserProfile } from '../models/IUserProfile';
import axiosInstance from './base.service';
import { retrieveFromLocalStorage } from './helpers';

export const login = (loginData: ILoginData): Promise<IUserProfile> =>
  axiosInstance
    .post('/login', loginData)
    .then((res) => {
      const { accessToken, refreshToken } = res.data;

      localStorage.setItem(
        'tokens',
        JSON.stringify({ accessToken, refreshToken }),
      );

      return res.data;
    })
    .catch((error) => {
      console.log(error);
    });

export const refresh = (): Promise<void> => {
  const tokenPair = retrieveFromLocalStorage<ITokenPair>('tokens');

  if (!tokenPair)
    return Promise.reject(new Error('Refreshing of tokens is impossible'));

  return axiosInstance
    .post<ITokenPair>(
      '/refresh',
      JSON.stringify({
        refreshToken: tokenPair.refreshToken,
        expiresInMins: 1,
      }),
    )
    .then((res) => {
      localStorage.setItem('tokens', JSON.stringify(res.data));
    });
};
