import styled from 'styled-components';
import Category from '../../../types/category';

type CategoryFitlerProps = {
  categories:Category[]
  selectedCategory:Category
  setSelectedCategory:(category:Category) => void
}

type ButtonProps = {
  type?:'button'|'submit'|'reset'
  active:boolean
}

const StyledCategoryFilter = styled.div`
  margin-top:40px;
  padding-inline: 30px;
  display:flex;
  column-gap:33px;
  align-items: center;
  justify-content: space-between;
`;

const StyledButton = styled.button.attrs<ButtonProps>(
  (props) => ({ type: props.type ?? 'button' }),
)<ButtonProps>`
  width:230px;
  height:84px;
  border-radius: 20px 20px 0 0;
  font-size:${(props) => props.theme.fontSize.lg};
  color:${(props) => (
    props.active
      ? props.theme.colors.primary
      : props.theme.colors.title)};
  background-color:${(props) => (
    props.active
      ? props.theme.colors.restaurant_bg
      : 'transparent')};
`;

function CategoryFilter({
  categories = ['전체'],
  selectedCategory,
  setSelectedCategory,
}:CategoryFitlerProps) {
  const handleClick = (category:Category) => () => {
    setSelectedCategory(category);
  };
  return (
    <StyledCategoryFilter>
      {categories.map((category) => (
        <StyledButton
          key={category}
          active={selectedCategory === category}
          onClick={handleClick(category)}
        >
          {category}
        </StyledButton>
      ))}
    </StyledCategoryFilter>
  );
}

export default CategoryFilter;
