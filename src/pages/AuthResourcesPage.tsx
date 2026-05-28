import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import resourceService from '../services/resource.service';
import { refresh } from '../services/auth.service';
import type { IProduct } from '../models/IProduct';

const AuthResourcesPage = () => {
  useEffect(() => {
    resourceService
      .getResource<IProduct>('products')
      .then((res) => console.log(res))
      .catch((e) => {
        console.log(e);
        refresh()
          .then(() => resourceService.getResource<IProduct>('products'))
          .then((res) => console.log(res));
      });
  }, []);

  return (
    <div>
      AuthResourcesPage
      <Outlet />
    </div>
  );
};

export default AuthResourcesPage;
