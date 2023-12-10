import { useMemo } from 'react';

import { useDebounce } from 'usehooks-ts';

import { useGetRestaurantsQuery } from '../../../services/hooks/useGetRestaurants';

import useAppSelector from '../../../hooks/useAppSeletor';

import filterBySearchQuery from '../../../utils/filterBySearchQuery';

import select from '../../../utils/select';

export default function useFilteredQuery() {
  const { data } = useGetRestaurantsQuery();

  const { query, category } = useAppSelector((state) => state.search);

  const debouncedQuery = useDebounce<string>(query, 200);

  const restaurants = useMemo(() => {
    if (!data?.restaurants) return null;

    let result = [...data.restaurants];

    if (category === '전체') {
      result = filterBySearchQuery(result, debouncedQuery);
    } else {
      result = filterBySearchQuery(
        select(result, 'category', category),
        debouncedQuery,
      );
    }

    return result;
  }, [data, category, debouncedQuery]);

  const renderNodata = useMemo(
    () => !restaurants?.length,
    [restaurants?.length],
  );

  return { restaurants, renderNodata };
}
