import styled from 'styled-components';

import useReadCategories from '../../hooks/useReadCategories';

import CategoryTap from './CategoryTap';

import CategoryModel from '../../models/CategoryModel';

const Wrapper = styled.ul`
  display: flex;
  justify-content: space-around;
  margin-top: 3.2rem;
  margin-left: 3.2rem;
  margin-right: 3.2rem;
`;

type FilterTapsProps = {
  category: string;
  setCategory: (v: string) => void;
};

export default function FilterTaps({ category, setCategory }: FilterTapsProps) {
  const { categories } = useReadCategories();

  return (
    <Wrapper>
      {[new CategoryModel({ id: 0, name: '전체' }), ...categories].map(
        (item: CategoryModel) => (
          <CategoryTap
            key={item.id}
            name={item.name}
            category={category}
            setCategory={setCategory}
          />
        ),
      )}
    </Wrapper>
  );
}
