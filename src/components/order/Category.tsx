import styled from 'styled-components';

type CategoryType = {
  categoryList: string[];
  selectedCategory: string;
  setSelectedCategory: (value: string) => void;
}

type CategoryButtonType = {
  active: boolean;
}

const CategoryList = styled.div`
  display: flex;
  gap: 3.3rem;
  margin-top: 40px;
`;

const CategoryButton = styled.button<CategoryButtonType>`
  width: 230px;
  font-size: 40px;
  border-radius: 20px 20px 0px 0px;
  padding: 21px 0px 11px 0px;
  box-sizing: 'border-box';
  border: none;
  color: ${(props) => (props.active ? '#FF8400' : '#FFF')};
  background: ${(props) => (props.active ? props.theme.colors.background : 'transparent')};
`;

export default function Category({
  categoryList,
  selectedCategory,
  setSelectedCategory,
}: CategoryType) {
  const handleClick = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <CategoryList>
      {
        categoryList.map((category: string) => (
          <CategoryButton
            key={category}
            type="button"
            active={category === selectedCategory}
            onClick={() => handleClick(category)}
          >
            {category}
          </CategoryButton>
        ))
      }
    </CategoryList>
  );
}
