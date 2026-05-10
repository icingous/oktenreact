import type { IUserCartsResponse } from '../models/IUserCartsResponse';
import type { IUserResponse } from '../models/IUsersResponse';

const BASE_URL = 'https://dummyjson.com';

export const userService = {
  getUsers(): Promise<IUserResponse> {
    return fetch(`${BASE_URL}/users`).then((res) => res.json());
  },
};

export const cartService = {
  getUserCarts(userId: string): Promise<IUserCartsResponse> {
    return fetch(`${BASE_URL}/carts/user/${userId}`).then((res) => res.json());
  },
};
