import styled from 'styled-components';

import CategoryBtn from './CategoryBtn';

const StyledWrapper = styled.div`
  display: flex;
`;

type CategoriesProps = {
  categories: string[];
  selectedCategory: string;
  setCategory: (category: string) => void;
};

export default function Categories({
  categories,
  selectedCategory,
  setCategory,
}: CategoriesProps) {
  return (
    <StyledWrapper>
      {['전체', ...categories].map((category) => (
        <CategoryBtn
          key={category}
          category={category}
          setCategory={setCategory}
          selectedCategory={selectedCategory}
        />
      ))}
    </StyledWrapper>
  );
}
