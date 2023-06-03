import styled from 'styled-components';
import useRestaurantStore from '../../hooks/useRestaurantStore';
import CategoryButton from './CategoryButton';

const CategoriesContainer = styled.ul`
  margin: 0 3rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

export default function Categories() {
  const [{ categories, selectedCategory }, store] = useRestaurantStore();

  return (
    <CategoriesContainer>
      {categories.map((category) => (
        <li key={category}>
          <CategoryButton
            isActive={selectedCategory === category}
            name={category}
            handleClick={() => store.selectCategory(category)}
          />
        </li>
      ))}
    </CategoriesContainer>
  );
}
