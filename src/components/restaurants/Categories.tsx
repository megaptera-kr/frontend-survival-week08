import styled from 'styled-components';

import Category from './Category';

const CategoryWrap = styled.ul`
  display: flex;
  justify-content: space-between;
`;

type CategoriesProps = {
  categories: Array<string>;
  currentCategory: string;
  setCurrentCategory: (text: string) => void;
}

export default function Categories({
  categories, currentCategory, setCurrentCategory,
}: CategoriesProps) {
  return (
    <CategoryWrap>
      {['전체', ...categories].map((category) => (
        <Category
          key={category}
          category={category}
          currentCategory={currentCategory}
          setCurrentCategory={setCurrentCategory}
        />
      ))}
    </CategoryWrap>
  );
}
