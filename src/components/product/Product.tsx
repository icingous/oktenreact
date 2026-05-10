import { type FC } from 'react';
import type { IProduct } from '../../models/ICart';

interface IProductProps {
  product: IProduct;
}

const Product: FC<IProductProps> = ({ product }) => {
  const { title, quantity, price } = product;

  return <div>{`${title} ${quantity}X${price}`}</div>;
};

export default Product;
