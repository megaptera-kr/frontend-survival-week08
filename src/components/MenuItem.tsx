import styled from 'styled-components';
import Food from '../types/Food';

const Container = styled.li`
  button {
    width: 31rem;
    height: 39.6rem;
    border: 3px solid transparent;
    padding-block: 5.5rem;
    padding-inline: 4rem;
    border-radius: 4rem;
    background:${(props) => props.theme.colors.tertiary};
    color:${(props) => props.theme.colors.text};
  }

  button:hover {
    border: 3px solid ${(props) => props.theme.colors.buttonHoverBorder};
    background: ${(props) => props.theme.colors.buttonHoverBackground};
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-size: 3.2rem;
    font-weight: 600;
  }

  img {
    width: 20rem;
    height: 20rem;
  }
`;

type MenuItemProps = {
  food: Food;
  onClickItem: (food: Food) => void
}

export default function MenuItem({
  food, onClickItem,
}: MenuItemProps) {
  const { name, price, image } = food;

  return (
    <Container>
      <button
        type="button"
        onClick={() => onClickItem(food)}
      >
        <img src={image} alt="" />
        <div>
          <span>{name}</span>
          <span>
            {price.toLocaleString()}
            원
          </span>
        </div>
      </button>
    </Container>
  );
}
