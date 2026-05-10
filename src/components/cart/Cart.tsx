import { type FC } from 'react';
import type { ICart } from '../../models/ICart';
import Product from '../product/Product';

interface ICartProps {
  cart: ICart;
}

const Cart: FC<ICartProps> = ({ cart }) => {
  return (
    <div>
      <span className='inline-block mb-2 font-bold'>{`total: ${cart.total}`}</span>
      {cart.products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Cart;
