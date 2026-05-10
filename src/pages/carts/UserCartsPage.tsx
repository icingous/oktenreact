import { useEffect, useState } from 'react';
import Cart from '../../components/cart/Cart';
import type { ICart } from '../../models/ICart';
import { useParams } from 'react-router-dom';
import { cartService } from '../../services/api.service';

const UserCartsPage = () => {
  const { userId } = useParams();

  const [carts, setCarts] = useState<ICart[]>([]);
  useEffect(() => {
    if (userId) {
      cartService.getUserCarts(userId).then(({ carts }) => setCarts(carts));
    }
  }, [userId]);

  return (
    <div>
      {carts.map((cart) => (
        <Cart key={cart.id} cart={cart} />
      ))}
    </div>
  );
};

export default UserCartsPage;
