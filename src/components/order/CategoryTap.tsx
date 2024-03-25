import styled, { css } from 'styled-components';
import Button from '../common/Button';

type LiProps = {
  active?: boolean;
  children?: React.ReactNode;
};

const Li = styled.li.attrs<LiProps>((props) => ({
  active: props.active ?? false,
}))<LiProps>`
  flex-grow: 1;
  text-align: center;
`;

const CategoryButton = styled(Button)`
  font-family: pretendard-regular;
  font-size: 3.8rem;
  color: white;
  width: 100%;
  padding: 2rem;
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;

  ${(props) =>
    props.active &&
    css`
      color: #ff8400;
      background-color: ${props.theme.colors.subBackground};
    `}
`;

type CategoryTap = {
  name: string;
  category: string;
  setCategory: (v: string) => void;
};

export default function CategoryTap({
  name,
  category,
  setCategory,
}: CategoryTap) {
  return (
    <Li>
      <CategoryButton
        onClick={() => setCategory(name)}
        active={category === name}
      >
        {name}
      </CategoryButton>
    </Li>
  );
}
