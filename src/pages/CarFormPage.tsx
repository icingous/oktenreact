import CarForm from '../components/car/CarForm';

const CarFormPage = () => {
  return (
    <div className='h-min-full flex flex-col justify-center items-center'>
      <h2 className='mb-4 text-3xl'>New Car</h2>
      <CarForm />;
    </div>
  );
};

export default CarFormPage;
