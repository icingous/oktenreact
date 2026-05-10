import type { ICart } from './ICart';

export interface IUserCartsResponse {
  carts: ICart[];
  total: number;
  limit: number;
  skip: number;
}
