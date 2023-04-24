import styled, { css } from 'styled-components';

import selectCategory from '../utils/selectCategory';

import Restaurant from '../types/Restaurant';

type CategoryProps = {
  restaurants: Restaurant[];
  filterCategory: string;
  setFilterCategory: (text: string) => void;
}

type CateogoryItemProps = {
  filterCategory?: string;
  category?: string
}

const CategoryTab = styled.ul`
  display: flex;
  width: 100%;
  padding: 0 4% 0 3%;
`;

const CateogoryItem = styled.li<CateogoryItemProps>`
  width: 25%;
  height: 82px;
  font-size: 3.5rem;
  font-weight: 500;
  line-height: 8rem;
  text-align: center;
  letter-spacing: -0.03em;
  cursor: pointer;

  span {
    width: 230px;
    height: 84px;
    display: block;
    ${(props) => props.filterCategory === props.category && css`
    color: ${props.theme.colors.selectedCategoryText};
    background: ${props.theme.colors.selectedCategoryBackground};
    border: 1px solid ${props.theme.colors.selectedCategoryBackground};
    border-radius: 20px 20px 0px 0px;
  `}
  }
  
`;

export default function Categories({
  restaurants,
  filterCategory,
  setFilterCategory,
}:CategoryProps) {
  const categories = selectCategory(restaurants);

  const handleClick = (category: string) => {
    setFilterCategory(category);
  };

  return (
    <CategoryTab>
      {
        ['전체', ...categories]?.map((category) => (
          <CateogoryItem
            key={category}
            aria-hidden="true"
            filterCategory={filterCategory}
            category={category}
            onClick={() => { handleClick(category); }}
          >
            <span>
              {category}
            </span>
          </CateogoryItem>
        ))
      }
    </CategoryTab>
  );
}
