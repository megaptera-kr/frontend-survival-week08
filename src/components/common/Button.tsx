import styled from 'styled-components';

type Style = {
  isActive: boolean;
}

type Props = {
  name: string;
} & Style;

const ButtonContainer = styled.span<Style>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 9.8rem;
  height: 5.1rem;
  border-radius: 3rem;
  background: ${(props) => (props.isActive
    ? props.theme.colors.main.background : 'transparent')};
  color: ${(props) => (props.isActive
    ? props.theme.colors.sub.text : props.theme.colors.main.text)};
  transition: all 0.1s ease 0s;

  ${(props) => props.isActive && 'box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.12)'};

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 100%;

  text-align: center;
  letter-spacing: -0.03em;
  text-transform: uppercase;
`;

export default function Button({ name, isActive }:Props) {
  return (
    <ButtonContainer isActive={isActive}>
      {name}
    </ButtonContainer>
  );
}
