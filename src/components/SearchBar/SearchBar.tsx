import { ChangeEvent } from 'react';
import * as Styles from './styles';

interface SearchBarProps {
  handleSetSearchKeyword : (keyword : string) => void
}

function SearchBar({ handleSetSearchKeyword } : SearchBarProps) {
  const onChangeSearchKeyword = (event : ChangeEvent<HTMLInputElement>) => {
    handleSetSearchKeyword(event.target.value);
  };
  return (
    <Styles.SearchBarWrapper>
      <Styles.SearchInput
        type="text"
        placeholder="식당 이름을 입력해주세요"
        name="search"
        onChange={onChangeSearchKeyword}
      />
    </Styles.SearchBarWrapper>
  );
}

export default SearchBar;
