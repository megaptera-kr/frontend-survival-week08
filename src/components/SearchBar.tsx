import styled from 'styled-components';

import searchIcon from '../../static/images/icon-search.png';

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

const SearchIcon = styled.label`
  position: relative;
  position: relative;
  top: -70px;
  right: -458px;
  img {
    display: inline-block;
    width: 60px;
  }
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
  return (
    <SearchBarWrap>
      <SearchBarInput
        id="search-bar"
        type="text"
        placeholder={placeholder}
        value={filterText}
        onChange={handleChange}
      />
      <SearchIcon htmlFor="search-bar">
        <img src={searchIcon} alt="searchIcon" />
      </SearchIcon>
    </SearchBarWrap>
  );
}
