import { SearchCategoriesWrraper, Tab } from './ui';

import useSearch from './hooks/useSearch';

import categories from '../../constants/categories';

export default function SearchCategories() {
  const { category, handleClickCategory } = useSearch();

  return (
    <SearchCategoriesWrraper $direction='row' $gap='1.2rem'>
      {categories.map((item) => (
        <Tab
          key={item}
          value={item}
          $selected={item === category}
          onClick={handleClickCategory}
        >
          {item}
        </Tab>
      ))}
    </SearchCategoriesWrraper>
  );
}
