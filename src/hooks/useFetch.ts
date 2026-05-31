import { useEffect, useState } from 'react';

const useFetch = <T>(path: string): T[] => {
  const [items, setItems] = useState<T[]>([]);

  useEffect(() => {
    fetch(path)
      .then((res) => res.json())
      .then((res) => setItems(res));
  }, [path]);

  return items;
};

export default useFetch;
