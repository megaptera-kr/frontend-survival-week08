import styled from 'styled-components';

const CategoryStyle = styled.li`
  width: calc(100% / 4);
  button {
    width: 100%;
    height: 8.4rem;
    font-size: 4rem;
    text-align: center;
    color: #fff;
    border-radius: 2rem 2rem 0 0;

    &.active {
      color: #ff8400;
      background-color: ${(props) => props.theme.items.itemWrapBg};
    }
  }
`;

type CategoryProps = {
  category: string;
  filterCategory: string;
  setFilterCategory: (text: string) => void;
};

export default function Category({
  category,
  filterCategory,
  setFilterCategory,
}: CategoryProps) {
  return (
    <CategoryStyle>
      <button
        type="button"
        className={filterCategory === category ? 'active' : ''}
        onClick={() => setFilterCategory(category)}
      >
        {category}
      </button>
    </CategoryStyle>
  );
}
