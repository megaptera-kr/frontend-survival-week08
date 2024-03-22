import styled from 'styled-components';

import Food from '../../types/Food';

const MenuItemWrapStyle = styled.li`
  width: 30%;
  button {
    display: block;
    width: 100%;
    height: 39rem;
    padding: 0 3rem;
    border-radius: 4rem;
    border: 3px solid ${(props) => props.theme.items.itemBgBorder};
    background-color: ${(props) => props.theme.items.itemBg};
    cursor: pointer;
  }

  img {
    max-width: 20rem;
    margin: 0 auto 3rem;
  }

  span {
    display: block;
    font-size: 3.2rem;
    color: ${(props) => props.theme.colors.textPrimary};
    text-align: left;
    font-weight: 600;
    & + span {
      margin-top: 1rem;
    }
  }

  &:hover {
    button {
      border: 3px solid ${(props) => props.theme.items.itemHoverBorder};
      background-color: ${(props) => props.theme.items.itemHoverBg};
    }
  }
`;

type MenuItemProps = {
  food: Food;
  onClickItem: () => void;
};

export default function MenuItem({ food, onClickItem }: MenuItemProps) {
  const { name, price, image } = food;
  return (
    <MenuItemWrapStyle>
      <button type="button" onClick={onClickItem}>
        <img src={image} alt={`${name}_이미지`} />
        <span>{name}</span>
        <span>{`${price.toLocaleString()}원`}</span>
      </button>
    </MenuItemWrapStyle>
  );
}
