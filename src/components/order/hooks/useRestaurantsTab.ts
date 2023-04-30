import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import type { Category } from '../../../types/kiosk';
import { parseCategory } from '../../../utils/categoryTab';

interface UseRestaurantsTab {
  tab: Category,
  selectTab: (tab: Category) => void;
}

export default function useRestaurantsTab(): UseRestaurantsTab {
  const [searchParams, setSearchParams] = useSearchParams();

  const [tab, setTab] = useState<Category>(parseCategory(searchParams.get('category') ?? ''));

  const selectTab = (category: Category) => {
    setTab(category);
    searchParams.set('category', category);
    setSearchParams(searchParams);
  };

  return {
    tab,
    selectTab,
  };
}
