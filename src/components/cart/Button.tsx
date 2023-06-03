import styled from 'styled-components';

type Style = {
  name: string;
}

const Container = styled.button.attrs({
  type: 'button',
})<Style>`
  padding: 3.6rem 0.5rem;
  font-size: 2.8rem;
  border-radius: 5rem;
  border: 0;
  background: ${(props) => (props.name === '취소' ? props.theme.colors.sub.primary : props.theme.colors.main.primary)};
  color: ${(props) => props.theme.colors.main.text};
  cursor: pointer;
  &:hover {
    background: ${(props) => (props.name === '취소' ? props.theme.colors.sub.activePrimary : props.theme.colors.main.activePrimary)};
  }
`;

type Props = {
  handleClick: () => void;
} & Style

export default function Button({ name, handleClick }:Props) {
  return (
    <Container
      onClick={handleClick}
      name={name}
    >
      {name}
    </Container>
  );
}
