import { type FC } from 'react';
import type { ICar } from '../../models';
import Car from './Car';

interface ICarListProps {
  cars: ICar[];
}

const CarList: FC<ICarListProps> = ({ cars }) => {
  return (
    <ul>
      {cars.map((car) => (
        <li key={car.id}>
          <Car car={car} />
        </li>
      ))}
    </ul>
  );
};

export default CarList;
