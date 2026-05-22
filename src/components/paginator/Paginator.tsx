import { useEffect, type FC } from 'react';
import { useSearchParams } from 'react-router-dom';
import type { IResponseBase } from '../../models/IResponseBase';

const initSearchParams = { page: '1' };

interface IPaginatorProps {
  data: IResponseBase;
}

const Paginator: FC<IPaginatorProps> = ({ data }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get('page')) || 1;
  const { size, total } = data;
  const hasPrevPage = page > 1;
  const hasNextPage = Math.ceil(total / size) > page;
  const handleGoPrev = () => {
    setSearchParams({ page: String(page - 1) });
  };

  const handleGoNext = () => {
    setSearchParams({ page: String(page + 1) });
  };

  useEffect(() => {
    const page = searchParams.get('page');

    if (!page) {
      setSearchParams(initSearchParams);
    }
  }, [searchParams, setSearchParams]);

  return (
    <div className='p-4 border-t-2 border-gray-300 font-bold text-center flex justify-center gap-2'>
      <button
        onClick={handleGoPrev}
        disabled={!hasPrevPage}
        className='cursor-pointer disabled:cursor-default disabled:font-normal disabled:text-gray-400'
      >
        Prev
      </button>
      <button
        onClick={handleGoNext}
        disabled={!hasNextPage}
        className='cursor-pointer disabled:cursor-default disabled:font-normal disabled:text-gray-400'
      >
        Next
      </button>
    </div>
  );
};

export default Paginator;
