import { useSearchRestaurant, useRestaurantsTab } from '../hooks';
import { SearchInput, TabList } from '../../common';

import * as S from './RestaurantsFilter.styled';

export const restaurantsTab = [
  { id: '전체', label: '전체', panel: 'restaurants-panel' },
  { id: '중식', label: '중식', panel: 'restaurants-panel' },
  { id: '한식', label: '한식', panel: 'restaurants-panel' },
  { id: '일식', label: '일식', panel: 'restaurants-panel' },
] as const;

export default function RestaurantsFilter() {
  const { searchText, handleChangeSearchText, handleSearch } = useSearchRestaurant();
  const {
    tab,
    selectTab,
  } = useRestaurantsTab();

  return (
    <S.RestaurantsFilter>
      <SearchInput
        id="restaurants"
        label="식당 이름 검색"
        placeholder="식당이름을 입력해주세요"
        value={searchText}
        onChange={handleChangeSearchText}
        onSearch={handleSearch}
      />
      <TabList ariaLabel="식당 카테고리" tabs={restaurantsTab} currentTab={tab} selectTab={selectTab} />
    </S.RestaurantsFilter>
  );
}
