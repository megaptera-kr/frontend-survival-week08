import styled from 'styled-components';

type ButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  active?: boolean;
  onClick?: () => void;
  isDarkMode?: boolean;
  children?: React.ReactNode;
};

const Button = styled.button.attrs<ButtonProps>((props) => ({
  type: props.type ?? 'button',
}))<ButtonProps>`
  border: none;
  background-color: transparent;
  color: ${(props) => props.theme.colors.buttonPrimary};
  cursor: pointer;
  font-family: ${(props) => props.theme.font.brand};
`;

export default Button;
