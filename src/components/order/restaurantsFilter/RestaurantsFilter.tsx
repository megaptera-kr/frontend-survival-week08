import { useSearchRestaurant, useRestaurantsTab } from '../hooks';
import { SearchInput, TabList } from '../../common';
import { restaurantsTab } from '../../../static/restaurantsTab';

import * as S from './RestaurantsFilter.styled';

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
