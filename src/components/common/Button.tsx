import styled from 'styled-components';

type ButtonStyleProps = {
  type?: 'rest' | 'button' | 'submit';
};

const ButtonStyle = styled.button`
  width: 49%;
  height: 10rem;
  border-radius: 5rem;
  font-size: 2.8rem;
  font-weight: 500;
  color: #fff;
  cursor: pointer;

  &.primary {
    background-color: #ff8400;

    &:hover {
      background-color: #d87000;
    }
  }

  &.secondary {
    background-color: #44272b;

    &:hover {
      background-color: #170a0c;
    }
  }

  &.fullPrimary {
    width: 100%;
  }
`;

type ButtonProps = {
  active: string;
  text: string;
  onClick: () => void;
};

function Button({ active, text, onClick }: ButtonProps) {
  return (
    <ButtonStyle type="button" className={active} onClick={onClick}>
      {text}
    </ButtonStyle>
  );
}

export default Button;
