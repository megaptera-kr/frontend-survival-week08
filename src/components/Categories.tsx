import styled from 'styled-components';
import { useState } from 'react';
import Category from './Category';

const Container = styled.ul`
  display: flex;
  justify-content: space-between;
  padding-inline: ${(props) => props.theme.sizes.contentPadding};
`;

type CategoriesProps = {
  categories: string[];
  setFilterCategory: (text: string) => void;
}

export default function Categories({
  categories, setFilterCategory,
}: CategoriesProps) {
  const [selectedCategory, setCategory] = useState('전체');

  const handleFilterCategory = (category: string) => {
    setFilterCategory(category);

    setCategory(category);
  };

  return (
    <Container>
      {['전체', ...categories].map((category: string) => (
        <Category
          key={category}
          active={category === selectedCategory}
          category={category}
          setFilterCategory={handleFilterCategory}
        />
      ))}
    </Container>
  );
}
