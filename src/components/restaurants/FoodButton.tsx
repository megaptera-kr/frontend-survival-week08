import styled from 'styled-components';
import { Menu } from '../../types/restaurant';
import Image from '../common/Image';

const ButtonContainer = styled.button.attrs({
  type: 'button',
})`
  display: flex;
  flex-direction: column;
  padding: 4rem 3rem;
  border: 1px solid ${(props) => props.theme.colors.sub.background};
  border-radius: 4rem;
  font-size: 3.2rem;
  cursor: pointer;
  background: ${(props) => props.theme.colors.sub.background};
  color: ${(props) => props.theme.colors.sub.text};
  &:hover {
    background: ${(props) => props.theme.colors.main.activeMenuBackground};
    border: 1px solid ${(props) => props.theme.colors.main.activeBorder};
  }
  img {
    margin: 0 2rem;
  }
`;

const MenuName = styled.div`
  margin: 3rem 0 1rem;
`;

type Props = {
  food: Menu;
  handleClick: () => void;
}

export default function MenuButton({ food, handleClick }:Props) {
  return (
    <ButtonContainer
      name={food.name}
      onClick={handleClick}
    >
      <Image
        aria-label={food.name}
        width="20rem"
        height="20rem"
        src={food.image}
        alt={food.name}
      />
      <MenuName>{food.name}</MenuName>
      <div>
        {food.price.toLocaleString()}
        원
      </div>
    </ButtonContainer>
  );
}
