import styled from 'styled-components';
import { Menu } from '../../types/restaurant';

const Container = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 3rem;
  background: ${(props) => props.theme.colors.main.background};
  border-radius: 2rem;
`;

const Title = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
`;

const Button = styled.button.attrs({
  type: 'button',
})`
  background: ${(props) => props.theme.colors.main.background};
  color: ${(props) => props.theme.colors.main.text};
  border: 0;
  font-size: 2.4rem;
  cursor: pointer;
`;

const StrongText = styled.strong`
  color: ${(props) => props.theme.colors.main.strong};
`;

type Props = {
  index: number;
  food: Menu;
  handleClick: () => void;
}

export default function Food({ index, food, handleClick }:Props) {
  return (
    <Container>
      <Title>
        <p>{food.name}</p>
        <Button
          onClick={handleClick}
          data-testid={`${food.name}-${index}`}
          name={`${food.name}-${index}`}
        >
          X
        </Button>
      </Title>
      <StrongText>
        {food.price.toLocaleString()}
        원
      </StrongText>
    </Container>
  );
}
