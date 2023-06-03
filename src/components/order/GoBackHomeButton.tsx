import styled from 'styled-components';

const Container = styled.button.attrs({
  type: 'button',
})`
  width: 100%;
  padding: 3.3rem 0.5rem;
  font-size: 2.8rem;
  border-radius: 5rem;
  border: 0;
  background: ${(props) => (props.theme.colors.main.primary)};
  color: ${(props) => props.theme.colors.main.text};
  cursor: pointer;
`;

type Props = {
  handleClickGoHome: () => void;
  name: string;
}

export default function GoBackHomeButton({ handleClickGoHome, name }:Props) {
  return (
    <Container
      onClick={handleClickGoHome}
    >
      {name}
    </Container>
  );
}
