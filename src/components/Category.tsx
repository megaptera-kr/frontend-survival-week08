import styled, { css } from 'styled-components';

const Container = styled.li`
  width: 25%;
`;

type ButtonProps = {
  active: boolean;
}

const Button = styled.button<ButtonProps>`
  font-size: 4rem;
  padding-block: 2.1rem;
  width: 100%;
  border: 0;
  border-top-right-radius: 2rem;
  border-top-left-radius: 2rem;
  background: transparent;
  color: ${(props) => props.theme.colors.secondary};

  ${(props) => props.active && css`
    color: #FF8400;
    background: ${props.theme.colors.background};
    transition: .3s;
  `}
`;

type CategoryProps = {
  active: boolean;
  category: string;
  setFilterCategory: (text: string) => void;
}

export default function Category({
  active, category, setFilterCategory,
}: CategoryProps) {
  return (
    <Container>
      <Button
        type="button"
        active={active}
        onClick={() => setFilterCategory(category)}
      >
        {category}
      </Button>
    </Container>
  );
}
