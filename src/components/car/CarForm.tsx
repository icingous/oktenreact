import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import type { ICar } from '../../models';
import { joiResolver } from '@hookform/resolvers/joi';
import validator from '../../validators/carValidator';
import { carService } from '../../services/cars.service';

interface ICarFormProps {
  car?: ICar;
}

const CarForm: FC<ICarFormProps> = ({ car }) => {
  const resolver = joiResolver(validator);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: 'all', defaultValues: car, resolver });
  const navigate = useNavigate();

  const onSubmit = (data: ICar): void => {
    carService.createCar(data).then(({ status }) => {
      if (status >= 400) return;

      navigate(-1);
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset className='flex flex-col gap-2 mb-4'>
        <div className='flex flex-col gap-1 pb-4 relative'>
          <label className='font-semibold' htmlFor='brand'>
            Brand*
          </label>
          <input
            className='p-2 border-2 border-gray-400 rounded'
            type='text'
            id='brand'
            {...register('brand')}
          />
          {errors.brand?.message && (
            <span className='absolute left-0 bottom-0 text-[12px] text-red-600 whitespace-nowrap'>
              {errors.brand?.message}
            </span>
          )}
        </div>
        <div className='flex flex-col gap-2 pb-4 relative'>
          <label className='font-semibold' htmlFor='year'>
            Year*
          </label>
          <input
            className='p-2 border-2 border-gray-400 rounded'
            type='number'
            id='year'
            {...register('year')}
          />
          {errors.year?.message && (
            <span className='absolute left-0 bottom-0 text-[12px] text-red-600  whitespace-nowrap'>
              {errors.year?.message}
            </span>
          )}
        </div>
        <div className='flex flex-col gap-2 pb-4 relative'>
          <label className='font-semibold' htmlFor='price'>
            Price*
          </label>
          <input
            className='p-2 border-2 border-gray-400 rounded'
            type='number'
            id='price'
            {...register('price')}
          />
          {errors.price?.message && (
            <span className='absolute left-0 bottom-0 text-[12px] text-red-600 whitespace-nowrap'>
              {errors.price?.message}
            </span>
          )}
        </div>
      </fieldset>
      <input
        className='disabled:text-gray-300 disabled:bg-gray-100 disabled:border-gray-200 p-2 border-2 border-gray-800 rounded font-semibold bg-gray-200 cursor-pointer hover:bg-gray-300 transition duration-150'
        type='submit'
        value='Do It!'
        disabled={!isValid}
      />
    </form>
  );
};

export default CarForm;
