import { ChangeEventHandler, useContext } from 'react';
import styled from 'styled-components';
import useRestaurantStore from '../../hooks/useRestaurantStore';
import { StyleContext } from '../../context/StyleProvider';

const StyledContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
`;

const StyledInput = styled.input<{ isDarkMode: boolean }>`
  width: 102rem;
  height: 8rem;
  padding: 2.1rem 3rem;
  font-size: 3.2rem;
  line-height: 3.8rem;

  color: ${({ theme }) => theme.colors.white};
  border: ${({ theme, isDarkMode }) => {
    if (isDarkMode) {
      return `0.2rem solid ${theme.colors.primary}`;
    }

    return `0.2rem solid ${theme.colors.white}`;
  }};
  border-radius: 2rem;
  background: transparent;

  ::placeholder {
    color: ${({ theme }) => theme.colors.white};
    font-size: 3.2rem;
    line-height: 3.8rem;
  }
`;

const StyledIcon = styled.img`
  position: absolute;
  width: 2.8rem;
  top: 2.5rem;
  right: 5.6rem;
`;

export default function SearchBar() {
  const { isDarkMode } = useContext(StyleContext);
  const [{ searchParams }, store] = useRestaurantStore();

  const handleSearch: ChangeEventHandler<HTMLInputElement> = (e) => {
    store.searchRestaurants?.({
      name: e.target.value,
      category: searchParams.category,
    });
  };

  return (
    <StyledContainer>
      <label htmlFor="search">
        <StyledInput id="search" name="검색" type="text" placeholder="식당이름을 입력해주세요" value={searchParams.name} onChange={handleSearch} isDarkMode={isDarkMode} />
        <StyledIcon src="/images/icon-search.png" alt="search" />
      </label>
    </StyledContainer>
  );
}
