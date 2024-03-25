import styled from 'styled-components';
import Category from './Category';

const CategoriesStyle = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 4rem;
`;

type CategoriesProps = {
  filterCategory: string;
  categories: string[];
  setFilterCategory: (text: string) => void;
};

function Categories({
  categories,
  filterCategory,
  setFilterCategory,
}: CategoriesProps) {
  return (
    <CategoriesStyle>
      {['전체', ...categories].map((category) => (
        <Category
          key={category}
          category={category}
          filterCategory={filterCategory}
          setFilterCategory={setFilterCategory}
        />
      ))}
    </CategoriesStyle>
  );
}

export default Categories;
