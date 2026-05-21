import { useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

const initSearchParams = { page: '1' };
const paginatedRoutes = ['/users', '/posts'];

const Paginator = () => {
  const { pathname } = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const hasPagination = paginatedRoutes.includes(pathname);
  const page = searchParams.get('page') || '1';

  const handleGoPrev = () => {
    setSearchParams({ page: String(+page - 1) });
  };

  const handleGoNext = () => {
    setSearchParams({ page: String(+page + 1) });
  };

  useEffect(() => {
    if (!hasPagination) return;

    const page = searchParams.get('page');

    if (!page) {
      setSearchParams(initSearchParams);
    }
  }, [hasPagination, searchParams, setSearchParams]);

  return hasPagination ? (
    <div className='p-4 border-t-2 border-gray-300 font-bold text-center flex justify-center gap-2'>
      <button onClick={handleGoPrev} disabled={+page === 1}>
        Prev
      </button>
      <button onClick={handleGoNext}>Next</button>
    </div>
  ) : null;
};

export default Paginator;
