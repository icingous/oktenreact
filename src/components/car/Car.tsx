import { type FC } from 'react';
import type { ICar } from '../../models';

interface ICarProps {
  car: ICar;
}

const Car: FC<ICarProps> = ({ car: { brand, price, year } }) => {
  return <span>{`${brand} (${year}) - ${price}`}</span>;
};

export default Car;
