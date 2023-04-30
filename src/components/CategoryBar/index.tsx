import styled from 'styled-components';
import { useContext } from 'react';
import CATEGORIES from '../../constants/app';
import { Category } from '../../types/restaurant';
import useRestaurantStore from '../../hooks/useRestaurantStore';
import { StyleContext } from '../../context/StyleProvider';

const CategoryList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 4rem;
`;

const CategoryItem = styled.button<{ isDarkMode: boolean; isCurrent: boolean }>`
  width: 23rem;
  height: 8.4rem;
  font-size: 4rem;
  color: ${({ theme, isCurrent }) => (isCurrent ? theme.colors.primary : theme.colors.white)};
  border: none;
  border-radius: 2rem 2rem 0 0;
  background: ${({ theme, isDarkMode, isCurrent }) => {
    if (isCurrent) {
      return isDarkMode ? theme.colors.darkgray100 : theme.colors.white;
    }

    return 'transparent';
  }};
  cursor: pointer;
`;

export default function CategoryBar() {
  const { isDarkMode } = useContext(StyleContext);
  const [{ searchParams }, store] = useRestaurantStore();

  const handleSearch = (category: Category) => () => {
    store.searchRestaurants?.({
      name: searchParams.name,
      category,
    });
  };

  return (
    <CategoryList>
      {CATEGORIES.map((category) => (
        <li key={category}>
          <CategoryItem
            type="button"
            isDarkMode={isDarkMode}
            isCurrent={category === searchParams.category}
            value={category}
            onClick={handleSearch(category as Category)}
          >
            {category}
          </CategoryItem>
        </li>
      ))}
    </CategoryList>
  );
}
