import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

interface UseRestaurantsTab {
  tab: string,
  selectTab: (tab: string) =>void;
}

export default function useRestaurantsTab(): UseRestaurantsTab {
  const [searchParams, setSearchParams] = useSearchParams();

  const [tab, setTab] = useState(searchParams.get('category') ?? '전체');

  const selectTab = (category: string) => {
    setTab(category);
    searchParams.set('category', category);
    setSearchParams(searchParams);
  };

  return {
    tab,
    selectTab,
  };
}
