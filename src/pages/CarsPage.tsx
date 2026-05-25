import { useEffect, useState } from 'react';
import { carService } from '../services/cars.service';
import type { ICar } from '../models';
import CarList from '../components/car/CarList';

const CarsPage = () => {
  const [cars, setCars] = useState<ICar[]>([]);

  useEffect(() => {
    carService.getCars().then((res) => setCars(res));
  }, []);

  return <CarList cars={cars} />;
};

export default CarsPage;
