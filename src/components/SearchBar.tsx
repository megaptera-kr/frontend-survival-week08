import styled, { css } from 'styled-components';

import { useDarkMode } from 'usehooks-ts';
import defaultSearchIcon from '../../static/images/icon-search.png';
import darkSearchIcon from '../../static/images/icon-search-dark.png';

type SearchBarProps = {
  filterText: string;
  setFilterText: (text: string) => void;
  placeholder: string;
}

const SearchBarWrap = styled.div`
  width: 100%;
  height: 130px;
  text-align: center;
  padding: 10px 30px;
`;

type SearchBarIconProps = {
  isDarkMode: boolean;
}

const SearchIcon = styled.label<SearchBarIconProps>`
  position: relative;
  position: relative;
  top: -70px;
  right: -458px;
  img {
    display: inline-block;
    width: 60px;
  }
  ${(props) => props.isDarkMode && css`
    top: -63px;
    img{
      width: 43px;
    }
  `}
  
`;

const SearchBarInput = styled.input`
  width: 98%;
  height: 80px;
  border: 2px solid ${(props) => props.theme.colors.searchBarBorder};
  color: ${(props) => props.theme.colors.searchBarText};
  border-radius: 20px;
  font-size: 3rem;
  padding: 10px 20px;
  background-color: transparent;
  font-family: 'Pretendard-Regular';

  &::placeholder{
    color: ${(props) => props.theme.colors.searchBarText};
  }

  &:focus{
    outline: none;
  }
`;

export default function SearchBar({
  filterText,
  setFilterText,
  placeholder,
}: SearchBarProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setFilterText(value);
  };

  const { isDarkMode } = useDarkMode();

  return (
    <SearchBarWrap>
      <SearchBarInput
        id="search-bar"
        type="text"
        placeholder={placeholder}
        value={filterText}
        onChange={handleChange}
      />
      <SearchIcon htmlFor="search-bar" isDarkMode={isDarkMode}>
        <img src={!isDarkMode ? defaultSearchIcon : darkSearchIcon} alt="searchIcon" />
      </SearchIcon>
    </SearchBarWrap>
  );
}
