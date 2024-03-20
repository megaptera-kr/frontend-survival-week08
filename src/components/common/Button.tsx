import styled from 'styled-components';

type ButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  active?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
};

const Button = styled.button.attrs<ButtonProps>((props) => ({
  type: props.type ?? 'button',
}))<ButtonProps>`
  cursor: pointer;
  border: none;
  background-color: transparent;
`;

export default Button;
