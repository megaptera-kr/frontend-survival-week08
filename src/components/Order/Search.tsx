import { SearchWrraper } from './ui';

import SearchInput from './SearchInput';

import SearchCategories from './SearchCategories';

export default function Search() {
  return (
    <SearchWrraper $direction='column' $gap='4rem'>
      <SearchInput />
      <SearchCategories />
    </SearchWrraper>
  );
}
