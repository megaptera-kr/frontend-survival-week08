import styled from 'styled-components';

type Style = {
  isActive: boolean;
}

const CategoryButtonContainer = styled.button.attrs({
  type: 'button',
})<Style>`
  width: 100%;
  padding-block: 1.6rem;
  font-size: 4rem;
  border: 0;
  background: ${(props) => (props.isActive ? props.theme.colors.sub.activeBackground : 'transparent')};
  color: ${(props) => (props.isActive ? props.theme.colors.main.primary : props.theme.colors.main.text)};
  border-top-left-radius: 1.5rem;
  border-top-right-radius: 1.5rem;
  cursor: pointer;
`;

type Props = {
  name: string;
  handleClick: () => void;
} & Style

export default function CategoryButton({ name, handleClick, isActive }:Props) {
  return (
    <CategoryButtonContainer
      isActive={isActive}
      onClick={handleClick}
    >
      {name}
    </CategoryButtonContainer>
  );
}
